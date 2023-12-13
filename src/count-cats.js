const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    // Инициализируем переменную для хранения количества котов
    let catsCount = 0;
    // Итерируемся по каждой строке матрицы
    for (let i = 0; i < matrix.length; i++) {
        // Итерируемся по каждому элементу в текущей строке
        for (let j = 0; j < matrix[i].length; j++) {
            // Проверяем, равен ли текущий элемент '^^'
            if (matrix[i][j] === '^^') {
                // Увеличиваем количество котов
                catsCount++;
            }
        }
    }
    // Возвращаем окончательное количество котов return catsCount;
      return catsCount;
}

            module.exports = {
                countCats
            };
