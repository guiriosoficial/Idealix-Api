"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class HistoricController {
  async postHistoric(request, response) {
    const {
      childId,
      weight,
      height,
      measurementDate
    } = request.body;
    return response.status(204).json();
  }

  async getHistoric(request, response) {
    const { childId } = request.params;
    const { id } = request.user;
    const result = [{
      childId,
      weight: 0.45,
      height: 1.45,
      measurementDate: '2020-04-10'
    }];
    return response.status(200).json(result);
  }

}

exports.default = HistoricController;