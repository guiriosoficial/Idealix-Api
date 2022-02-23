import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import HistoricController from 'controllers/historic.controller';
import ensureAuthentication from 'middlewares/authHandler';

const historicController = new HistoricController();
const historicRouter = Router();

historicRouter.use(ensureAuthentication);
historicRouter.get(
    '/:childId',
    celebrate({
        [Segments.PARAMS]: {
            childId: Joi.string().uuid().required(),
        },
    }),
    historicController.getHistoric
)
historicRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            childId: Joi.string().uuid().required(), 
            weight: Joi.number().required(),
            height: Joi.number().required(),
            measurementDate: Joi.date().required()
        },
    }),
    historicController.postHistoric
)

export default historicRouter;
