import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ChildController from 'controllers/child.controller';
import ensureAuthentication from 'middlewares/authHandler';

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
    childController.getChilds
)

export default childRouter;
