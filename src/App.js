import React, { Component } from 'react';
import {connect} from 'react-redux'

class App extends Component {

  addTask(){
        const input = document.getElementById("taskInput");
        this.props.onAddTask(input.value);
        input.value = '';
  }
  delTask(){

  }

  render() {
    return (
        <div>
            <h1>Node List</h1>
            <div className="noteEditor">
                <input id="taskInput" placeholder="Enter your note here..."/>
                <input type="submit" className="btn add" onClick={this.addTask.bind(this)} value='+' />
            </div>

            <div className="noteGrid">
                {
                    this.props.tasks.map((task, index) =>
                        <div key={index} className="note">
                            <p>{task.text}</p>
                            <button className="del" onClick={this.delTask.bind(this)}>&#10006;</button>
                        </div>
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
            dispatch({type: 'ADD_TASK', payload: {id: new Date(), text: taskName}})
        },
        delTask: (id) => {
            dispatch({type: 'DEL_TASK', payload: id})
        }
    })
)(App);
