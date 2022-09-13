import { useState } from "react"
import { addTask } from "../Redux/Action"
import { useDispatch } from "react-redux"
const AddTask=()=>{
    const dispatch=useDispatch()
    const [description,setDescription] = useState('')
    const handleAdd=()=>{
        description == "" ? alert('Empty Field') : dispatch(addTask({id: Math.random(),description,isDone: false})) 
        setDescription('')
    }
    return(
        <>
         <label for="inp" class="inp">
           <input value={description} type="text" id="inp" placeholder="&nbsp;" onChange={(e)=> setDescription(e.target.value) }/>
           {/* <span class="label"></span>
           <span class="focus-bg"></span> */}
         </label>
        {/* <input value={description} type='text' onChange={(e)=> setDescription(e.target.value) }/> */}
        <button className='button-42' onClick={handleAdd}>Add</button>
        </>
    )
}
export default AddTask