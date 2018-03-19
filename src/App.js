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
        console.log(this.props.testStore);
    return (
        <div>
            <div className="noteEditor">
                <textarea id="taskInput"
                          placeholder="Enter your note here...">
                </textarea>
                <button className="add" onClick={this.addTask.bind(this)}>Add</button>
            </div>

            <ul>
                {
                    this.props.testStore.map((task, index) =>
                        <Note key={index} task={task}/>
                    )
                }
            </ul>
        </div>
    );
  }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTask: (taskName) => {
            dispatch({type: 'task', payload: taskName})
        }
    })
)(App);
