// Basic types
let id: number = 5
let company: string = 'string'
let isPublished: boolean = true;
let x: any = 'Hello'
let age: number;

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, 'thsi some']

// Tuple 
let person: [number, string, boolean] = [1, 'James', true]

// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'James'],
    [1, 'James'],
    [1, 'James'],
]

// Union
let pid: string | number = 22

// Enum
enum Direction1 {
    Up = 'UP',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Object
type User = {
    id: number,
    name: string
}

const user:User = {
    id: 2,
    name: "James"
}

// Types Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number


// Functions
function addNum(x:number , y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}
console.log(addNum(1, 2))

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 2,
    name: "James"
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y:number): number => x+ y
const sub: MathFunc = (x: number, y:number): number => x - y


interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

// Classes
class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} has now been registered`
    }
}

const brad = new Person(1, 'Brad')
const mike = new Person(2, 'Mike')

class Employee extends Person {
    position: string
    
    constructor(id:number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp.register())

// Generics 
function getArray<Type>(items: Type[]): Type[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'james', 'kerby', 'john'])
