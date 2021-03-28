const Person = require('./person');

/**
 * 'Hello world!'
 * @param {Person} [person]
 */
module.exports = function sayHello(person = {}) {
  const name = person && person.names && person.names.firstname ? person.names.firstname : 'world';
  console.log(`Hello ${name}!`);
}