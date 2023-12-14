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

  removeLink(position) {
    // Проверяем валидность позиции
    if (!this.chain[position - 1]) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },

  addLink(value) {
    // Добавляем новое звено в цепь
    this.chain.push(`( ${value} )`);
    return this; // Возвращаем объект для поддержки цепочек
  },

  finishChain() {
    // Собираем цепь в строку и очищаем массив
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },

  reverseChain() {
    this.chain.reverse();
    return this; // Возвращаем объект для поддержки цепочек
  }
};


module.exports = {
  chainMaker
};
