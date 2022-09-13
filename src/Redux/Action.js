import { ADDTASK, EDITTASK } from "./ActionType"

export const addTask=(payload)=>{
    return(
        {type:ADDTASK,payload}
    )
}
export const editTask=(payload)=>{
    return(
        {type:EDITTASK,payload}
    )
}