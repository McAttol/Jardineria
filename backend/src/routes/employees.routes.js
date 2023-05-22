import express from 'express';
import employeeController from '../controllers/employee.controller.js';

const employeeRouter = express.Router();

employeeRouter.get('/employees', employeeController.getEmployeesList);
employeeRouter.get('/employees/:id', employeeController.getEmployeeById);
employeeRouter.post('/employees/add', employeeController.addEmployee);
employeeRouter.patch('/employees/update/:id', employeeController.editEmployee);
employeeRouter.delete('/employees/delete/:id', employeeController.deleteEmployee);

export default employeeRouter;