import { Guid } from '@cashfarm/lang';
export interface ICommand {
    readonly id: Guid;
    readonly name: string;
}
export declare class Command {
    readonly name: string;
    constructor(name: string);
}
