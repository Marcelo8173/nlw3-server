import { Router } from 'express';
import OrphanagesController from '../ controller/orphanagesController';
import multer from 'multer';
import uploadConfig from '../config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/create_orphanages', upload.array('images') ,OrphanagesController.create);
routes.get('/create_orphanages', OrphanagesController.index);
routes.get('/create_orphanages/:id', OrphanagesController.show);


export default routes;