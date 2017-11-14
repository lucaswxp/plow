import { ExtendedObject } from '@cashfarm/lang';
import { Identity } from './identity';
export interface IEntity<TId> {
    readonly id: TId;
}
/**
 * Abstract Base Class for Entities
 *
 * @export
 * @abstract
 * @class Entity
 * @extends {IEntity<TId>}
 * @template TId The type of this entities identity.
 */
export declare abstract class Entity<TId extends Identity<any>> extends ExtendedObject implements IEntity<TId> {
    protected _id: TId;
    /**
     * Persistent identity value for the Entity
     * @readonly
     * @type {TId}
     */
    readonly id: TId;
    constructor(id?: TId);
}
