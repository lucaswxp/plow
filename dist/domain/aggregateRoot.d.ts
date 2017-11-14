import { ConcreteType, IEnumerable } from '@cashfarm/lang';
import { Identity } from './identity';
import { IEntity, Entity } from './entity';
import { DomainEvent } from './domainEvent';
import { EventEnvelope } from '../eventSourcing';
export interface IAggregateRoot<TId extends Identity<any>> extends IEntity<TId> {
    readonly id: TId;
    readonly version: number;
    readonly uncommittedChanges: DomainEvent[];
    markChangesAsCommitted(): void;
}
/**
 * Base implementation of an aggregate root.
 *
 * Extend this class and implement apply{event name}() methods for
 * each event of your aggregate.
 *
 * @export
 * @class AggregateRoot
 * @template TId
 */
export declare abstract class AggregateRoot<TId extends Identity<any>> extends Entity<TId> implements IAggregateRoot<TId> {
    private _version;
    private _changes;
    static load<T extends AggregateRoot<any>>(constructor: ConcreteType<T>, events: IEnumerable<EventEnvelope>): T;
    /**
     * Simulate a private constructor to allow instantiating without
     * required arguments. This should ONLY be used to create Orders when
     * loading from event stream or inside Order.clone() method.
     *
     * @private
     * @static
     * @returns {Order}
     *
     * @memberOf Order
     */
    private static construct<T>(constructor);
    private static getDescriptor<T>(realConstructor);
    readonly id: TId;
    readonly version: number;
    readonly uncommittedChanges: DomainEvent[];
    markChangesAsCommitted(): void;
    protected applyChange(event: DomainEvent): void;
    private loadFromHistory(history);
}
export default AggregateRoot;
