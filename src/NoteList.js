import React, { Component } from 'react';

class NoteList extends Component{
  render(){
    return(
        <div className="NoteList">
        <form>
          <label>
            Add Note: <input type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NoteList
