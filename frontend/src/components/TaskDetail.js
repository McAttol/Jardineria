import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const TaskDetail = () => {

    const [task, setTask] = useState(null)

    const { id } = useParams();

    const fetchTasksData = (id) => {
        axios.get(`http://localhost:8000/tasks/${id}`)
        .then(response => {
            setTask(response.data)
        }, error => {console.log(error)})
    }

    useEffect(()=>{
        fetchTasksData(id)
    }, [id])


    const renderTaskDetail = (task) =>{
       return(
          <h2>{task[0].title}</h2>
        )  
    }

    console.log(task)

    return(
        <div className="task-detail">
            {task !== 'Not result' && task !== null ? renderTaskDetail(task) : <p>{`Task doesn't exist`}</p>}
        </div>
    )
}

export default TaskDetail;