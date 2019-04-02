import React, { Component } from 'react';
import './App.css';
import fortDetails from './fortDetails';
import { Link } from 'react-router-dom';
import Modal from './Modal'

class Catlouge extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      details: ""
    }

  }

  gotoFort(fort) {
    this.props.history.push("/details/" + fort.id)
  }

  mapShow(e, map) {
    let self = this;
    e.stopPropagation()
    self.setState({
      showModal: true,
      details: map.howToReact
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
    return (
      <React.Fragment>

        <div className="js-zc-conditional" data-clipboard-text="" onClick={() => this.props.history.push("/")}>
          <svg height="32" className="octicon octicon-arrow-left" viewBox="0 0 10 16" version="1.1" width="20" aria-hidden="true"><path fillRule="evenodd" d="M6 3L0 8l6 5v-3h4V6H6V3z"></path></svg>
        </div>
        <div className="container-fluid">

          <h2>List of forts</h2>
          <div className="row" >
            {fortDetails.forts.map(function (fort) {


              return <div className="card" key={fort.name} style={{ "width": "18rem", "border": "1px solid black", "padding": "5px" }} onClick={(e) => self.gotoFort(fort)}>
                <img className="card-img-top" src={fort.img} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title"> {fort.name}</h5>
                  <p className="card-text">{fort.shortDetail}</p>
                  <button className="btn btn-primary" onClick={(e) => self.mapShow(e, fort)}>Show Route</button>
                </div>
              </div>

            })}

            {this.state.showModal ? <Modal details={this.state.details} close={this.close}></Modal> : ""}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Catlouge;
