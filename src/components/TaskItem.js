import './TaskItem.css'

import React from 'react'

export const TaskItem = ({ task }) => {
    return (
        <div className='TaskItem'>{task.title}</div>
    )
}

export default TaskItem;