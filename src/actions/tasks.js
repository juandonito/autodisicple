import { TASK_ADD, TASK_TOGGLE } from '../constants/actionTypes'

import uuid from 'uuid'

export const doAddTask = (title) => ({
    type: TASK_ADD,
    task : {
        title,
        id: uuid(),
        done: false
    }
})

export const doToggleTask = (id) => ({
    type: TASK_TOGGLE,
    task : {
        id
    }
})