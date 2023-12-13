const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    // Преобразуем число в строку
    const numStr = n.toString();
    // Создаем массив цифр из строки
    const digits = numStr.split('').map(Number);
    // Инициализируем переменную для хранения максимального числа
    let maxNumber = 0;
    // Перебираем каждую цифру
    for (let i = 0; i < digits.length; i++) {
        // Создаем новое число, удаляя текущую цифру
        const newNumber = parseInt(digits.slice(0, i).join('') + digits.slice(i + 1).join(''));
        // Обновляем максимальное число, если новое число больше текущего максимального
        if (newNumber > maxNumber) {
            maxNumber = newNumber;
        }
    }
    // Возвращаем максимальное число
    return maxNumber;

}

module.exports = {
    deleteDigit
};
