export const scoreSheet = {
  x: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
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

export const checkForHorizVertWin = (axis, scoreSheet) => {
  //get an array of all the values for that axis
  //filter out the ones that don't have values greater than zero (areas that don't have a checker)
  //take the minimum number from that array
  const lowestPoint = Math.min(
    ...Object.values(scoreSheet[axis]).filter(value => scoreSheet[axis][value])
  );

  console.log("lowestPoint", lowestPoint);

  //TODO: add comment to explain logic
  return !!(
    scoreSheet[axis][lowestPoint + 1] &&
    scoreSheet[axis][lowestPoint + 2] &&
    scoreSheet[axis][lowestPoint + 3]
  );
};

export const checkForDiagonalWins = (axis, point, scoreSheet) => {
  //TODO: add comment to explain logic
  return !!(
    (scoreSheet[axis][point + 1] || scoreSheet[axis][point - 1]) &&
    (scoreSheet[axis][point + 2] || scoreSheet[axis][point - 2]) &&
    (scoreSheet[axis][point + 3] || scoreSheet[axis][point - 3])
  );
};
