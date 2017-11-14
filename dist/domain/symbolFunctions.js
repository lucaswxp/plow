"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a symbol used to created methods that apply events to agrregates
 *
 * @export
 * @param {(DomainEvent & Type)} e
 * @returns {symbol}
 */
function Apply(e) {
    return Symbol.for(e.prototype.constructor.name);
}
exports.Apply = Apply;
/**
 * Returns a symbol used to created methods that handle events
 *
 * @export
 * @param {(DomainEvent & Type)} e
 * @returns {symbol}
 */
function Handle(e) {
    return Symbol.for(e.prototype.constructor.name);
}
exports.Handle = Handle;
//# sourceMappingURL=symbolFunctions.js.map