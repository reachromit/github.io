


import React from 'react';





function Experience(props) {

    var employerDetails = [
        {
            name: "SportzInteractive",
            jobTitle: "Sr Associate Developer",
            time: "1st september 2016 - Till Date",
            description: "Working on javascript,jQuery html and reactJs developing widgets and embed code and then fantasy games",
            link: "https://www.sportzinteractive.net/"
        },
        {
            name: "MobileWare technologies",
            jobTitle: "Junior Developer",
            time: "1st February 2015 - 1st August 2016",
            description: "Worked as an mobile application developer mostly in Angular js 1.6 version. Developed Apps using ionic and cordova Also some minimal android native development",
            link: "http://mobilewaretech.com/"
        }

    ]

    return (<div id="experience" className="background-alt">
        <h2 className="heading">Experience</h2>
        <div id="experience-timeline">
            {employerDetails.map(function (Employer, index) {
                return <div data-date={Employer.time} key={index}>
                    <h3>{Employer.name}</h3>
                    <h4>{Employer.jobTitle}</h4>
                    <p>
                        {Employer.description}
                    </p>
                    <a href={Employer.link} target="_blank">{Employer.link}</a>
                </div>
            })}
        </div>
    </div>
    )
}

export default React.memo(Experience);

