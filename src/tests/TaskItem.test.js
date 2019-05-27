import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

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

    test('has valid snapshot', () => {
        const component = renderer.create(
            <TaskItem task={TASK} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

})