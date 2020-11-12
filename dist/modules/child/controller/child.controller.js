"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChildController {
  async registerUser(request, response) {
    const {
      name,
      email,
      password
    } = request.body;
    return response.status(204).json();
  }

  async loginUser(request, response) {
    const {
      email,
      password
    } = request.body;
    const result = {
      token: _jsonwebtoken.default.sign({
        id: '123123'
      }, process.env.JWT_SECRET || '', {
        expiresIn: '7d'
      })
    };
    return response.status(200).json(result);
  }

}

exports.default = ChildController;