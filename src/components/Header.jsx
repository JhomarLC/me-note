import React, { useState } from "react";
import NoteAltIcon from '@mui/icons-material/NoteAlt';

function Header() {
    setInterval(setTime, 1000);

    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time);

    function setTime() {  
        let nowTime = new Date().toLocaleTimeString();
        setCurrentTime(nowTime);
    }
    return (
        <header className="header">
            <h1><NoteAltIcon />Me Note</h1>
            <p>{currentTime}</p>
        </header>
    );
}

export default Header;