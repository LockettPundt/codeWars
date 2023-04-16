/**
 *
 * @param {number[][]} maze
 * @param {string[]} directions
 * @returns {string}
 */

function mazeRunner(maze, directions) {
  if (!directions.length) {
    return 'Lost';
  }
  const currentRow = maze.findIndex((row) => row.includes(2));
  const currentColumn = maze[currentRow].indexOf(2);
  const direction = directions[0];
  let coordinates = [];

  switch (direction) {
    case 'N':
      coordinates = [currentRow - 1, currentColumn];
      break;
    case 'S':
      coordinates = [currentRow + 1, currentColumn];
      break;
    case 'E':
      coordinates = [currentRow, currentColumn + 1];
      break;
    case 'W':
      coordinates = [currentRow, currentColumn - 1];
      break;
  }
  const newPosition = maze[coordinates[0]]?.[coordinates[1]];

  switch (newPosition) {
    case undefined:
    case 1:
      return `Dead`;
    case 3:
      return `Finish`;
    default: {
      const updatedMaze = maze.reduce((acc, x) => [...acc, [...x]], []);
      updatedMaze[currentRow][currentColumn] = 0;
      updatedMaze[coordinates[0]][coordinates[1]] = 2;
      return mazeRunner(updatedMaze, directions.slice(1));
    }
  }
}
