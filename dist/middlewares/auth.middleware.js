"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureAuthenticated;

var _error_handler = _interopRequireDefault(require("@shared/error_handler"));

var _jsonwebtoken = require("jsonwebtoken");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new _error_handler.default('JWT token is missing', 401);
  }

  const [token] = authHeader.split(' ');

  try {
    const decoded = (0, _jsonwebtoken.verify)(token, process.env.JWT_SECRET || '');
    const {
      id
    } = decoded;
    request.user = {
      id
    };
    return next();
  } catch {
    throw new _error_handler.default('JWT is invalid', 401);
  }
}