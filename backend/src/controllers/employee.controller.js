import conn from "../connection.js";

const employeeController = {}

employeeController.getEmployeesList = (req, res) =>{
    const sql = 'SELECT * FROM employees'
    conn.query(sql, (error, result)=>{
        if(error)throw error
        if(result.length > 0){
            res.json(result)
        }else{
            res.send('Not result')
        }
    })
}

employeeController.getEmployeeById = (req, res) =>{
    const { id } = req.params;
    const sql = `SELECT * FROM employees WHERE employee_id = ${id}`;
    conn.query(sql, (error, result)=>{
        if(error)throw error
        if(result.length > 0){
            res.json(result)
        }else{
            res.send('Not result')
        }
    })
}

employeeController.addEmployee = (req, res) =>{
    const newEmployee = {
        employee_name : req.body.employee_name,
        employee_surname: req.body.employee_surname,
        employee_phone: req.body.employee_phone,
        employee_mail: req.body.employee_mail,
        employee_password: req.body.employee_password,
        employee_category: req.body.employee_category
    }

    const sql = 'INSERT INTO employees SET ?'

    conn.query(sql, newEmployee, error =>{
        if(error)throw error
        res.json(newEmployee)
    })
}

employeeController.editEmployee = (req, res) =>{
    const {id} = req.params
    const {employee_name, employee_surname, employee_phone, employee_mail, employee_password, employee_category} = req.body
    const sql = `UPDATE employees SET employee_name = ${employee_name}, employee_surname = ${employee_surname}, employee_phone = ${employee_phone}, employee_mail ${employee_mail}, employee_password ${employee_password}, employee_category ${employee_category} WHERE employee_id = ${id} `

    conn.query(sql, (error, result)=>{
        if(error)throw error
        res.send('Employee updated!')
    })
}

employeeController.deleteEmployee = (req, res) =>{
    const { id } = req.params
    const sql = `DELETE FROM employees WHERE employee_id = ${id}`

    conn.query(sql, (error, result)=>{
        if(error) throw error
        res.send('Employee deleted!')
    })
}

export default employeeController;