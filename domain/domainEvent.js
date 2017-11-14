"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = require("../symbols");
/**
 * Base class for all domain events.
 *
 * @export
 * @abstract
 * @class DomainEvent
 * @template TSource Type of object publishing events.
 */
// tslint:disable-next-line:no-stateless-class
class DomainEvent {
    constructor(name) {
        this.constructor[symbols_1.Symbols.EventName] = name || this.constructor.name;
    }
}
exports.DomainEvent = DomainEvent;
//# sourceMappingURL=domainEvent.js.map