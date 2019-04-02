

import React, { Component } from 'react';
import DeterMineSymbol from './symbol'

class Symbols extends Component {

    render() {
        return (
            <div className="boardtile" onClick={this.props.changeFunction} >{this.props.symbol ? "X" : "O"}</div>
        )
    }
}


export default Symbols;



