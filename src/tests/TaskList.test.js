import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import store from '../store'
import Provider from 'react-redux'

import TaskList from '../components/TaskList'

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
            <Provider store={store}>
                <TaskList tasks={TASK_LIST}/>
            </Provider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

    test('has valid snapshot', () => {
        const component = renderer.create(
            <Provider store={store}>
                <TaskList tasks={TASK_LIST}/>
            </Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    
})