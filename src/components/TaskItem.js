import './TaskItem.css'

import React from 'react'
import { connect } from 'react-redux'
import { doToggleTask } from '../actions/tasks'

export const TaskItem = ({ task, onToggleTask }) => {
    
    const style = 'TaskItem' + (task.done ? ' done' : '');

    return (
        <div className={style} onClick={() => onToggleTask(task.id)}>{task.title}</div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleTask: id => dispatch(doToggleTask(id))
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);