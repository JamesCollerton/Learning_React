import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
    This was generated using npx create-react-app my-app

    https://reactjs.org/tutorial/tutorial.html
*/

/*
    This is a function component

    In React, function components are a simpler way to write components that only contain a 
    render method and don’t have their own state.
*/
function Square(props) {
    return (
        <button 
            className="square" 
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

/*
    This is a component. We use components to tell React what we want to see on the screen. When 
    our data changes, React will efficiently update and re-render our components.

    Note, we extend the React.Component type

    A component takes in parameters, called props (short for “properties”), and returns a hierarchy 
    of views to display via the render method.

    JSX is a special syntax that makes the HTML component easier to write.

    React components can have state by setting this.state in their constructors.

    setState is provided by React.Component
*/
class Board extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true
        };
    }

    /*
        Note, slice creates a copy of the array
    */
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
      }

    /*
        Here we take in a value and feed it through to the component as a prop
    */
    renderSquare(i) {
        return <Square 
            value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        const winner = calculateWinner(this.state.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

// ========================================

// UTILITIES

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }