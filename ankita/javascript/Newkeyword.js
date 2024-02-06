

//new keyword
function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}
const user1 = new createUser("anupriya", 9);
console.log(user1);
user1.about();


// new keyword
// 1) empty Object this = {}
// 2) return this

function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return '${this.firstName} is ${this.age}years old';
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}
CreateUser.prototype.sing = function (){
    return "la la la la";
}

const user1 = new CreateUser('amish','sahh','amish@gmail.com');
const user2 = new CreateUser('ananaya','path','ananaya@gmail.com');
const user3 = new CreateUser('manay','saheb','manay@gmail.com');
 for(let key in user1){
    console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
 }


// 3) object ko return krega


function createUser(firstName, lastName, email, age, addess){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.addess = addess;

    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}
const user1 = createUser('anuu','priti','anuupriti@gmail.com')
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);
console.log(is18);






