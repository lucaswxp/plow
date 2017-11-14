/**
 * @module cqrs.commandHandler
 */
import { ICommand } from './command';
/**
 * Handles events of class
 * Type of event.
 * @export
 * @interface ICommandHandler
 * @template T Command type
 */
export interface IHandleCommand<TCommand extends ICommand> {
    /**
     * Handles the command
     * @param {TCommand} command The command object
     * @returns {handle}
     */
    handle(event: TCommand): void;
}
/**
 * Provides a base `handle(ICommand)` method which calls `handle{ICommand.name}()`
 *
 * @export
 * @class CommandHandler
 */
export declare class CommandHandler {
    handle(cmd: ICommand): void;
}
