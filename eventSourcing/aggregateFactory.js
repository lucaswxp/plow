"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../domain");
// tslint:disable-next-line:no-stateless-class
class AggregateFactory {
    static create(aggtType, events) {
        if (!events || events.length === 0)
            throw new Error(`The events parameter must be an array with at least 1 event.\n
${aggtType.name}.create() received ${events}`);
        return domain_1.AggregateRoot.load(aggtType, events);
    }
}
exports.AggregateFactory = AggregateFactory;
//# sourceMappingURL=aggregateFactory.js.map