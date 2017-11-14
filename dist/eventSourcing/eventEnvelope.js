"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lang_1 = require("@cashfarm/lang");
class EventEnvelope {
    constructor(idOrObj, created, aggregateType, aggregateId, version, eventType, eventData, metadata) {
        this.created = created;
        this.aggregateType = aggregateType;
        this.aggregateId = aggregateId;
        this.version = version;
        this.eventType = eventType;
        this.eventData = eventData;
        this.metadata = metadata;
        if (idOrObj instanceof lang_1.Guid) {
            this.id = idOrObj;
        }
        else {
            Object.getOwnPropertyNames(idOrObj).forEach(p => this[p] = idOrObj[p]);
        }
    }
}
exports.EventEnvelope = EventEnvelope;
//# sourceMappingURL=eventEnvelope.js.map