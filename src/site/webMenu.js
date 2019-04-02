
import React from 'react';





function Webmenu(props) {
    return (<ul id="menu" className="shadow">
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#experience">Experience</a>
        </li>
        <li>
            <a href="#education">Education</a>
        </li>
        {/* <li>
            <a href="#projects">Projects</a>
        </li> */}
        <li>
            <a href="#skills">Skills</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
    </ul>)
}



export default React.memo(Webmenu);

