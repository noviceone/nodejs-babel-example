import Person from './person'

/**
 * 'Hello world!'
 * @param {Person} [person]
 */
export default function sayHello(person = {}) {
  // use proposal-optional-chaining
  const name = person?.names?.firstname || 'world';

  document
    .getElementById('message')
    ?.insertAdjacentHTML('beforeend', `Hello ${name}!<br/>`);
}