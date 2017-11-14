import * as EventStore from 'node-eventstore-client';
import { Guid, IEnumerable, Type } from '@cashfarm/lang';
import { AggregateRoot, Identity } from '../../domain';
import { EventEnvelope } from '../eventEnvelope';
import { IEventStore } from '../iEventStore';
export declare class GesEventStore implements IEventStore {
    private host;
    private port;
    private settings;
    constructor(host?: string, port?: number, settings?: EventStore.ConnectionSettings);
    save<T extends AggregateRoot<Identity<Guid>>>(aggregate: T): Promise<number>;
    getEventsByAggregate(aggregateType: Type, aggregateId: Identity<Guid>): Promise<IEnumerable<EventEnvelope>>;
    private convertToEnvelope(event);
    private saveEvents(aggtType, aggtId, events, expectedVersion);
    private getEvents(streamName, start, limit?);
    private withConn<T>(f);
    private connect();
    private getStreamName(type, id);
}
