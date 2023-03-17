import express from 'express';
import customerRouter from './routes/customers.routes.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.text());
app.use(favicon(__dirname + '#'));
app.use(customerRouter);

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
})