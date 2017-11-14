"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base class for domain exceptions
 *
 * No utility here, except that you can differentiate this exceptions
 * from unexpected errors by using instanceof operator.
 *
 * @export
 * @class DomainException
 * @extends {Error}
 */
class DomainException extends Error {
}
exports.DomainException = DomainException;
//# sourceMappingURL=domainException.js.map