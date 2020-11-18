"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _celebrate = require("celebrate");

var _express = require("express");

var _auth = _interopRequireDefault(require("middlewares/auth.middleware"));

var _historic = _interopRequireDefault(require("../controller/historic.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const historicController = new _historic.default();
const historicRouter = (0, _express.Router)();
historicRouter.use(_auth.default);
historicRouter.get('/:childId', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    childId: _celebrate.Joi.string().uuid().required()
  }
}), historicController.getHistoric);
historicRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    childId: _celebrate.Joi.string().uuid().required(),
    weight: _celebrate.Joi.number().required(),
    height: _celebrate.Joi.number().required(),
    measurementDate: _celebrate.Joi.date().required()
  }
}), historicController.postHistoric);
var _default = historicRouter;
exports.default = _default;