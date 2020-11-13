"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ResponsibleController {
  async postResponsible(request, response) {
    const {
      name,
      email,
      password
    } = request.body;
    return response.status(204).json();
  }

  async postLogin(request, response) {
    const {
      email,
      password
    } = request.body;
    const result = {
      token: _jsonwebtoken.default.sign({
        id: '123123'
      }, `idealix@123`, {
        expiresIn: '7d'
      })
    };
    return response.status(200).json(result);
  }

}

exports.default = ResponsibleController;