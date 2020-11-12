import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ClassificationController from '../controller/classification.controller';

const classificationController = new ClassificationController();
const classificationRouter = Router();
classificationRouter.get(
    '/',
    celebrate({
        [Segments.QUERY]: {
            gender: Joi.string().regex(/^[F-M]{1}$/),
        },
    }),
    classificationController.getClassification
)
export default classificationRouter;