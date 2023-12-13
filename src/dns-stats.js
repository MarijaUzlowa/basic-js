const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    // Создаем объект для хранения статистики DNS
    const dnsStats = {};
    // Итерируем по каждому домену в массиве
    domains.forEach((domain) => {
        // Разбиваем домен на части, начиная с конца
        const domainParts = domain.split('.').reverse();
        let currentDns = '';
        // Итерируем по каждой части домена
        domainParts.forEach((part) => {
            // Строим DNS иерархию, добавляя каждую часть
            currentDns += `.${part}`;
            // Увеличиваем счетчик построенного DNS в объекте статистики
            dnsStats[currentDns] = (dnsStats[currentDns] || 0) + 1;
        });
    });
    // Возвращаем объект с результатами статистики DNS return dnsStats;
    return dnsStats;
}

module.exports = {
    getDNSStats
};
