import React, { Component } from 'react';
import './App.css';
import fortDetails from './fortDetails'

class Explorer extends Component {

  constructor(props) {
    super(props)

  }

  goToTab(tab) {
    this.props.history.push('/' + tab.key)
  }

  render() {
    let self = this;
    return (

      <div className="container-fluid">
        <h1>Fort Explorer</h1>
        <div className="row myClass">

          {fortDetails.menuTabs.map(function (tab) {
            // return <div className="col-sm" key={tab.name} onClick={(e) => self.goToTab(tab)}>
            //   <img className="imageMenu" src={tab.img} />
            //   <div> {tab.name} </div>
            // </div>
            return <div className="card" key={tab.name} style={{ "width": "18rem", "border": "1px solid black" }} onClick={(e) => self.goToTab(tab)}>
              <img className="card-img-top" src={tab.img} alt="Card image cap" />
              <div className="card-body">
                <h3 className="card-title"> {tab.name}</h3>
                {/* <p className="card-text">{fort.details}</p> */}
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          })}
        </div>
      </div>)
  }
}

export default Explorer;
