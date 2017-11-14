"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  Encapsulates options for paging results.
 *
 * @class PagingOptions
 */
class PagingOptions {
    /**
     * Gets or sets the size of the page.
     * @type {number}
     */
    get pageSize() {
        return this._pageSize;
    }
    set pageSize(size) {
        if (size < 1)
            throw new Error('pageSize must be greater than 0');
        this._pageSize = size;
    }
    /**
     * Gets the page count.
     * @readonly
     * @type {number}
     */
    get pageCount() {
        return Math.ceil(this.total / this.pageSize);
    }
    constructor(total, pageSize, currPage) {
        this.total = total;
        this.pageSize = pageSize;
        this.page = currPage;
    }
    /**
     * Returns the starting page number to show on pagination components
     *
     * Based on the amount of numbers displayed on the pagination component, this method will return the
     * starting number so the selected page is in middle, if possible.
     *
     * @param {number} amountOfNumbers How many numbers will be displayed on the component
     * @returns {number} The first page number
     */
    getStartPageNumber(amountOfNumbers) {
        const odd = amountOfNumbers % 2;
        const half = (amountOfNumbers / 2);
        if (this.pageCount < amountOfNumbers || this.page <= half + odd)
            return 1;
        //  we are over (or at) the middle of the list
        let last = this.page + half + odd;
        if (last > this.pageCount + 1) {
            last = this.pageCount + 1;
        }
        return last - amountOfNumbers > 1 ? last - amountOfNumbers : 1;
    }
}
exports.PagingOptions = PagingOptions;
//# sourceMappingURL=pagingOptions.js.map