import { TASK_ADD, TASK_TOGGLE } from '../constants/actionTypes'

const INITIAL_STATE = [];

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TASK_ADD: {
            return applyTaskAdd(state, action);
        }
        case TASK_TOGGLE:{
            return applyTaskToggle(state, action);
        }
        default : return state; 
    }
}

const applyTaskAdd = (state, action) => {
    return [ ...state, action.task]
}

const applyTaskToggle = (state, action) => {
    return state.map(task => (task.id === action.task.id) ? {...task, done: !task.done} : task)
}

export default tasksReducer;