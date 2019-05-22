import { TASK_ADD } from '../constants/actionTypes'

const doAddTask = (title) => ({
    type: TASK_ADD,
    title
})

export {
    doAddTask
}