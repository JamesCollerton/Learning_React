import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
    This was generated using npx create-react-app my-app

    https://reactjs.org/tutorial/tutorial.html
*/

/*
    This is a component. We use components to tell React what we want to see on the screen. When 
    our data changes, React will efficiently update and re-render our components.

    Note, we extend the React.Component type

    A component takes in parameters, called props (short for “properties”), and returns a hierarchy 
    of views to display via the render method.

    JSX is a special syntax that makes the HTML component easier to write.

    React components can have state by setting this.state in their constructors.
*/
class Square extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null,
        };
    }

    render() {
        // setState is provided by React.Component
        return (
            <button 
                className="square" 
                onClick={() => this.setState({value: 'X'})}
            >
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    /*
        Here we take in a value and feed it through to the component as a prop
    */
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Next player: X';

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
