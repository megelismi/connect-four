// export const scoreSheet = {
//   x: {
//     0: 0,
//     1: 0,
//     2: 0,
//     3: 0,
//     4: 0,
//     5: 0,
//     6: 0
//   },
//   y: {
//     0: 0,
//     1: 0,
//     2: 0,
//     3: 0,
//     4: 0,
//     5: 0
//   }
// };

export const scoreSheet = {
  x0y0: 0,
  x0y1: 0,
  x0y2: 0,
  x0y3: 0,
  x0y4: 0,
  x0y5: 0,
  x1y0: 0,
  x1y1: 0,
  x1y2: 0,
  x1y3: 0,
  x1y4: 0,
  x1y5: 0,
  x2y0: 0,
  x2y1: 0,
  x2y2: 0,
  x2y3: 0,
  x2y4: 0,
  x2y5: 0,
  x3y0: 0,
  x3y1: 0,
  x3y2: 0,
  x3y3: 0,
  x3y4: 0,
  x3y5: 0,
  x4y0: 0,
  x4y1: 0,
  x4y2: 0,
  x4y3: 0,
  x4y4: 0,
  x4y5: 0,
  x5y0: 0,
  x5y1: 0,
  x5y2: 0,
  x5y3: 0,
  x5y4: 0,
  x5y5: 0,
  x6y0: 0,
  x6y1: 0,
  x6y2: 0,
  x6y3: 0,
  x6y4: 0,
  x6y5: 0
};

const getLowestPointWithValue = (axis, point, scoreSheet) => {
  console.log("scoreSheet", scoreSheet);
  if (axis === "x") {
    if (scoreSheet[`${axis}${point}y0`]) {
      return 0;
    } else if (scoreSheet[`${axis}${point}y1`]) {
      return 1;
    } else if (scoreSheet[`${axis}${point}y2`]) {
      return 2;
    } else if (scoreSheet[`${axis}${point}y3`]) {
      return 3;
    } else if (scoreSheet[`${axis}${point}y4`]) {
      return 4;
    } else if (scoreSheet[`${axis}${point}y5`]) {
      return 5;
    }
  } else {
    if (scoreSheet[`x0${axis}${point}`]) {
      return 0;
    } else if (scoreSheet[`x1${axis}${point}`]) {
      return 1;
    } else if (scoreSheet[`x2${axis}${point}`]) {
      return 2;
    } else if (scoreSheet[`x3${axis}${point}`]) {
      return 3;
    } else if (scoreSheet[`x4${axis}${point}`]) {
      return 4;
    } else if (scoreSheet[`x5${axis}${point}`]) {
      return 5;
    }
  }

  return null;
};

export const checkForHorizVertWin = (axis, point, scoreSheet) => {
  //TODO: add comment to explain logic
  const lowestOpppositePointWithValue = getLowestPointWithValue(
    axis,
    point,
    scoreSheet
  );

  if (lowestOpppositePointWithValue === null) {
    return false;
  }

  if (axis === "x") {
    return !!(
      scoreSheet[`${axis}${point}y${lowestOpppositePointWithValue + 1}`] &&
      scoreSheet[`${axis}${point}y${lowestOpppositePointWithValue + 2}`] &&
      scoreSheet[`${axis}${point}y${lowestOpppositePointWithValue + 3}`]
    );
  } else {
    return !!(
      scoreSheet[`x${lowestOpppositePointWithValue + 1}${axis}${point}`] &&
      scoreSheet[`x${lowestOpppositePointWithValue + 2}${axis}${point}`] &&
      scoreSheet[`x${lowestOpppositePointWithValue + 3}${axis}${point}`]
    );
  }
};

export const checkForDiagonalWin = (axis, xPoint, yPoint, scoreSheet) => {
  //TODO: add comment to explain logic
  //if you're checking on x, x and y decrement or increment together
  //if you're checking on y, as y goes up x goes down, as y goes down, x goes up

  console.log("scoreSheet", scoreSheet);

  if (axis === "x") {
    return (
      (scoreSheet[`x${xPoint + 1}y${yPoint + 1}`] &&
        scoreSheet[`x${xPoint + 2}y${yPoint + 2}`] &&
        scoreSheet[`x${xPoint + 3}y${yPoint + 3}`]) ||
      (scoreSheet[`x${xPoint - 1}y${yPoint - 1}`] &&
        scoreSheet[`x${xPoint - 2}y${yPoint - 2}`] &&
        scoreSheet[`x${xPoint - 3}y${yPoint - 3}`])
    );
  } else {
    return (
      (scoreSheet[`x${xPoint - 1}y${yPoint + 1}`] &&
        scoreSheet[`x${xPoint - 2}y${yPoint + 2}`] &&
        scoreSheet[`x${xPoint - 3}y${yPoint + 3}`]) ||
      (scoreSheet[`x${xPoint + 1}y${yPoint - 1}`] &&
        scoreSheet[`x${xPoint + 2}y${yPoint - 2}`] &&
        scoreSheet[`x${xPoint + 3}y${yPoint - 3}`])
    );
  }
};
