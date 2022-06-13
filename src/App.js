import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  // eslint-disable-next-line
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note',
      date: '06/11/22'
    },
    {
      id: nanoid(),
      text: 'This is my second note',
      date: '06/11/22'
    },
    {
      id: nanoid(),
      text: 'This is my third note',
      date: '06/11/22'
    },
  ]);

  const addNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }


  return (
    <div className='container'>
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  )
}

export default App;
