import express from 'express';
import { getRepository } from 'typeorm';
import Orphanages from './model/orphanates';

import './database/connection';

const app = express();
app.use(express.json());

app.post('/create_orphanages', async (request,response) => {
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
})

app.listen(3333);