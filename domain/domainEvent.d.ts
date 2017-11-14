/**
 * @deprecated Use the DomainEvent class instead
 */ export interface IDomainEvent {
}
/**
 * Base class for all domain events.
 *
 * @export
 * @abstract
 * @class DomainEvent
 * @template TSource Type of object publishing events.
 */
export declare abstract class DomainEvent {
    constructor(name?: string);
}
