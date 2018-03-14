import React, { Component } from 'react';

class Note extends Component {
    render() {
        return (
            <div className="note">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">{this.props.children}</p>
                        <button type="button" className="btn btn-warning">Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Note;
