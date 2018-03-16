import React, { Component } from 'react';
import Note from './Note'

class NoteGrid extends Component {
    render() {
        return (
            <div className="noteGrid">
                {
                    this.props.notes.map(note => {
                        return <Note key={note.id}>{note.text}</Note>
                    })
                }
            </div>
        );
    }
}

export default NoteGrid;
