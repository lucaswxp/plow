"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lang_1 = require("@cashfarm/lang");
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
class ValueObject extends lang_1.ExtendedObject {
    /**
     * @param ctr Your value object's constructor
     * @param propNames Name of the properties to pass to constructor IN ORDER
     */
    constructor(ctr, propNames) {
        super();
        this.ctr = ctr;
        this.propNames = propNames;
    }
    equals(other) {
        return !Object.keys(this).some(prop => {
            // return true if prop is different
            if (typeof this[prop].equals === 'function') {
                return !this[prop].equals(other[prop]);
            }
            return this[prop] !== other[prop];
        });
    }
    newInstanceWith(updatedProps) {
        return new this.ctr(...this.propNames.map(p => updatedProps.hasOwnProperty(p) ? updatedProps[p] : this[p]));
    }
}
exports.ValueObject = ValueObject;
//# sourceMappingURL=valueObject.js.map