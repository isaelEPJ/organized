import { Router } from 'express';
import TasksRoutes from './tasks.routes';

const routes = Router();

routes.use('/tasks', TasksRoutes);

export default routes;
