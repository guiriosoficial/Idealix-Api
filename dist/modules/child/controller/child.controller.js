"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ChildController {
  async postChild(request, response) {
    const {
      id
    } = request.user;
    const {
      name,
      gender,
      birthday
    } = request.body;
    return response.status(204).json();
  }

  async getChild(request, response) {
    const {
      id
    } = request.user;
    const result = [{
      id: 123,
      name: 'Aline',
      birthday: '2000-03-01',
      id_responsible: id
    }];
    return response.status(200).json(result);
  }

}

exports.default = ChildController;