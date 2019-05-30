import './TaskList.css'

import React from 'react'
import TaskItem from './TaskItem'

import { getTodayTask } from '../selectors/task'

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
    tasks:  getTodayTask(state)
})

export default connect(mapStateToProps)(TaskList);