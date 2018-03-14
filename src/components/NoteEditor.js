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
            <div className="noteEditor row">
                <textarea
                    className="form-control col-8"
                    id="exampleFormControlTextarea1"
                    placeholder="Enter your note here..."
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}>
                </textarea>
                <button type="button"
                        className="btn btn-primary col-2"
                        onClick={this.handleNoteAdd.bind(this)}
                >Add</button>
            </div>
        );
    }
}

export default NoteEditor;
