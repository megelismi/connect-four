import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: "player1",
      player1Positions: [],
      player2Positions: []
    };
  }

  togglePlayers() {
    this.setState({
      currentPlayer:
        this.state.currentPlayer === "player1" ? "player2" : "player1"
    });
  }

  recordPlayerPosition(x, y, currentPlayer) {
    const playerKey =
      this.state.currentPlayer === "player1"
        ? "player1Positions"
        : "player2Positions";

    this.setState(
      {
        //push in the correct x, y positions to the correct playerKey
        //[playerKey]: newPlayePositions
      },
      () => this.togglePlayers()
    ); //second argument to setState is a callback that's called the state has been set
  }

  render() {
    return (
      <Square
        x={0}
        y={0}
        onClick={this.recordPlayerPosition}
        currentPlayer={this.state.currentPlayer}
      />
    );
  }
}

const Square = props => {
  //use these classNames to style the inside of the square
  const getClassName = () => {
    if (props.clicked) {
      if (props.currentPlayer === "player1") {
        return "square clicked player-one";
      } else {
        return "square clicked player-two";
      }
    }

    return "";
  };

  return (
    <div
      onClick={() => props.onClick(props.x, props.y)}
      className={getClassName()}
    >
      <span />
    </div>
  );
};

export default App;
