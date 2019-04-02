
import React from 'react';





function MobileMenu(props) {
    if (props.type) {
        return (
            <div id="mobile-menu-open" className="shadow-large" onClick={props.closeHeader}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
        );
    } else {
        return (
            <div id="mobile-menu-close" onClick={props.closeHeader}>
                <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
            </div>
        )
    }
}



export default React.memo(MobileMenu);