"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lang_1 = require("@cashfarm/lang");
// tslint:disable:max-classes-per-file
class InvalidIdentityValueException extends Error {
    constructor(value, identityTypeName) {
        super(`The value '${value}' isn't valid for creating an identity of type ${identityTypeName}`);
    }
}
exports.InvalidIdentityValueException = InvalidIdentityValueException;
class Identity {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    equals(other) {
        return this === other || this._value === other._value;
    }
    toString() {
        return this._value.toString();
    }
    valueOf() {
        return this._value;
    }
    toJSON() {
        return this.toString();
    }
}
exports.Identity = Identity;
class GuidIdentity extends Identity {
    constructor(guid) {
        super();
        if (guid instanceof lang_1.Guid) {
            this._value = guid;
        }
        else if (typeof guid === 'string') {
            if (!lang_1.Guid.isValidGuid(guid)) {
                throw new InvalidIdentityValueException(guid, 'GuidIdentity');
            }
            this._value = new lang_1.Guid(guid);
        }
        else {
            this._value = new lang_1.Guid();
        }
    }
    toString() {
        return this.value.toString().toUpperCase();
    }
    toJSON() {
        return this.toString();
    }
}
exports.GuidIdentity = GuidIdentity;
class IntIdentity extends Identity {
    constructor(value) {
        super(value);
    }
}
exports.IntIdentity = IntIdentity;
class StringIdentity extends Identity {
    constructor(value) {
        super(value);
    }
}
exports.StringIdentity = StringIdentity;
//# sourceMappingURL=identity.js.map