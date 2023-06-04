import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const { title, content } = note;
    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
    
        setNote((prevValue) => {
          return {
            ...prevValue,
            [name]: value
          };
        });
    }
    
    function submitNote(e){
        e.preventDefault();
        if(title.length >=1){
            props.passNote(note);
            setNote({title: "", content: ""});
        }
    }
    
    function expandTextFields() {  
        setIsExpanded(true);
    }
    return (
        <div>
        <form className="create-note">
            {isExpanded ? <input onChange={handleChange} value={title} name="title" placeholder="Title" /> : null}
            <textarea onClick={expandTextFields} onChange={handleChange} value={content} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}><AddIcon /></Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
