import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

function TasckListByDate() {

    const [tasks, setTask] = useState([]);
    const [onDate, setOnDate] = useState('');

    const { date } = useParams();

    const fetchTasksDataByDate = (date) => {
        axios.get(`http://localhost:8000/tasks/date/${date}`)
        .then(response => {
            setTask(response.data)
        }, error => {console.log(error)})
    }
    
    useEffect(()=>{
        setOnDate(date)
        fetchTasksDataByDate(date)
    },[date])

    const taskList = () =>{
        return(
            tasks.map((task, i)=>(
                <Link to={`/tasks/${task.id}`} className="taskLink" key={i}>{task.title}</Link>
            ))
        )
    }
    
    return(
        <>
            <h2>{onDate}</h2>
            {tasks !== 'Not result' ? taskList() : <p>{'No tasks today'}</p>}
        </>
    )
}

export default TasckListByDate;