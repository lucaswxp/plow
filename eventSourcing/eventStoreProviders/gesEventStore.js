"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Bluebird = require("bluebird");
const EventStore = require("node-eventstore-client");
const debug = require('debug')('plow:events:ges');
const lang_1 = require("@cashfarm/lang");
const eventEnvelope_1 = require("../eventEnvelope");
const symbols_1 = require("../../symbols");
class GesEventStore {
    constructor(host = 'localhost', port = 1113, settings = {}) {
        this.host = host;
        this.port = port;
        this.settings = settings;
    }
    save(aggregate) {
        return this.saveEvents(aggregate.constructor, aggregate.id.value, aggregate.uncommittedChanges, aggregate.version)
            .then(results => results.reduce((r, c) => c.nextExpectedVersion, 0));
    }
    getEventsByAggregate(aggregateType, aggregateId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const events = [];
            let currentSlice;
            let nextSliceStart = 0;
            const streamName = this.getStreamName(aggregateType, aggregateId.value);
            const conn = yield this.connect();
            debug(`Reading events stream ${streamName}`);
            do {
                currentSlice = yield conn.readStreamEventsForward(streamName, nextSliceStart, 200);
                nextSliceStart = currentSlice.nextEventNumber;
                events.push(...currentSlice.events.map(this.convertToEnvelope));
            } while (!currentSlice.isEndOfStream);
            conn.close();
            debug(`Got the ${events.length} events`);
            return events;
        });
    }
    convertToEnvelope(event) {
        const e = event.event;
        const metadata = JSON.parse(e.metadata.toString());
        return new eventEnvelope_1.EventEnvelope({
            id: e.eventId,
            created: new Date(e.createdEpoch),
            eventData: JSON.parse(e.data.toString()),
            eventType: e.eventType,
            metadata,
            aggregateId: metadata.aggregateId,
            aggregateType: metadata.aggregateType,
            version: e.eventNumber
        });
    }
    saveEvents(aggtType, aggtId, events, expectedVersion) {
        if (!events || events.length === 0)
            throw new Error('Parameter events cannot be null or empty');
        const streamName = this.getStreamName(aggtType, aggtId);
        const evtsData = events.map(evt => EventStore.createJsonEventData(new lang_1.Guid().toString(), evt, {
            aggregateType: aggtType.name,
            aggregateId: aggtId.toString()
        }, evt[symbols_1.Symbols.EventName]));
        debug(`Saving events to stream ${streamName}`);
        return Promise.resolve(this.withConn(conn => Bluebird.mapSeries(evtsData, evt => Bluebird.resolve(conn.appendToStream(streamName, expectedVersion, evt)
            .then(result => {
            expectedVersion = result.nextExpectedVersion;
            return result;
        })))));
    }
    getEvents(streamName, start, limit = 4096) {
        return Promise.resolve(this.withConn(conn => Bluebird.resolve(conn.readStreamEventsForward(streamName, start, limit))));
    }
    withConn(f) {
        return this.connect()
            .then(conn => {
            return f(conn)
                .then((res) => {
                conn.close();
                return res;
            });
        });
    }
    connect() {
        const conn = EventStore.createConnection(this.settings, `tcp://${this.host}:${this.port}`);
        return Bluebird.resolve(conn.connect().then(() => conn));
    }
    getStreamName(type, id) {
        return `${type.name}-${id.toString().toUpperCase()}`;
    }
}
exports.GesEventStore = GesEventStore;
//# sourceMappingURL=gesEventStore.js.map