const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    // Добавляем новое звено в цепь
    this.chain.push(`( ${value} )`);
    return this; // Возвращаем объект для поддержки цепочек
  },

  removeLink(position) {
    // Проверяем валидность позиции
    if (Number.isInteger(position) && position > 0 && position <= this.chain.length) {
      // Удаляем звено по позиции
      this.chain.splice(position - 1, 1);
    }else {
      this.chain = [];
    }
    return this; // Возвращаем объект для поддержки цепочек
  },

  reverseChain() {
    this.chain.reverse();
    return this; // Возвращаем объект для поддержки цепочек
  },

  finishChain() {
    // Собираем цепь в строку и очищаем массив
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
