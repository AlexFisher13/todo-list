import React, { Component } from 'react';

class Note extends Component {
    render() {
        return (
            <div className="note">
                <p>{this.props.task}</p>
                <button className="del">delete</button>
            </div>
        );
    }
}

export default Note;
