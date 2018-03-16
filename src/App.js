import React, { Component } from 'react';
import notes from './data'
import NoteEditor from './components/NoteEditor'
import NoteGrid from './components/NoteGrid'

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
          notes: notes
      }
  }

  handleNoteAdd(newNote){
      let newNotes = this.state.notes.slice();
      newNotes.unshift(newNote);
      this.setState({
          notes: newNotes
      })
  }

  render() {
    return (
        <div>
            <NoteEditor onNoteAdd={this.handleNoteAdd} />
            <NoteGrid notes={this.state.notes} />
        </div>
    );
  }
}

export default App;
