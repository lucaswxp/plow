/**
 *  Encapsulates options for paging results.
 *
 * @class PagingOptions
 */
export declare class PagingOptions {
    private _pageSize;
    /**
     * Gets or sets the size of the page.
     * @type {number}
     */
    pageSize: number;
    /**
     * Gets or sets the page.
     * @type {number}
     */
    page: number;
    /**
     * Gets or sets the total.
     * @type {number}
     */
    total: number;
    /**
     * Gets the page count.
     * @readonly
     * @type {number}
     */
    readonly pageCount: number;
    constructor(total: number, pageSize: number, currPage: number);
    /**
     * Returns the starting page number to show on pagination components
     *
     * Based on the amount of numbers displayed on the pagination component, this method will return the
     * starting number so the selected page is in middle, if possible.
     *
     * @param {number} amountOfNumbers How many numbers will be displayed on the component
     * @returns {number} The first page number
     */
    getStartPageNumber(amountOfNumbers: number): number;
}
