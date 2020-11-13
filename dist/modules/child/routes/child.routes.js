"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _celebrate = require("celebrate");

var _express = require("express");

var _auth = _interopRequireDefault(require("middlewares/auth.middleware"));

var _child = _interopRequireDefault(require("../controller/child.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const childController = new _child.default();
const childRouter = (0, _express.Router)();
childRouter.use(_auth.default);
childRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    name: _celebrate.Joi.string().required(),
    gender: _celebrate.Joi.string().required(),
    birthday: _celebrate.Joi.date().required()
  }
}), childController.postChild);
childRouter.get('/', childController.getChild);
var _default = childRouter;
exports.default = _default;