"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _celebrate = require("celebrate");

var _express = require("express");

var _classification = _interopRequireDefault(require("../controller/classification.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classificationController = new _classification.default();
const classificationRouter = (0, _express.Router)();
classificationRouter.get('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.QUERY]: {
    gender: _celebrate.Joi.string().regex(/^[F-M]{1}$/)
  }
}), classificationController.getClassification);
var _default = classificationRouter;
exports.default = _default;