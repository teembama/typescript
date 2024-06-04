import log, { Person } from './tools';

//Accessing object properties
let firstName = "Therese";
let lastName = "Mbama";
let gender = "female";
let height = 1.7;
let hobbies = ['Music', 'Swimming'];
let birthday = new Date(2005,4, 28);
let isAlive = true;

let person1 = new Person (firstName, lastName, gender, height, hobbies, birthday, isAlive)

log (`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`);