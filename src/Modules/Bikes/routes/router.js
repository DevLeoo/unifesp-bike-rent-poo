"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const routes = (0, express_1.Router)();
routes.get("/", controllers_1.getAllBikes);
routes.get("/find", controllers_1.findOneBike);
routes.post("/register", controllers_1.registerBike);
routes.delete("/remove", controllers_1.deleteBike);
exports.default = routes;
//# sourceMappingURL=router.js.map