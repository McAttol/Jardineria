import conn from "../connection.js";

const taskController = {}

taskController.getTaskList = (req, res) =>{
    const sql = 'SELECT * FROM tasks'
    conn.query(sql, (error, result)=>{
        if(error)throw error
        if(result.length > 0){
            res.json(result)
        }else{
            res.send('Not result')
        }
    })
}

taskController.getTaskListByDate = (req, res) =>{
    const { date } = req.params;
    const sql = `SELECT * FROM tasks WHERE start = '${date}'`;
    conn.query(sql, (error, result)=>{
        if(error)throw error
        if(result.length > 0){
            res.json(result)
        }else{
            res.send('Not result')
        }
    })
}

taskController.getTaskById = (req, res) =>{
    const { id } = req.params;
    const sql = `SELECT * FROM tasks WHERE id = ${id}`;
    conn.query(sql, (error, result)=>{
        if(error)throw error
        if(result.length > 0){
            res.json(result)
        }else{
            res.send('Not result')
        }
    })
}

taskController.addTask = (req, res) =>{
    const newTask = {
        task_name : req.body.task_name,
        task_surname: req.body.task_surname,
        task_phone: req.body.task_phone,
        task_mail: req.body.task_mail
    }

    const sql = 'INSERT INTO tasks SET ?'

    conn.query(sql, newTask, error =>{
        if(error)throw error
        res.json(newTask)
    })
}

taskController.editTask = (req, res) =>{
    const {id} = req.params
    const {task_title, task_body, task_done, task_created_by, task_closed_by} = req.body
    const sql = `UPDATE tasks SET task_title = ${task_title}, task_body = ${task_body}, task_done = ${task_done} , task_created_by = ${task_created_by}, task_closed_by = ${task_closed_by} WHERE task_id = ${id} `

    conn.query(sql, (error, result)=>{
        if(error)throw error
        res.send('Task updated!')
    })
}

taskController.deleteTask = (req, res) =>{
    const { id } = req.params
    const sql = `DELETE FROM tasks WHERE task_id = ${id}`

    conn.query(sql, (error, result)=>{
        if(error) throw error
        res.send('Task deleted!')
    })
}

export default taskController;