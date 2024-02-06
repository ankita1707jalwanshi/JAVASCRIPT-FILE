

// function (that function createobject)
// 2) add key value pair
//3) object ko return krega


function createUser(firstName, lastName, email, age, address){
const user = {}
user.firstName = firstName;
user.lastName = lastName;
user.email = email;
user.age = age;
user.address = address;
user.about=function(){
    return `${this.firstName} is ${this.age} years old`;
};
user.is19 = function(){
    return this.age >= 19;
}
return user;
}
const user1 = createUser('amba', 'rani', 'ambarani@gail.com', '19', 'my address');
console.log(user1);
const is12 = user1.is12();
console.log(is12);
const about = user1.about();
console.log(about);





const userMethods = {
    about:function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la';
    }
}
function createUser(firstName, lastName, email, age, address){
 const user = {};
 user.firstName = firstName;
 user.lastName = lastName;
 user.email = email;
 user.age =  age;
 user.address  = address;
 user.about = userMethods.about;
 user.is18 = userMethods.is18;
 return user;
}
const user1 = createUser('anupriya','sai','anupriya@gmail.com',17,'my address');
const user2 = createUser('ambuj','vanshika','ambuj@gmail.com',18,'my address');
const user3 = createUser('radha','rani','radha@gmail.com',19,'my address');
console.log(user1.about());
console.log(user3.about());
console.log(user2.about());
console.log(sing);




const obj1 = {
    key1 : "value1",
    key2: "value2"
}
//--proto---
//offical ecmascript documentation 
//[[prototype]]

// --proto-- , [[prototype]]
//prototype

const obj2 = Object.create(Obj1);  //{}
//there is one more way to create empty object 
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);
console.log(obj2_ _proto_ _);
this is haappening
consle.log(obj2.--proto--);
