import express from 'express';
import controller from '../controllers/customer.controller.js';

const customerRouter = express.Router();

customerRouter.get('/customers', controller.getList);
customerRouter.get('/customers/:id', controller.getById);
customerRouter.post('/customers/add', controller.addCustomer);
customerRouter.patch('/customers/update/:id', controller.editCustomer);
customerRouter.delete('/customers/delete/:id', controller.deleteCustomer);

export default customerRouter;