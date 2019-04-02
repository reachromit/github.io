





import React from 'react';





function AboutMe(props) {
    return (<div id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2 className="heading">About Me</h2>
                </div>
                <div className="col-md-8">
                    <p>
                        My name is Romit G Pednekar and I am a javascript Web Application Developer and Software Developer, currently living in Mumbai, Goregaon. I have a Bachelors Degree in Computer Science from Mumbai University, and my primary focus and inspiration for my studies is Web Development and Mobile Applications. In my free time, I study unity Gaming technologies and phazer.io its fun. I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques. I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}



export default React.memo(AboutMe);

