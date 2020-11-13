"use strict";

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

require("dotenv/config");

require("reflect-metadata");

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("routes"));

var _error_handler = _interopRequireDefault(require("@shared/error_handler"));

var _celebrate = require("celebrate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.default);
app.use((request, response, next) => {
  throw new _error_handler.default('Not Found', 404);
});
app.use((0, _celebrate.errors)());
app.use((err, request, response, _) => {
  if (err instanceof _error_handler.default) {
    return response.status(err.statusCode).json({
      status: 'Error',
      message: err.message
    });
  }

  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error!'
  });
});
app.listen(4000, () => {
  console.log('🚀 Server started on http://localhost:4000  ');
});