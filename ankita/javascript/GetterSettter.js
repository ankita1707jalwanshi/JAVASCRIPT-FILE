

//getternd setters
class person{
    constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }
    get fullName(){
        return`${this.firstName} ${this.lastName}`
    }

    setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new person('ambuj','aashtha', 5);
console.log(person1);
console.log(person1.fullName);
    person1.fullName = "ambuj sharma";



    
let numbers = [1,2,3,4,5,6];
console.log(Object.getPrototypeOf(numbers));
console.log(Array.prototype);
console.log(numbers);

function hello(){
    console.log("hello");
}
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push('1');
console.log(hello.prototype);










