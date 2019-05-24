import { TASK_ADD } from '../constants/actionTypes'

import uuid from 'uuid'

const doAddTask = (title) => ({
    type: TASK_ADD,
    task : {
        title,
        id: uuid()
    }
})

export {
    doAddTask
}