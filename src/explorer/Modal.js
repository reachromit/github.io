import React, { Component } from 'react';
import './App.css';


class Modal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: true,
        }
    }

    closeModal() {

        this.setState({
            active: false,
        })
        this.props.close()
    }


    render() {
        return (
            <div className={this.state.active ? "modalBox active" : "modalBox"}>
                <div className="modalBox--container">
                    <div className="modalBox--close" onClick={() => this.closeModal()}>
                    </div>
                    <p>{this.props.details}</p>
                </div>
            </div>
        )
    }
}

export default Modal