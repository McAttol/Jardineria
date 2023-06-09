import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function TasckList() {

    const [tasks, setTask] = useState([]);

    const fetchTasksData = (date) => {
        axios.get(`http://localhost:8000/tasks`)
        .then(response => {
            setTask(response.data)
        }, error => {console.log(error)})
    }
    
    useEffect(()=>{
        fetchTasksData()
    })

    const taskList = () =>{
        return(
            tasks.map((task, i)=>(
                <Link to={`/tasks/${task.id}`} className="taskLink" key={i}>{task.title}</Link>
            ))
        )
    }
    
    return(
        <>
            <h2>Tasks List</h2>
            {tasks !== 'Not result' ? taskList() : <p>{'No tasks today'}</p>}
        </>
    )
}

export default TasckList;