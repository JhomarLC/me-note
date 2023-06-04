import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes((prevNotes)=> {
            return [...prevNotes, note]
        })
    }

    function deleteNote(id) { 
        setNotes((prevNotes)=> {
            return prevNotes.filter((note, idx)=> {
                return idx !== id;
            })
        })
    }

    console.log(notes);
    return (
        <div>
            <Header />
            <CreateArea passNote={addNote} />
            {notes.map((note, idx)=> {
                const {title: noteTitle, content: noteContent} = note;
                return <Note key={idx} id={idx} onDelete={deleteNote} title={noteTitle} content={noteContent}  /> 
            })}
            <Footer />
        </div>
    );
}

export default App;