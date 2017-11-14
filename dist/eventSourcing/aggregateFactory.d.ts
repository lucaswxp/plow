import { ConcreteType } from '@cashfarm/lang';
import { AggregateRoot } from '../domain';
import { EventEnvelope } from '../eventSourcing';
export declare class AggregateFactory {
    static create<T extends AggregateRoot<any>>(aggtType: ConcreteType<T>, events: EventEnvelope[]): T;
}
