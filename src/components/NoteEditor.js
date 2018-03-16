import React, { Component } from 'react';
import notes from '../data'

class NoteEditor extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    handleTextChange(event){
        this.setState({
            text: event.target.value
        })
        console.log(this.state.text)
    }

    handleNoteAdd(){
        let newNote = {
            text: this.state.text,
            id: Date.now()
        }
        console.log(newNote)
        notes.unshift(newNote)
    }

    render() {
        return (
            <div className="noteEditor">
                <textarea
                    placeholder="Enter your note here..."
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}>
                </textarea>
                <button className="add" onClick={this.handleNoteAdd.bind(this)}>Add</button>
            </div>
        );
    }
}

export default NoteEditor;
