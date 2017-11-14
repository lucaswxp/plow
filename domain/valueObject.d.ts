import { ExtendedObject } from '@cashfarm/lang';
/**
 * Base class for ValueObject's
 *
 * A value object is an object whose identitiy is
 * determined by it's properties values.
 *
 * Value objects MUST:
 * - Be immutable
 * - Be compared by value-equality
 * @export
 * @class ValueObject
 */
export declare class ValueObject<TObject> extends ExtendedObject {
    private ctr;
    private propNames;
    /**
     * @param ctr Your value object's constructor
     * @param propNames Name of the properties to pass to constructor IN ORDER
     */
    constructor(ctr: new (...args: any[]) => TObject, propNames: (keyof TObject)[]);
    equals(other: ValueObject<TObject>): boolean;
    protected newInstanceWith(updatedProps: Partial<TObject>): TObject;
}
