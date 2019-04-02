import React, { Component } from 'react';
import './App.css';
import fortDetails from './fortDetails';
import Modal from './Modal'

class Details extends Component {

    constructor(props) {
        super(props)
        let self = this
        this.state = {
            fortDetails: fortDetails.forts.find(function (fort) {
                if (fort.id == self.props.match.params.fortId) {
                    return fort
                }
            }),
            showModal: false,
            details: ""
        }
    }

    info(info) {
        this.setState({
            showModal: true,
            details: info
        })
    }

    close = () => {
        let self = this
        self.setState({
            showModal: false,
            details: ""
        })
    }


    render() {
        let self = this;
        let fort = this.state.fortDetails;
        if (!fort) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="js-zc-conditional" data-clipboard-text="" onClick={() => this.props.history.push("/soloExplorer")}>
                    <svg height="32" className="octicon octicon-arrow-left" viewBox="0 0 10 16" version="1.1" width="20" aria-hidden="true"><path fillRule="evenodd" d="M6 3L0 8l6 5v-3h4V6H6V3z"></path></svg>
                </div>
                <div className="padd">
                    <h2>Visual reprentation</h2>
                    <div className="card bg-dark text-white">
                        <div className="iframe-container">
                            <iframe src={fort.iframe} style={{ "padding": "10px" }} width="600" height="367" frameBorder="0" allowFullScreen={true}></iframe>
                        </div>

                    </div>
                    <div>
                        <h2>Full Map</h2>

                        <div className="card bg-dark text-white">

                            <img className="card-img" src={fort.img} alt="Card image" style={{ "opacity": "0.5" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title">{fort.name}</h5>
                                <p className="card-text">{fort.details}</p>
                                {/* <p className="card-text">Last updated 3 mins ago</p> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Related Spots</h2>
                        <div className="container">
                            <div className="row">
                                {fort.imagesArr.map(function (fort, index) {

                                    return <React.Fragment key={index}><div className="col" onClick={(e) => self.info(fort.spotDetails)}><img src={fort.img} className="img-thumbnail" /></div>
                                        {index != 0 ? <div className="w-100"></div> : ""}

                                    </React.Fragment>
                                })}
                            </div>
                        </div >
                    </div>
                    {this.state.showModal ? <Modal details={this.state.details} close={this.close}></Modal> : ""}
                </div >
            </React.Fragment>
        )
    }
}

export default Details;
