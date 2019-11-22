import express, {json} from 'express';
import morgan from 'morgan';
import locationRoutes from './routes/location.js';
import SpecialtyRoutes from './routes/specialty.js';
import StageRoutes from './routes/stage.js';
import MaterialRoutes from './routes/material';
import EngineerRoutes from './routes/engineer';

const app= express();
app.use(morgan('dev'));
app.use(json());

app.use('/api/engineer',EngineerRoutes);
app.use('/api/material',MaterialRoutes);
app.use('/api/stage',StageRoutes);
app.use('/api/location',locationRoutes);
app.use('/api/specialty',SpecialtyRoutes)
export default app