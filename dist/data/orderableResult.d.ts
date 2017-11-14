import { Expression, IEnumerable, OrderDirection } from '@cashfarm/lang';
export interface IOrderableResult<T> {
    count: number;
    orderBy(selector: Expression<T, number | string>): IOrderedResult<T>;
    toArray(): Array<T>;
    toArray(limit: number): Array<T>;
    toArray(limit: number, offset: number): Array<T>;
}
export interface IOrderedResult<T> {
    thenBy(selector: Expression<T, number | string>): IOrderedResult<T>;
    toArray(): Array<T>;
    toArray(limit: number): Array<T>;
    toArray(limit: number, offset: number): Array<T>;
}
export declare class OrderableResult<T> implements IOrderableResult<T>, IOrderedResult<T>, Iterable<T> {
    protected items: IEnumerable<T>;
    readonly count: number;
    constructor(items: IEnumerable<T>);
    orderBy(selector: Expression<T, number | string>): OrderableResult<T>;
    orderBy(selector: Expression<T, number | string>, order: OrderDirection): OrderableResult<T>;
    orderByDescending(selector: Expression<T, number | string>): OrderableResult<T>;
    thenBy(selector: Expression<T, number | string>): OrderableResult<T>;
    toArray(): Array<T>;
    toArray(limit: number): Array<T>;
    [Symbol.iterator](): Iterator<T>;
}
