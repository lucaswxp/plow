"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lang_1 = require("@cashfarm/lang");
const entity_1 = require("./entity");
const symbols_1 = require("../symbols");
const symbolFunctions_1 = require("./symbolFunctions");
const eventSourcing_1 = require("../eventSourcing");
const debug = require('debug')('plow:aggregate');
const APPLY_CHANGE = Symbol('APPLY_CHANGE');
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
class AggregateRoot extends entity_1.Entity {
    constructor() {
        super(...arguments);
        this._version = -1;
        this._changes = [];
    }
    static load(constructor, events) {
        const t = AggregateRoot.construct(constructor);
        t._version = -1;
        t._changes = [];
        const mappedEvts = events.map(ee => {
            const klass = eventSourcing_1.EventsRegistry.get(ee.eventType);
            const e = klass[symbols_1.Symbols.EventLoader](ee.eventData);
            if (e.constructor !== klass) {
                throw new Error(`${klass.name}[EventLoader]() method did not return an instance of ${klass.name}.
          It returned a ${e.constructor ? e.constructor.name : typeof e} instead`);
            }
            return e;
        });
        t.loadFromHistory(mappedEvts);
        return t;
    }
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
    static construct(constructor) {
        return Object.create(constructor.prototype);
    }
    static getDescriptor(realConstructor) {
        const descriptor = {};
        Object.getOwnPropertyNames(realConstructor.prototype).forEach(p => {
            descriptor[p] = Object.getOwnPropertyDescriptor(realConstructor.prototype, p);
        });
        return descriptor;
    }
    get id() {
        return this._id;
    }
    get version() {
        return this._version;
    }
    get uncommittedChanges() {
        return this._changes;
    }
    markChangesAsCommitted() {
        this._version += this._changes.length;
        this._changes.length = 0;
    }
    applyChange(event) {
        this[APPLY_CHANGE](event, true);
    }
    loadFromHistory(history) {
        this._version = history.length - 1;
        history.forEach(event => this[APPLY_CHANGE](event, false));
    }
    [APPLY_CHANGE](event, isNew) {
        const evtName = event[symbols_1.Symbols.EventName] || event.constructor[symbols_1.Symbols.EventName] || event.constructor.name;
        // Find out the method to apply the function to
        let applyEvent = `apply${evtName}`;
        if (!this[applyEvent]) {
            const constructor = Object.getPrototypeOf(event) ? Object.getPrototypeOf(event).constructor : null;
            if (constructor && this[symbolFunctions_1.Apply(constructor)] instanceof Function)
                applyEvent = symbolFunctions_1.Apply(constructor);
        }
        if (!applyEvent || !(this[applyEvent] instanceof Function)) {
            const actualImpl = this[applyEvent] instanceof Function ?
                `The aggregate ${this.constructor.name} property [Apply(${evtName})] is a ${typeof this[applyEvent]}` :
                `The Aggregate ${this.constructor.name} has no apply method for ${evtName}`;
            throw new Error(`For each event, an aggregate MUST implement an apply method called either apply${evtName}
        or using a symbol generated by the Apply function, e.g. protected [Apply(${evtName})](evt: ${evtName}): void {}.

        ${actualImpl}`);
        }
        this[applyEvent](event);
        if (isNew)
            this._changes.push(event);
    }
}
tslib_1.__decorate([
    lang_1.hide(),
    tslib_1.__metadata("design:type", Number)
], AggregateRoot.prototype, "_version", void 0);
tslib_1.__decorate([
    lang_1.hide(),
    tslib_1.__metadata("design:type", Array)
], AggregateRoot.prototype, "_changes", void 0);
exports.AggregateRoot = AggregateRoot;
exports.default = AggregateRoot;
//# sourceMappingURL=aggregateRoot.js.map