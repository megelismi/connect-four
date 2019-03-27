import React from "react";

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

  didPlayerWin(scoreBoard, xPoint, yPoint) {
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

    const newXPointValue = score[currentPlayer]["x"][xPoint]++;
    const newYPointValue = score[currentPlayer]["y"][yPoint]++;

    console.log("newXPointValue", newXPointValue);
    console.log("newYPointValue", newYPointValue);

    // this.setState(
    //   {
    //     score: {
    //       ...score,
    //       [currentPlayer]: {
    //         x: {
    //           ...score[currentPlayer].x,
    //           [xPoint]: newXPointValue
    //         },
    //         y: {
    //           ...score[currentPlayer].y,
    //           [yPoint]: newXPointValue
    //         }
    //       }
    //     }
    //   },
    //   () => !this.didPlayerWin() && this.togglePlayers()
    // );
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
          color=""
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
    return <div className="gameboard">{this.renderGameboard()}</div>;
  }
}

export default Gameboard;
