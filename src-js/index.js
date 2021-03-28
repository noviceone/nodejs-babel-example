const Person = require('./person');
const sayHello = require('./sayHello');

const person = new Person('novice', 'one');

sayHello(person)
sayHello()