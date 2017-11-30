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

window.findSolution = (row, board, n, check, callback) => {
  if (row === n) { return callback(); }
  for (let col = 0; col < n; col++) {
    board.togglePiece(row, col);
    if (!board[check]()) {
      let stop = findSolution(row + 1, board, n, check, callback);
      if (stop) { return stop; }
    }
    board.togglePiece(row, col);
  }
};

window.findNRooksSolution = function(n) {
  const board = new Board({n: n});
  return findSolution(0, board, n, 'hasAnyRooksConflicts', () => {
    return board.rows().map((row) => {
      return row.slice();
    });
  });
  // let row = 0;
  // let col = 0;
  // while (row < n) {
  //   if (board.hasAnyRooksConflicts()) {
  //     board.togglePiece(row, col);
  //     board.togglePiece(row, col++);
  //   } else {
  //     board.togglePiece(row, col++);
  //     row++;
  //   }
  // }
  // const solution = board.rows();
  // // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  const board = new Board({n: n});
  let solutionCount = 0;
  findSolution(0, board, n, 'hasAnyRooksConflicts', () => {
    solutionCount++;
  });
  return solutionCount;

  // const board = new Board({n: n});
  // let solutionCount = 0;
  // const recurse = (row) => {
  //   if (row === n) {
  //     solutionCount++;
  //   } else {
  //     for (let col = 0; col < n; col++) {
  //       board.togglePiece(row, col);
  //       if (!board.hasAnyRooksConflicts()) {
  //         recurse(row + 1);
  //       }
  //       board.togglePiece(row, col);
  //     }
  //   }
  // };
  // recurse(0);
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  const board = new Board({n: n});
  return findSolution(0, board, n, 'hasAnyQueensConflicts', () => {
    return board.rows().map((row) => {
      return row.slice();
    }); 
  }) || board.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  const board = new Board({n: n});
  let solutionCount = 0;
  findSolution(0, board, n, 'hasAnyQueensConflicts', function() {
    solutionCount++;
  });
  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
