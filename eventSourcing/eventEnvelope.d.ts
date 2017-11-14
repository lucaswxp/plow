import { Guid } from '@cashfarm/lang';
import { Identity } from '../domain';
export interface IEventEnvelope {
    readonly id: string;
    readonly created: Date;
    readonly aggregateType: string;
    readonly aggregateId: Identity<any>;
    readonly version: number;
    readonly eventType: string;
    readonly eventData: Object;
    readonly metadata: Object;
}
export declare class EventEnvelope {
    readonly created: Date;
    readonly aggregateType: string;
    readonly aggregateId: Identity<any>;
    readonly version: number;
    readonly eventType: string;
    readonly eventData: Object;
    readonly metadata: Object;
    readonly id: Guid;
    constructor(props?: IEventEnvelope);
    constructor(id: Guid, created: Date, aggregateType: string, aggregateId: Identity<any>, version: number, eventType: string, eventData: Object, metadata: Object);
}
