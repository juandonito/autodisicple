import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import renderer from 'react-test-renderer'

import App from '../components/App'

describe('App', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>, 
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Provider store={store}>
                <App/>
            </Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

})