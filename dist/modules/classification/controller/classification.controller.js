"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ClassificationController {
  async getClassification(request, response) {
    const result = [{
      id: 1,
      gender: "F",
      weight: 0.45,
      height: 1.45,
      age: 2
    }];
    return response.status(200).json(result);
  }

}

exports.default = ClassificationController;