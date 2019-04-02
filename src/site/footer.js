








import React from 'react';





function Footer(props) {

    var socialLinks = [{
        link: "https://github.com/romitpednekar",
        icon: "fa fa-github"
    },
    {
        link: "https://www.linkedin.com/in/romit-pednekar-46629a112/",
        icon: "fa fa-linkedin"
    },
    {
        link: "https://www.facebook.com/romit.pednekar.3",
        icon: "fa fa-facebook"
    },
    {
        link: "https://twitter.com/romitpednekar",
        icon: "fa fa-twitter"
    }


    ]

    return (<footer>
        <div className="container">
            <div className="row">
                <div className="col-sm-5 copyright">
                    <p>
                        Copyright &copy; 2017 ROMIT PEDNEKAR
                        </p>
                </div>
                <div className="col-sm-2 top">
                    <span id="to-top">
                        <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="col-sm-5 social">
                    <ul>
                        {socialLinks.map(function (item, index) {
                            return <li key={index}>
                                <a href={item.link} target="_blank"><i className={item.icon} aria-hidden="true"></i></a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}



export default React.memo(Footer);

