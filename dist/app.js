"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const app = (0, express_1.default)();
// Parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Applications Routes
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.send("FutureStack Blog");
});
// Global Error Handling Middleware
app.use(globalErrorHandler_1.default);
// API not found
app.use(notFound_1.default);
exports.default = app;
