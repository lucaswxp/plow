"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Provides a base `handle(ICommand)` method which calls `handle{ICommand.name}()`
 *
 * @export
 * @class CommandHandler
 */
class CommandHandler {
    handle(cmd) {
        // Find out the method to apply the function to
        const commandName = cmd.name;
        this[`handle${commandName}`](cmd);
    }
}
exports.CommandHandler = CommandHandler;
//# sourceMappingURL=commandHandler.js.map