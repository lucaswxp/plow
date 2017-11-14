"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lang_1 = require("@cashfarm/lang");
/**
 * Abstract Base Class for Entities
 *
 * @export
 * @abstract
 * @class Entity
 * @extends {IEntity<TId>}
 * @template TId The type of this entities identity.
 */
class Entity extends lang_1.ExtendedObject {
    constructor(id) {
        super();
        this._id = id;
    }
    /**
     * Persistent identity value for the Entity
     * @readonly
     * @type {TId}
     */
    get id() {
        return this._id;
    }
}
tslib_1.__decorate([
    lang_1.serializeAs('id'),
    tslib_1.__metadata("design:type", Object)
], Entity.prototype, "_id", void 0);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map