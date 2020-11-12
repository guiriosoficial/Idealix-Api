"use strict";

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

require("dotenv/config");

require("reflect-metadata");

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.default);
app.listen(4000, () => {
  console.log('🚀 Server started on http://localhost:4000  ');
});