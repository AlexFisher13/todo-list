import React, { Component } from 'react';
import {connect} from 'react-redux'
import Note from './components/Note'

class App extends Component {

  addTask(){
        const input = document.getElementById("taskInput");
        this.props.onAddTask(input.value);
        input.value = '';
  }

  render() {
    return (
        <div>
            <div className="noteEditor">
                <textarea id="taskInput"
                          placeholder="Enter your note here...">
                </textarea>
                <button className="add" onClick={this.addTask.bind(this)}>Add</button>
            </div>

            <div className="noteGrid">
                {
                    this.props.tasks.map((task, index) =>
                        <Note key={index} task={task}/>
                )}
            </div>
        </div>
    );
  }
}

export default connect(
    state => ({
        tasks: state.tasks
    }),
    dispatch => ({
        onAddTask: (taskName) => {
            dispatch({type: 'task', payload: taskName})
        }
    })
)(App);
