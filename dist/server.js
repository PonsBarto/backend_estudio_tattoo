"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./data-source");
//--------------------------------------------------------
const port = 3000;
(async () => {
    try {
        await data_source_1.AppDataSource.initialize();
        console.log("================================================");
        console.log("     🔋Data Base has been initialized🔋");
        app_1.default.listen(port, () => {
            console.log(`      🚀Server running on port ${port}🚀`);
            console.log("================================================");
        });
    }
    catch (error) {
        console.error("🚫Error during Data Source initialization🚫", error);
    }
})();
