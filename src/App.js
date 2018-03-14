import React, { Component } from 'react';
import notes from './data'
import NoteEditor from './components/NoteEditor'
import NoteGrid from './components/NoteGrid'
import Menu from './components/Menu'

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
      <div className="container-fluid">
          <div className="row">
              <Menu className="col-4"/>
              <div className="col-8">
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NoteGrid notes={this.state.notes} />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
