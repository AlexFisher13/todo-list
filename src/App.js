import React, { Component } from 'react';
import {connect} from 'react-redux'

class App extends Component {

  addTask(){
        const input = document.getElementById("taskInput");
        this.props.onAddTask(input.value);
        input.value = '';
  }

  render() {
    return (
        <div>
            <h1>Node List</h1>
            <div className="noteEditor">
                <input id="taskInput" placeholder="Enter your note here..."/>
                <input type="submit" className="btn add" onClick={this.addTask.bind(this)} value='&#x2b;'/>
            </div>

            <div className="noteGrid">
                {
                    this.props.tasks.map(task =>
                        <div key={task.id} className="note">
                            <p>{task.text}</p>
                            <button className="del" onClick={() => this.props.onDelTask(task.id)}>&#10006;</button>
                        </div>
                )}
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: (taskName) => {
            dispatch({type: 'ADD_NOTE', payload: {id: new Date(), text: taskName}})
        },
        onDelTask: (id) => {
            dispatch({type: 'DEL_NOTE', payload: id})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
