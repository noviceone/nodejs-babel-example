'use strict';
import Person from './person'
import sayHello from './sayHello'

const person = new Person('novice', 'one');

sayHello(person)
sayHello()