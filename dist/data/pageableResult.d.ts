import { IEnumerable } from '@cashfarm/lang';
import { OrderableResult, IOrderableResult } from './orderableResult';
export interface IPageableResult<T> extends IOrderableResult<T> {
    page(page: number, pageSize: number): IOrderableResult<T>;
}
/**
 * Represents a group of items which can be paged.
 * @export
 * @class PageableResult
 * @extends OrderableResult<T>
 * @implements IPageableResult<T>
 * @template T
 */
export declare class PageableResult<T> extends OrderableResult<T> implements IPageableResult<T> {
    private pagingOptions;
    constructor(items: IEnumerable<T>, pageSize?: number, currPage?: number);
    page(page: number, pageSize: number): IOrderableResult<T>;
}
