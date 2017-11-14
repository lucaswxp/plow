"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lang_1 = require("@cashfarm/lang");
class OrderableResult {
    constructor(items) {
        this.items = items;
    }
    get count() {
        return this.items.length;
    }
    orderBy(selector, order) {
        if (lang_1.isBlank(order))
            order = lang_1.OrderDirection.Asc;
        const result = this.items.sort(lang_1.makeCompareFn(selector, order));
        return new OrderableResult(result);
    }
    orderByDescending(selector) {
        return this.orderBy(selector, lang_1.OrderDirection.Desc);
    }
    thenBy(selector, order) {
        return this.orderBy(selector, lang_1.isBlank(order) ? lang_1.OrderDirection.Asc : order);
    }
    toArray(limit = 0, offset = 0) {
        return this.items.slice(offset, offset + limit);
    }
    // Iterable protocol
    [Symbol.iterator]() {
        let pointer = 0;
        const items = this.items;
        return {
            next() {
                if (pointer < items.length) {
                    return {
                        done: false,
                        value: items[pointer += 1]
                    };
                }
                else {
                    return { done: true, value: undefined };
                }
            }
        };
    }
}
exports.OrderableResult = OrderableResult;
//# sourceMappingURL=orderableResult.js.map