import Person from './person'

/**
 * 'Hello world!'
 * @param {Person} [person]
 */
export default function sayHello(person = {}) {
  // use proposal-optional-chaining
  const name = person?.names?.firstname || 'world';

  console.log(`Hello ${name}!`);
}