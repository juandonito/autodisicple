import './NewTaskBar.css'

import React from 'react'

import { connect } from 'react-redux'
import { doAddTask } from '../actions/tasks'

export class NewTaskBar extends React.Component{

    state = {
        input : ''
    }

    handleInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleInputSubmit = (e) => {
        e.preventDefault();
        this.props.onTaskAdd(this.state.input);
        this.setState({
            input: ''
        })
    }

    render() {

        const { input } = this.state;

        return (
            <div className='NewTaskBar'>
                <form onSubmit={this.handleInputSubmit}>
                    <input 
                        type = 'text' 
                        placeholder = 'New task' 
                        value = {input}
                        onChange = {this.handleInputChange}
                        spellCheck='false'
                    />
                </form>
            </div>
        )

    }

}

const mapDispatchToProps = dispatch => ({
    onTaskAdd: title => dispatch(doAddTask(title))
});

export default connect(null, mapDispatchToProps)(NewTaskBar);