import { useParams } from "react-router-dom"

function TaskDetail() {

    const { id } = useParams();

    return(
        <>
            {`tarea nº: ${id}`}
        </>
    )
}

export default TaskDetail;
 