"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGreetingBuilder = void 0;
const architect_1 = require("@angular-devkit/architect");
const rxjs_1 = require("rxjs");
const createGreetingBuilder = (options, context) => {
    context.logger.info("Hello from Greeting Builder", options);
    return (0, rxjs_1.of)({ success: true });
};
exports.createGreetingBuilder = createGreetingBuilder;
exports.default = (0, architect_1.createBuilder)(exports.createGreetingBuilder);
