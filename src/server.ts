import express from 'express';
import './database/connection';
import routes from './routes/routes';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/uploads',express.static(path.join(__dirname, '..','uploads')))
app.listen(3333);