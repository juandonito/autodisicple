import './App.css'

import React from 'react'

import NewTaskBar from './NewTaskBar'
import TaskList from './TaskList'

function App () {
    return (
        <div className='App'>
            <NewTaskBar />
            <TaskList />
        </div>
    )
}

export default App;