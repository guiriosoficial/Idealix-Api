import childRouter from '@modules/child/routes/child.routes';
import classificationRouter from '@modules/classification/routes/classification.routes';
import historicRouter from '@modules/historic/routes/historic.routes';
import responsibleRouter from '@modules/responsible/routes/responsible.routes';
import { Router } from 'express';

const routes = Router();
routes.use('/responsible', responsibleRouter);
routes.use('/child', childRouter);
routes.use('/historic', historicRouter);
routes.use('/classification', classificationRouter);
export default routes;
