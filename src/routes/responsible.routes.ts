import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ResponsibleController from 'controllers/responsible.controller';

const responsibleController = new ResponsibleController();
const responsibleRouter = Router();

responsibleRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    }),
    responsibleController.postLogin
)
responsibleRouter.post(
    '/register',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    }),
    responsibleController.postResponsible
)

export default responsibleRouter;
