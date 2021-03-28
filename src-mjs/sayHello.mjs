import Person from './person'

/**
 * 'Hello world!'
 * @param {Person} [person]
 */
export default function sayHello(person = {}) {
  const name = person && person.names && person.names.firstname ? person.names.firstname : 'world';
  // use proposal-optional-chaining
  // const name = person?.names?.firstname || 'world';
  
  console.log(`Hello ${name}!`);
}