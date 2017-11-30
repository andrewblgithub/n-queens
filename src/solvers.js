/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  const board = new Board({n: n});
  let row = 0;
  let col = 0;
  while (row < n) {
    if (board.hasAnyRooksConflicts()) {
      board.togglePiece(row, col);
      board.togglePiece(row, col++);
    } else {
      board.togglePiece(row, col++);
      row++;
    }
  }
  const solution = board.rows();
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  const board = new Board({n: n});
  let count = 1;
  let row = 0;
  let col = 0;
  if (n === 1) {
    return 1;
  }
  // while (row === n - 1 && col === n - 1 && board.hasAnyRooksConflicts()) {
  //   console.log(row)
  //   while (row < board.rows().length) {
  //     if (board.hasAnyRooksConflicts()) {
  //       board.togglePiece(row, col);
  //       board.togglePiece(row, col++);
  //     } else {
  //       board.togglePiece(row, col++);
  //       row++;
  //     }
  //   }
  //   count++;
    
  // }


  // while(row < n && row !== n)


  // if (row === 0 && col === n/2 - 1)

  //stop at n/2 - 1

  const solutionCount = count * 2; //fixme
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
