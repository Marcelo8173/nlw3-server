import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../model/orphanates';
import orphangsView from '../views/orphanges_view';

class OrphanagesController{
        async create(request:Request,response:Response) {
            const {
                name,
                latitude, 
                longitude,
                about,
                instuctions,
                open_hours,
                open_on_weekends  
            } = request.body;
        
            const orphanagesRepository = getRepository(Orphanages);
            const requestImages = request.files as Express.Multer.File[];
            const images = requestImages.map(image => {
                return {
                    path: image.filename
                }
            })
            const orphanages = orphanagesRepository.create({
                name,
                latitude, 
                longitude,
                about,
                instuctions,
                open_hours,
                open_on_weekends,
                images
            });
            await orphanagesRepository.save(orphanages);
        
            return response.json(orphanages);
        }
        async index(request:Request,response:Response){
            const orphanagesRepository = getRepository(Orphanages);
            const orphanages = await orphanagesRepository.find({
                relations: ['images']
            });
            return response.json(orphangsView.renderToMany(orphanages));
        }
        async show(request:Request,response:Response){
            const {id} = request.params;
            const orphanagesRepository = getRepository(Orphanages);
            const orphanages = await orphanagesRepository.findOneOrFail(id, {
                relations: ['images']
            });
            return response.json(orphangsView.render(orphanages));
        }   
    }


export default new OrphanagesController();