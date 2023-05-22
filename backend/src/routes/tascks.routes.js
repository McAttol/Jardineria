import express from 'express';
import taskController from '../controllers/task.controller.js';

const taskRouter = express.Router();

taskRouter.get('/tasks', taskController.getTaskList);
taskRouter.get('/tasks/:id', taskController.getTaskById);
taskRouter.get('/tasks/date/:date', taskController.getTaskListByDate);
taskRouter.post('/tasks/add', taskController.addTask);
taskRouter.patch('/tasks/update/:id', taskController.editTask);
taskRouter.delete('/tasks/delete/:id', taskController.deleteTask);

export default taskRouter;