import { useDispatch } from "react-redux"
import { editTask } from "../Redux/Action"
const TaskCard=({task})=>{
    const dispatch=useDispatch()

    return(
        <>
        <h3 className={task.isDone ? "amir":"mahmoud"}>{task.description}</h3>
       <button className='button-42' onClick={()=>dispatch(editTask(task.id))}>{task.isDone ? "Undone" : "Done"}</button>
        </>
    )
}
export default TaskCard