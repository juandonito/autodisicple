import ReactDOM from 'react-dom'
import React from 'react'
import renderer from 'react-test-renderer'

import { NewTaskBar } from '../components/NewTaskBar'

describe('NewTask', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NewTaskBar/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <NewTaskBar/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

})