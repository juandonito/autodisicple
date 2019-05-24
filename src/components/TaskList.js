import './TaskList.css'

import React from 'react'
import TaskItem from './TaskItem'

import { connect } from 'react-redux'

export const TaskList = ({ tasks }) => {

    return (
        <div className='TaskList'>
            {
                tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks:  state.tasksState
})

export default connect(mapStateToProps)(TaskList);