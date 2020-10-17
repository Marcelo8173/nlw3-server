import { Router } from 'express';
import OrphanagesController from '../ controller/orphanagesController';

const routes = Router();

routes.post('/create_orphanages', OrphanagesController.create);
routes.get('/create_orphanages', OrphanagesController.index);

export default routes;