import childRouter from 'routes/child.routes';
import classificationRouter from 'routes/classification.routes';
import historicRouter from 'routes/historic.routes';
import responsibleRouter from 'routes/responsible.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/responsible', responsibleRouter);
routes.use('/child', childRouter);
routes.use('/historic', historicRouter);
routes.use('/classification', classificationRouter);

export default routes;
