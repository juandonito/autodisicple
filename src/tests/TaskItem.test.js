import React from 'react'
import ReactDOM from 'react-dom'

import { TaskItem } from '../components/TaskItem'

describe('TaskItem', () => {

    const TASK = {
        title: 'this is a task test',
        id: 1
    }

    it('renders whitout crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TaskItem task={TASK}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

})