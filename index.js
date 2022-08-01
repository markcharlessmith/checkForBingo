/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

// input: bingoCard (arr), drawnNumbers (arr)
// output: boolean

function checkForBingo(bingoCard, drawnNumbers) {
  // a bingo card has five rows and five columns
  let x = new Array(5).fill(0);
  let y = new Array(5).fill(0);
  // bingo can only be achieved diagonally two ways (top left to bottom right or bottom left to top right)
  let diag = new Array(2).fill(0);

  for (let i = 0; i < bingoCard.length; i++) {
    let row = i % 5;
    let col = i % 5;

    //check if either the evaluated result of hasNumber is true or bingoCard[i] is 'FREE'
    if (hasNumber(drawnNumbers, bingoCard[i]) || bingoCard[i] === 'FREE') {
      // if so, add 1 to x[row] and y[col];
      x[row] += 1;
      y[col] += 1;
      // check if row and col are equal, if so add 1 to the 0th index of diag
      if (row === col) diag[0] += 1;
      // if the sum of row and col is equal to either the x or y length - 1,
      // add 1 to index 1 of diag
      if (row + col === x.length - 1 || row + col === y.length - 1)
        diag[1] += 1;
    }
  }
  return hasNumber(x, 5) || hasNumber(y, 5) || hasNumber(diag, 5);

  //helper function to check if arr[i] === n
  function hasNumber(arr, n) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === n) return true;
    }
    return false;
  }
}

module.exports = checkForBingo;

// Test Cases //

// this should return true with diagonal + free
console.log(
  checkForBingo(
    [
      8,
      29,
      35,
      54,
      65,
      13,
      24,
      44,
      48,
      67,
      9,
      21,
      'FREE',
      59,
      63,
      7,
      19,
      34,
      53,
      61,
      1,
      20,
      33,
      46,
      72,
    ],
    [8, 24, 53, 72]
  )
);

// this should return false
console.log(
  checkForBingo(
    [
      8,
      29,
      35,
      54,
      65,
      13,
      24,
      44,
      48,
      67,
      9,
      21,
      'FREE',
      59,
      63,
      7,
      19,
      34,
      53,
      61,
      1,
      20,
      33,
      46,
      72,
    ],
    [1, 33, 53, 65, 29, 75]
  )
);

// // should return true for BINGO vertically
console.log(
  checkForBingo(
    [
      8,
      29,
      35,
      54,
      65,
      13,
      24,
      44,
      48,
      67,
      9,
      21,
      'FREE',
      59,
      63,
      7,
      19,
      34,
      53,
      61,
      1,
      20,
      33,
      46,
      72,
    ],
    [8, 13, 9, 7, 1]
  )
);

// // should return true for BINGO horizontally
console.log(
  checkForBingo(
    [
      8,
      29,
      35,
      54,
      65,
      13,
      24,
      44,
      48,
      67,
      9,
      21,
      'FREE',
      59,
      63,
      7,
      19,
      34,
      53,
      61,
      1,
      20,
      33,
      46,
      72,
    ],
    [35, 44, 34, 33]
  )
);

// should return false;
console.log(
  checkForBingo(
    [
      8,
      29,
      35,
      54,
      65,
      13,
      24,
      44,
      48,
      67,
      9,
      21,
      'FREE',
      59,
      63,
      7,
      19,
      34,
      53,
      61,
      1,
      20,
      33,
      46,
      72,
    ],
    [1, 8, 21, 44, 48, 67, 72]
  )
);
