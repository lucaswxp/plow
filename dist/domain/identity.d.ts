import { Guid } from '@cashfarm/lang';
export declare class InvalidIdentityValueException extends Error {
    constructor(value: string, identityTypeName: string);
}
export interface IIdentity<TId> {
    value: TId;
}
export declare abstract class Identity<TId> implements IIdentity<TId> {
    protected _value: TId;
    readonly value: TId;
    constructor(value?: TId);
    equals(other: Identity<TId>): boolean;
    toString(): string;
    valueOf(): TId;
    toJSON(): string;
}
export declare class GuidIdentity extends Identity<Guid> {
    constructor(guid?: string | Guid);
    toString(): string;
    toJSON(): string;
}
export declare class IntIdentity extends Identity<number> {
    constructor(value: number);
}
export declare class StringIdentity extends Identity<string> {
    constructor(value: string);
}
