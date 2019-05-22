import { TASK_ADD } from '../constants/actionTypes'

const INITIAL_STATE = [];

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TASK_ADD: {
            return applyTaskAdd(state, action);
        }
        default : return state; 
    }
}

const applyTaskAdd = (state, action) => {
    return [ ...state, action.title]
}

export default tasksReducer;