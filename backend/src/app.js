import express from 'express';
import customerRouter from './routes/customers.routes.js';
import employeeRouter from './routes/employees.routes.js';
import tasckRouter from './routes/tascks.routes.js';

const PORT = 8000;
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.json());
app.use(express.text());
app.use(customerRouter);
app.use(employeeRouter);
app.use(tasckRouter);


app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
})