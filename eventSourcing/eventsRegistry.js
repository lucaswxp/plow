"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = require("../symbols");
const SINGLETON = Symbol.for('cashfarm.plow.events.registry');
const debug = require('debug')('plow:events:registry');
class EventsRegistry {
    static get instance() {
        return global[SINGLETON] || (global[SINGLETON] = new EventsRegistry());
    }
    constructor() {
        this.events = {};
        Object.freeze(this);
    }
    static add(eventName, eventClass) {
        return EventsRegistry.instance.add(eventName, eventClass);
    }
    static get(eventName) {
        return EventsRegistry.instance.get(eventName);
    }
    add(eventName, eventClass) {
        if (!eventName) {
            const e = new Error('eventName is required for registering events');
            console.error(e.stack);
            throw e;
        }
        if (typeof eventClass[symbols_1.Symbols.EventLoader] !== 'function')
            throw new Error(`Cannot register event ${eventName} class is missing public static function [Symbols.EventLoader](): ${eventName} `);
        this.events[eventName] = eventClass;
        debug(`${eventName} added to the registry`);
    }
    get(eventName) {
        return this.events[eventName];
    }
}
exports.EventsRegistry = EventsRegistry;
Object.freeze(EventsRegistry);
//# sourceMappingURL=eventsRegistry.js.map