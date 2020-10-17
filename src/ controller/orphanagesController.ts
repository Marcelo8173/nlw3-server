import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../model/orphanates';


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
            const orphanages = orphanagesRepository.create({
                name,
                latitude, 
                longitude,
                about,
                instuctions,
                open_hours,
                open_on_weekends  
            });
            await orphanagesRepository.save(orphanages);
        
            return response.json(orphanages);
        }
        async index(request:Request,response:Response){
            const orphanagesRepository = getRepository(Orphanages);
            const orphanages = await orphanagesRepository.find();
            return response.json(orphanages);
        }
    }


export default new OrphanagesController();