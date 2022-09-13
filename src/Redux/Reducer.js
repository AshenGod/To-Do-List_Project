import {ADDTASK,EDITTASK} from './ActionType'
const intialState={
   tasks:[
    {
        id: Math.random(),
        description: 'Provide?',
        isDone: false
    },
    {
        id: Math.random(),
        description: 'Make a screencast.) for other operating systems as well.',
        isDone: true
    },
    {
        id: Math.random(),
        description: 'Provide contact information of the person that reported the bug.',
        isDone: false
    },
    {
        id:Math.random(),
        description: 'Spoil your developers with details. highly recommended.',
        isDone: false
    }

]
   
}

const Reducer=(state=intialState,action)=>{
    switch (action.type) {
        case ADDTASK: return {...state,tasks:[...state.tasks,action.payload]}
        case EDITTASK: return {...state,tasks:state.tasks.map(task=>task.id==action.payload? {...task,isDone:!task.isDone}:task)}
        default: return state;
    }


}
export default Reducer