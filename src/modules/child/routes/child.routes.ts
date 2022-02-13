import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ensureAuthentication from 'middlewares/authHandler';
import ChildController from '../controller/child.controller';

const childController = new ChildController();
const childRouter = Router();

childRouter.use(ensureAuthentication)
childRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            gender: Joi.string().required(),
            birthday: Joi.date().required(),
        },
    }),
    childController.postChild
)
childRouter.get(
    '/',
    childController.getChild
)
export default childRouter;