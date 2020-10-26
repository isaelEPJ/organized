import { Router } from 'express';
import { getRepository } from 'typeorm';
import Task from '../model/tasks';
import CreateTaskService from '../services/createTaskService';

const TasksRoutes = Router();

TasksRoutes.get('/', async (req, res) => {
    const taskRepository = getRepository(Task);
    const tasks = await taskRepository.find();
    return res.json(tasks);
});
TasksRoutes.post('/create', async (req, res) => {
    try {
        const { title, content, user_id, flag } = req.body;

        const createTask = new CreateTaskService();

        const task = await createTask.Execute({
            title,
            content,
            user_id,
            flag,
        });
        return res.json(task);
    } catch (err) {
        return res.status(201).json({ error: err.message });
    }
});

export default TasksRoutes;
