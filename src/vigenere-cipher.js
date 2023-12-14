const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    // Конструктор класса, принимает параметр reverse, по умолчанию равен false
    constructor(reverse = false) {
        // Если reverse равен true, сохраняем этот флаг в свойстве класса
        this.reverse = reverse;
    } // Метод для шифрования сообщения
    encrypt(message, key) {
        // Если сообщение или ключ не предоставлены, выбрасываем ошибку
        if (!message || !key) {
            throw new Error('Invalid input. Both message and key are required.');
        } // Преобразование сообщения и ключа в верхний регистр
        message = message.toUpperCase();
        key = key.toUpperCase();
        let encryptedMessage = '';
        let keyIndex = 0;
        // Перебираем символы в сообщении
        for (let i = 0; i < message.length; i++) {
            const char = message[i]; // Если символ - буква, выполняем шифрование
            if (/^[A-Z]$/.test(char)) { // Определение смещения для текущей буквы ключа
                const keyChar = key[keyIndex % key.length];
                const keyOffset = keyChar.charCodeAt(0) - 'A'.charCodeAt(0);
                // Вычисление нового символа с учетом смещения
                let encryptedChar;
                if (this.reverse) {
                    encryptedChar = String.fromCharCode(((char.charCodeAt(0) - keyOffset - 65 + 26) % 26) + 65);
                } else {
                    encryptedChar = String.fromCharCode(((char.charCodeAt(0) + keyOffset - 65) % 26) + 65);
                } // Добавление зашифрованной буквы к результату
                encryptedMessage += encryptedChar; // Увеличение индекса ключа для следующей итерации
                keyIndex++;
            } else { // Если символ не буква, просто добавляем его к результату без изменений
                encryptedMessage += char;
            }
        } // Возвращаем зашифрованное сообщение
        return encryptedMessage;
    } // Метод для дешифрования сообщения
    decrypt(message, key) { // Дешифрование аналогично шифрованию, но с использованием обратного смещения
        return this.encrypt(message, key);
    }
}

module.exports = {
    VigenereCipheringMachine
};
