import { useState } from "react"
import { useSelector } from "react-redux"
import TaskCard from "./TaskCard"

const TaskList=()=>{
    const tasks=useSelector(state=>state.tasks)

    const [filterT,setFilterT] = useState('all')
    return(
        <>
        <button className='button-42' onClick={()=>setFilterT('all')}>All</button>
        <button className='button-42' onClick={()=>setFilterT('done')}>Done</button>
        <button className='button-42' onClick={()=>setFilterT('undone')}>Undone</button>
        {
            filterT == 'all' ?
            tasks.map(task=><TaskCard task={task}/>)
            :
            filterT == 'done' ?
            tasks.filter(task => task.isDone == true).map(task=><TaskCard task={task}/>)
            :
            tasks.filter(task => task.isDone == false).map(task=><TaskCard task={task}/>)
        }

        
     
        </>
    )
}
export default TaskList