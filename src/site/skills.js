





import React from 'react';





function Skills(props) {

    const skills = [
        "JavaScript",
        "React",
        "AngularJs",
        "Html",
        "CSS"
    ]

    return (<div id="skills">
        <h2 className="heading">Skills</h2>
        <ul>
            {skills.map(function (key, index) {
                return <li key={index}>{key}</li>
            })}
        </ul>
    </div>
    )
}



export default React.memo(Skills);

