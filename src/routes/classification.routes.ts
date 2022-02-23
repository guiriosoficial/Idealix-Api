import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ClassificationController from 'controllers/classification.controller';

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
