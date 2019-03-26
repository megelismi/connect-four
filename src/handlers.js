const checkForHorizVertWin = axis => {
  const scoreBoard = {
    x: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 4,
      5: 0,
      6: 0
    },
    y: {
      0: 0,
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 0
    }
  };

  //get an array of all the values for that axis
  //filter out the ones that don't have values greater than zero (areas that don't have a checker)
  //take the minimum number from that array
  const lowestPoint = Math.min(
    ...Object.values(scoreBoard[axis]).filter(value => scoreBoard[axis][value])
  );

  console.log("lowestPoint", lowestPoint);

  //TODO: add comment to explain logic
  return !!(
    scoreBoard[axis][lowestPoint + 1] &&
    scoreBoard[axis][lowestPoint + 2] &&
    scoreBoard[axis][lowestPoint + 3]
  );
};

console.log("checkForHorizVertWin", checkForHorizVertWin("x"));

const checkForDiagonalWins = (axis, point) => {
  const scoreBoard = {
    x: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    },
    y: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }
  };

  //TODO: add comment to explain logic
  return !!(
    (scoreBoard[axis][point + 1] || scoreBoard[axis][point - 1]) &&
    (scoreBoard[axis][point + 2] || scoreBoard[axis][point - 2]) &&
    (scoreBoard[axis][point + 3] || scoreBoard[axis][point - 3])
  );
};
