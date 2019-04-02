


import React from 'react';





function Webmenu(props) {
    return (<div id="lead">
        <div id="lead-content">
            <h1>{props.name}</h1>
            <h2>{props.profession}</h2>
            <a href="https://drive.google.com/file/d/16wI8xJT7KzOLkGpmRIF2EOsJs5_h4pxq/view" target="_blank" className="btn-rounded-white">Download Resume</a>
        </div>


        <div id="lead-overlay"></div>

        <div id="lead-down">
            <span>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
        </div>

    </div>
    )
}



export default React.memo(Webmenu);

