import { ConcreteType } from '@cashfarm/lang';
import { DomainEvent } from '../domain';
export declare class EventsRegistry {
    private readonly events;
    static readonly instance: EventsRegistry;
    private constructor();
    static add(eventName: string, eventClass: ConcreteType<DomainEvent>): void;
    static get(eventName: string): ConcreteType<DomainEvent>;
    add(eventName: string, eventClass: ConcreteType<DomainEvent>): void;
    get(eventName: string): ConcreteType<DomainEvent>;
}
