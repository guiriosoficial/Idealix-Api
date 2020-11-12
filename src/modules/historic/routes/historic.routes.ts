import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ensureAuthenticated from 'middlewares/auth.middleware';
import HistoricController from '../controller/historic.controller';

const historicController = new HistoricController();
const historicRouter = Router();
historicRouter.use(ensureAuthenticated);
historicRouter.get(
    '/:id_child',
    celebrate({
        [Segments.PARAMS]: {
            id_child: Joi.string().uuid().required(),
        },
    }),
    historicController.getHistoric
)
historicRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            id_child: Joi.string().uuid().required(), 
            weight: Joi.number().required(),
            height: Joi.number().required(),
            measurement_date: Joi.date().required()
        },
    }),
    historicController.postHistoric
)
export default historicRouter;