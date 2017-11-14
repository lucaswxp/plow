import { Type } from '@cashfarm/lang';
import { DomainEvent } from './domainEvent';
/**
 * Returns a symbol used to created methods that apply events to agrregates
 *
 * @export
 * @param {(DomainEvent & Type)} e
 * @returns {symbol}
 */
export declare function Apply(e: DomainEvent & Type): symbol;
/**
 * Returns a symbol used to created methods that handle events
 *
 * @export
 * @param {(DomainEvent & Type)} e
 * @returns {symbol}
 */
export declare function Handle(e: DomainEvent & Type): symbol;
