import Fullcalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Calendar() {

    const [taskList, setTaskList] = useState([])

    const navigate = useNavigate()

    const fetchTasksData = () => {
        axios.get('http://localhost:8000/tasks')
        .then(response => {
            setTaskList(response.data)
        }, error => {console.log(error)})
    }

    useEffect(()=>{
        if(!taskList.length){
            fetchTasksData()
        }
    },[taskList])

    return(
        <div className='calendar'> 
            <Fullcalendar 
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    start: 'prev, backButton',
                    center: 'title',
                    end: 'next, createTaskButton'
                }}
                height={'75vh'}
                events={taskList}
                dateClick={(info)=>{
                    navigate(`/tasks/date/${info.dateStr}`)
                }}
                eventClick={(event)=>{
                    navigate(`/tasks/${event.event._def.publicId}`)
                }}
                customButtons={{
                    backButton: {
                        text: 'Back',
                        click: ()=>{
                            navigate(-1)
                        }
                    },
                    createTaskButton: {
                        text: 'Add',
                        click: ()=>{
                            alert('to form create task')
                        }
                    }
                }}
            />
        </div>
    )
}

export default Calendar;