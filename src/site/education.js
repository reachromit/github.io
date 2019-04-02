





import React from 'react';





function Education(props) {

    var educationalDetails = [
        {
            universityname: "Mumbai university",
            time: "2011 March - 2014 March",
            courseName: "Bachelor of Science in Computer Science"
        },
        {
            universityname: "Maharashtra state board of technical education",
            time: "2007 March - 2011 March",
            courseName: "Diploma in computer science"
        }
    ]

    return (<div id="education">
        <h2 className="heading">Education</h2>
        {educationalDetails.map(function (obj, index) {
            return <div className="education-block" key={index}>
                <h3>{obj.universityname}</h3>
                <span className="education-date">{obj.time}</span>
                <h4>{obj.courseName}</h4>
                <p>
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat. */}
                </p>
            </div>
        })}

    </div>

    )
}



export default React.memo(Education);

