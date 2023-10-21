"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const routes = (0, express_1.Router)();
routes.get("/", controllers_1.getAllUsers);
routes.get("/find", controllers_1.findOneUser);
routes.post("/register", controllers_1.registerUser);
routes.delete("/remove", controllers_1.deleteUser);
exports.default = routes;
//# sourceMappingURL=router.js.map