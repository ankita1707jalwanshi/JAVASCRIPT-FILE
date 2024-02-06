//Methods    --function inside objects

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
// const person1 = {
//     fistName : "ramesh",
//     age: 15,
//     about: function(){
//     console.log(`person name is ${this.fistName} and age is ${this.age}`)
//     }
// }

// const person2 = {
//     fistName : "Rodhan",
//     age: 17,
//     about: personInfo
// }
// const person3 = {
//     fistName : "Roshani",
//     age: 19,
//     about: personInfo
// }
// const person4 = {
//     fistName : "Jiyaa",
//     age: 19,
//     about: personInfo
// }
// person1.about();
// person2.about();
// person3.about();
// person4.about();

//console.log(Window);
//   //  "use strict"
// function myFun(){
//   console.log(this);
// }
// window.myFun();
// function hello(){
//     console.log("hello world");
// }
// hello.call();
// call apply bind

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician)
}
const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }
}
const user2 = {
    firstName : "Mohit",
    age: 9,
}

//apply
// about.apply(user1, ["guitar","moazrt"]);
const func = about.bind(user2, "guitar", "bach");
func();


// method 
// functions inside objects

// const person ={
// firstName: "Ambuj", 
// age:20,
// about: function(){
//     // console.log("person name is Ambuj and age is 20");
//     // console.log('person name is ${this.firstNmae} and age is ${this.age}');
//     // console.log(this)
//     // console.log(this.about)
//     console.log(this.age)
//     console.log(this.firstName)
// }
// }
// person.about();
// function personInfo(){
//     console.log(`person name is ${this.firstNmae} and age is ${this.age}`);
// }
// const person1 = {
//     firstNmae: "Ambuj",
//     age: 21,
//     about:personInfo
// }
// const person2 = {
//     firstNmae: "Raushan",
//     age: 21,
//     about:personInfo
// }
// const person3 = {
//     firstNmae: "Mnu",
//     age: 21,
//     about:personInfo
// }
// const person4 = {
//     firstNmae: "Raja",
//     age: 21,
//     about:personInfo
// }
// person1.about();
// person2.about();
// person3.about();
// person4.about();


// console.log(window);
// console.log(this)
// function myFunc()
// {
//    "use strict"
//     console.log(this)
// }
// // myFunc();
// function hello(){
//     console.log("hello world");
// }
// hello.call()

