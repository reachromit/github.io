import React, { Component } from 'react';
import Symbols from './symbols'
import './css/styles.css'

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boardArray: [
                { value: null, index: 0 },
                { value: null, index: 1 },
                { value: null, index: 2 },
                { value: null, index: 3 },
                { value: null, index: 4 },
                { value: null, index: 5 },
                { value: null, index: 6 },
                { value: null, index: 7 },
                { value: null, index: 8 }
            ],
            step: 0,
            isWinner: false
        }
        this.winnerArray = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        this.changeBoardArray = this.changeBoardArray.bind(this);
        this.back = this.back.bind(this);
        this.checkWinner = this.checkWinner.bind(this);

    }

    reset = () => {
        this.setState({
            boardArray: [
                { value: null, index: 0 },
                { value: null, index: 1 },
                { value: null, index: 2 },
                { value: null, index: 3 },
                { value: null, index: 4 },
                { value: null, index: 5 },
                { value: null, index: 6 },
                { value: null, index: 7 },
                { value: null, index: 8 }
            ],
            step: 0,
            isWinner: false
        })
    }

    changeBoardArray = (square) => {
        if (square.value == null) {


            let value = "";
            this.previousBoard = this.state.boardArray;
            if (this.state.step % 2 == 0) {
                value = "X"
            } else {
                value = "O"
            }
            this.setState({ step: this.state.step + 1 })
            let updatedSquareObj = { value: value, index: square.index }

            let clonedArray = [];
            for (var i = 0; i < this.state.boardArray.length; i++) {
                if (this.state.boardArray[i].index == square.index) {
                    clonedArray.push(updatedSquareObj);
                } else {
                    clonedArray.push(this.state.boardArray[i]);
                }
            }
            this.setState({
                boardArray: clonedArray
            })

            if (this.state.step > 3) {
                // check for winner
                //make array
                this.checkWinner(value, clonedArray);
            }
        }
    }

    checkWinner(value, clonedArray) {
        let self = this;
        let isWinner = false;
        self.winnerArray.map(function (index) {
            if (clonedArray[index[0]].value == value && clonedArray[index[1]].value == value && clonedArray[index[2]].value == value) {
                isWinner = true;
                return;
            }
        })
        if (isWinner) {
            // alert("winner is " + value);
            self.setState({ isWinner: true })
        }

    }

    createAnArray() {
        let self = this;
        return (this.state.boardArray.map(function (square) {
            return (<div className="boardtile" key={square.index} onClick={self.changeBoardArray.bind(this, square)}>{square.value} {square.index}</ div>)
        }))
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.isWinner == true && this.state.isWinner == false) {
            alert("winner winner chicken dinner")
            // this.reset();
        }
    }



    back() {
        this.setState({
            boardArray: this.previousBoard,
            step: this.state.step - 1,
            isWinner: false
        })
    }



    render() {
        return (

            <div className="container">
                <div onClick={this.reset}>Reset</div>
                <div style={this.state.step > 0 ? { "display": "block" } : { "display": "none" }} onClick={this.back}>Undo</div>
                <div className="board">
                    {this.createAnArray()}
                </div>
            </div>
        )
    }
}


export default Game;

