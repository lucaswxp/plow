"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const aggregateFactory_1 = require("./aggregateFactory");
const debug = require('debug')('plow:events:repository');
class EventSourcedRepositoryOf {
    constructor(storage, aggtClass, eventPublisher) {
        this.storage = storage;
        this.aggtClass = aggtClass;
        this.eventPublisher = eventPublisher;
    }
    save(aggregate) {
        return this.storage.save(aggregate)
            .then(nextVersion => {
            const events = aggregate.uncommittedChanges.slice();
            if (this.eventPublisher)
                events.map(e => this.eventPublisher.publish(e));
            aggregate.markChangesAsCommitted();
            return events;
        });
    }
    getById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            debug(`Getting aggregate of ${this.aggtClass.name} with id ${id}`);
            const evts = yield this.storage.getEventsByAggregate(this.aggtClass, id);
            if (evts.length === 0)
                return null;
            return aggregateFactory_1.AggregateFactory.create(this.aggtClass, evts);
        });
    }
}
exports.EventSourcedRepositoryOf = EventSourcedRepositoryOf;
//# sourceMappingURL=eventSourcedRepository.js.map