import React, { Fragment } from "react";

import {
  scoreSheet,
  checkForDiagonalWins,
  checkForHorizVertWin
} from "../handlers";

import Checker from "./Checker";

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
    const scoreBoard = this.state.score[this.state.currentPlayer];

    return (
      checkForHorizVertWin("x", scoreBoard) ||
      checkForHorizVertWin("y", scoreBoard) ||
      checkForDiagonalWins("x", xPoint, scoreBoard) ||
      checkForDiagonalWins("y", yPoint, scoreBoard)
    );
  }

  recordCheckerClick(xPoint, yPoint) {
    console.log("recordingCheckerClick", "x", xPoint, "y", yPoint);
    const { score, currentPlayer } = this.state;

    const newXPointValue = score[currentPlayer]["x"][xPoint] + 1;
    const newYPointValue = score[currentPlayer]["y"][yPoint] + 1;

    this.setState(
      {
        score: {
          ...score,
          [currentPlayer]: {
            x: {
              ...score[currentPlayer]["x"],
              [xPoint]: newXPointValue
            },
            y: {
              ...score[currentPlayer]["y"],
              [yPoint]: newYPointValue
            }
          }
        }
      },
      () => {
        console.log("state now", this.state);

        // !this.didPlayerWin(newXPointValue, newYPointValue) &&
        this.togglePlayers();
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
        <Checker
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
