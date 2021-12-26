"use strict";
// Basic types
let id = 5;
let company = 'string';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'thsi some'];
// Tuple 
let person = [1, 'James', true];
// Tuple Array
let employee;
employee = [
    [1, 'James'],
    [1, 'James'],
    [1, 'James'],
];
// Union
let pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "UP";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 2,
    name: "James"
};
// Types Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
console.log(addNum(1, 2));
const user1 = {
    id: 2,
    name: "James"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} has now been registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register());
// Generics 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'james', 'kerby', 'john']);
