





//MAP--it is an iterator,store data in ordered fashion, store key value pair(like object)duplicate keys are not allowedlike objects
// //different b/w map nd object,objectcan only have string or symbol as key, in maps you can use  anything as key like array,nu.,string 


const person = {
    firstName : "akshna",
    age : 7,
    1:"one"
}
console.log(person.firstName);
console.log(person['firstName']);
console.log(person[1]);
for(let key in person){
    console.log(typeof key);
}

//key value pair
const person = new Map();
person.set('firstName','anubhav');
person.set('age',7);
person.set(1,'one')
person.set([1,2,3],'onetwothree');
person.set({1:'one'},'onetwothree');
console.log(person);
console.log(person.get(1));
console.log(person.keys());
for(let key of person.keys()){
    console.log(key, typeof key);
}
for(let [key, value] of person){
    console.log(Array.isArray(key));
    console.log(key,value)
}

// const person = new Map([['firstName','Aditya'],['age','12'],['gender','female']])
// console.log(person);

// const person1 = {
//     id: 1,
//     firstName: "Sonali"
// }
// const person2 = {
//     id: 2,
//     firstName: "Sonali"
// }
// const extraInfo = new Map();
// extraInfo.set(person1, {age: 8, gender:"male"});
// extraInfo.set(person2, {age: 9, gender: "male"});
// console.log(userInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);
// console.log(person1)



// clone using Object.assign
// // Memory
// const obj = {
//     key1: "value1",
//     key2: "value2"
// }
// // const obj2 = {...obj};
// const obj2 = Object.assign({}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);



//optional chainig
// const user = {
//     firstName: "Santosh",
//      address: {houseNumber:  '12345'}
// }
// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);








//mapfunction
// const numbers = [2,3,4,5,6];

// const square = function(numbers){
//     console.log(Number*Number);
// }
// const square = numbers.map((Number,index)=>{
//     return`index: ${index},${Number * Number}`;
// });
// console.log(squareNumber);


// const user = [
//     {firstName: "raniii", age: 23},
//     {firstName: "abbhimanyu", age: 23},
//     {firstName: "raushan", age: 23},
//     {firstName: "raja", age: 23},
// ]

// const userNames = user.map((user)=>{
//     return user.firstName;
// });
// console.log(userNames);





















































































































































































// // While  loop in array
// const fruits =  ["apple", "mango", "grapes"];
//  let i = 0;
//  while(i<fruits.length){
//     console.log(fruits[i]);
//     i++;
//  }
// const fruits =  ["apple", "mango", "grapes"];
// const fruits2 = [];
// let i = 0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);


//for of loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "banana"];
// for(let fruit of fruits){
//     console.log(fruit);
// }
// const fruits = ["apple", "mango", "grapes", "fruit4", "banana"];
// const fruits2 = [];

// for(let fruit of fruits){
//    fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);
// const fruits = ["apple", "mango", "grapes", "fruit4", "banana"];
// const fruits2 = [];
// for(let index in fruits){
//     console.log (index);
// }
// const fruits = ["apple","mango","grapes","banana"];
// const fruits2 = [];
// for(let index in fruits){
//     fruits2.push(fruits[index].)
// }


// //array destructuring
// const myArray =  ["value1","value2","value3","value4"];
// // let myvar1 = myArray[0];
// // let myvar2 = myArray[1];
// // console.log("value of myvar1", myvar1);
// // console.log("value of myvar2",myvar2);
// let [myvar1, myvar2,...myNewArray] = myArray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// // console.log("value of myvar3", myvar3);
// console.log(myNewArray);


//objects refrence type, arrays are good but not sufficient, for real worl data, objecs store key value pairs
//obj don't have index, how to creat obj, how to acces data from obj, hw to add key value pairsto obj
// const person = {
//     name:"sanjana",
//     age: 10,
//     hobbies:['guitar','music','sleeping']
// }
// console.log(person);
// console.log(person["name"]);
// console.log(person[name]);
// console.log(person.hobbies)
// person.gender = "male";
// console.log(person);



//difference between dot nd bracket notation 
// const key = "email";
// const person = {
//     name: "anubhav",
//     age: "22",
//     "person hobbies": ['guitar']
// }
//  console.log(person["person hobbies"]);
//  person[key] = "anubhavvashisth@gmail.com";
//  console.log(person);


//how to iterate object
// const person = {
//     name: "anuska",
//     age: 17,
//     "person hobbies": ["guitar","sleeping","music"]
// }
// //for in loop,  object.keys
// for(let key in person){
//     console.log(key);
// }



