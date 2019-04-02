
import React from 'react';





function MobileMenu(props) {
    return (<ul id="menu" className="shadow" style={props.isActive ? { "display": "none" } : { "display": "block" }}>
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



export default React.memo(MobileMenu);

