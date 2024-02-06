


//oops
const user = {
    firstName : "harshita",
    lastName : "rana",
    email:"harshitarana@gmail.com",
    age: 9,
    address: "House Number, colony,  pincode, state",
    about : function(){
        return '${his.firstName} is ${this.age} years old';
    },
    is18: function(){
        return this.age >= 18;
    }
}
const aboutUser = user.about();
console.log(aboutUser);
// console.log(user.firstName);
console.log(user.about); 






javascript function ===> function + Object
console.log(hello.name);  you can add your own propperties 
hello.myOwnproperty="very unique value";  console.log(hello.myOwnproperty);

name property ---> tells function name;
function provides more usefull properties,

function hello(){
    console.log("hello world");
}
// console.log(hello.prototype);//{}
// only function provides prototype property
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalala";
};
console.log(hello.prototype.sing());





//oops
class Animal{
    constructor(name, age){
     this.name =  name;
     this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}
class Dog extends Animal{
constructor(name, age,speed){
    super(name,age);
    this.speed = speed;
}
 run(){
    return `${this.name} is running at ${this.speed}`;
 }
}


//obje,instance
const   tommy = new Dog("tommy",3,45);
console.log(tommy.run());

const Animal1 = ew obj("tom",1);
console.log(Animal1);
console.log(Animal1.eat());
console.log(Animal1.isSuperCute());


