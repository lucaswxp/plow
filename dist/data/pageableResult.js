"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderableResult_1 = require("./orderableResult");
const pagingOptions_1 = require("./pagingOptions");
/**
 * Represents a group of items which can be paged.
 * @export
 * @class PageableResult
 * @extends OrderableResult<T>
 * @implements IPageableResult<T>
 * @template T
 */
class PageableResult extends orderableResult_1.OrderableResult {
    constructor(items, pageSize = 20, currPage = 1) {
        super(items);
        this.pagingOptions = new pagingOptions_1.PagingOptions(items.length, pageSize, currPage);
    }
    page(page, pageSize) {
        const start = (page - 1) * pageSize;
        return new orderableResult_1.OrderableResult(this.items.slice(start, start + pageSize));
    }
}
exports.PageableResult = PageableResult;
//# sourceMappingURL=pageableResult.js.map