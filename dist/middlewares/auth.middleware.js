"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureAuthenticated;

var _jsonwebtoken = require("jsonwebtoken");

function ensureAuthenticated(request, response, next) {
  debugger;
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'JWT token is missing'
    });
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
    return response.status(401).json({
      message: 'JWT is invalid token'
    });
  }
}