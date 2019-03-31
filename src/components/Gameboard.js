import React, { Fragment } from "react";

import {
  scoreSheet,
  checkForDiagonalWin,
  checkForHorizVertWin
} from "../handlers";

import CheckerSlot from "./CheckerSlot";

class Gameboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: 1,
      score: {
        1: {
          ...scoreSheet
        },
        2: {
          ...scoreSheet
        }
      }
    };
  }

  togglePlayers() {
    this.setState({
      currentPlayer: this.state.currentPlayer === 1 ? 2 : 1
    });
  }

  didPlayerWin(xPoint, yPoint) {
    const scoreSheet = this.state.score[this.state.currentPlayer];

    console.log(
      "x win horizVert",
      checkForHorizVertWin("x", xPoint, scoreSheet)
    );
    console.log(
      "y win horizVert",
      checkForHorizVertWin("y", yPoint, scoreSheet)
    );
    console.log(
      "x win diagonal",
      checkForDiagonalWin("x", xPoint, yPoint, scoreSheet)
    );
    console.log(
      "y win diagonal",
      checkForDiagonalWin("y", xPoint, yPoint, scoreSheet)
    );

    return (
      checkForHorizVertWin("x", xPoint, scoreSheet) ||
      checkForHorizVertWin("y", yPoint, scoreSheet) ||
      checkForDiagonalWin("x", xPoint, yPoint, scoreSheet) ||
      checkForDiagonalWin("y", xPoint, yPoint, scoreSheet)
    );
  }

  recordCheckerClick(xPoint, yPoint) {
    const { score, currentPlayer } = this.state;

    this.setState(
      {
        score: {
          ...score,
          [currentPlayer]: {
            ...score[currentPlayer],
            [`x${xPoint}y${yPoint}`]: 1
          }
        }
      },
      () => {
        console.log("state now", this.state.score[this.state.currentPlayer]);
        if (this.didPlayerWin(xPoint, yPoint)) {
          alert("Player won!");
        } else {
          this.togglePlayers();
        }
      }
    );
  }

  getCheckerColor(xPoint, yPoint) {
    const { score } = this.state;

    if (score["1"]["x"][xPoint] && score["1"]["y"][yPoint]) {
      return "yellow";
    } else if (score["1"]["x"][xPoint] && score["1"]["y"][yPoint]) {
      return "red";
    }

    return "";
  }

  getSlotsForRow(yPoint) {
    let xPoint = 0;
    const checkerBoardRow = [];

    while (xPoint <= 6) {
      checkerBoardRow.push(
        <CheckerSlot
          key={`slot-x${xPoint}-y${yPoint}`}
          xPoint={xPoint}
          yPoint={yPoint}
          onCheckerClick={this.recordCheckerClick.bind(this)}
          currentPlayer={this.state.currentPlayer}
        />
      );

      xPoint++;
    }

    return checkerBoardRow;
  }

  renderGameboard() {
    const gameBoard = [];
    let yPoint = 5;

    while (yPoint >= 0) {
      const checkerBoardRow = (
        <div key={`row-${yPoint}`} className="row">
          {this.getSlotsForRow(yPoint)}
        </div>
      );

      gameBoard.push(checkerBoardRow);

      yPoint--;
    }

    return gameBoard;
  }

  render() {
    return (
      <Fragment>
        It is player {this.state.currentPlayer}&#39;s turn!
        <div className="gameboard">{this.renderGameboard()}</div>
      </Fragment>
    );
  }
}

export default Gameboard;
