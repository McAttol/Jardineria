import conn from "../connection.js";

const controller = {}

controller.getList = (req, res) =>{
    const sql = 'SELECT * FROM customers'
    conn.query(sql, (error, result)=>{
        if(error)throw error
        if(result.length > 0){
            res.json(result)
        }else{
            res.send('Not result')
        }
    })
}

controller.getById = (req, res) =>{
    const { id } = req.params;
    const sql = `SELECT * FROM customers WHERE customer_id = ${id}`;
    conn.query(sql, (error, result)=>{
        if(error)throw error
        if(result.length > 0){
            res.json(result)
        }else{
            res.send('Not result')
        }
    })
}

controller.addCustomer = (req, res) =>{
    const newCustomer = {
        customer_name : req.body.customer_name,
        customer_surname: req.body.customer_surname,
        customer_phone: req.body.customer_phone,
        customer_mail: req.body.customer_mail
    }

    const sql = 'INSERT INTO customers SET ?'

    conn.query(sql, newCustomer, error =>{
        if(error)throw error
        res.json(newCustomer)
    })
}

controller.editCustomer = (req, res) =>{
    const {id} = req.params
    const {customer_name, customer_surname, customer_phone, customer_mail} = req.body
    const sql = `UPDATE customers SET customer_name = ${customer_name}, customer_surname = ${customer_surname}, customer_phone = ${customer_phone}, customer_mail ${customer_mail} `

    conn.query(sql, (error, result)=>{
        if(error)throw error
        res.send('Customer updated!')
    })
}

controller.deleteCustomer = (req, res) =>{
    const { id } = req.params
    const sql = `DELETE FROM customers WHERE customer_id = ${id}`

    conn.query(sql, (error, result)=>{
        if(error) throw error
        res.send('Customer deleted!')
    })
}

export default controller;