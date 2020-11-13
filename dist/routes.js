"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _child = _interopRequireDefault(require("@modules/child/routes/child.routes"));

var _classification = _interopRequireDefault(require("@modules/classification/routes/classification.routes"));

var _historic = _interopRequireDefault(require("@modules/historic/routes/historic.routes"));

var _responsible = _interopRequireDefault(require("@modules/responsible/routes/responsible.routes"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/responsible', _responsible.default);
routes.use('/child', _child.default);
routes.use('/historic', _historic.default);
routes.use('/classification', _classification.default);
var _default = routes;
exports.default = _default;