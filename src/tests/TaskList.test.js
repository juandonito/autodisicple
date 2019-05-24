import React from 'react'
import ReactDOM from 'react-dom'

import { TaskList } from '../components/TaskList'

describe('TaskList', () => {

    const TASK_LIST = [
        {
            title: 'test 1',
            id: 1
        },
        {
            title: 'test 2',
            id: 2
        },
        {
            title: 'test 3',
            id: 3
        }  
    ]

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <TaskList tasks={TASK_LIST}/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
    
})