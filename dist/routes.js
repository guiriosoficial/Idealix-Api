"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _child = _interopRequireDefault(require("@modules/child/routes/child.routes"));

var _login = _interopRequireDefault(require("@modules/login/routes/login.routes"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/login', _login.default);
routes.use('/child', _child.default);
var _default = routes;
exports.default = _default;