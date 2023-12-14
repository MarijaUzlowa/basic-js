const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  // Проходимся по столбцам матрицы
  for (let col = 0; col < matrix[0].length; col++) {
    // Проходимся по строкам начиная со второй
    for (let row = 0; row < matrix.length; row++) {
      // Если значение выше не равно 0, добавляем его к сумме
      if (row === 0 || matrix[row - 1][col] !== 0) {
        sum += matrix[row][col];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
