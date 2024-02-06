
//array like object --jinke pas length property hoti h jinko hmindex se accesskr skte h 
//we can not access the object becoz no index property


// var car = [];
// car = ["Car1","Car2","Car3","Car4"];
// document.write(Car[2]);

var cars = new Array();

cars = ["Car1","Car2","Car3","Car4"];

cars[4] = "cars4"

document.write(cars[0]);


// aleert(cars[1]);
// const firstName = {"nirmla",'radha'}    //boject
// console.log(firstName)

// const firstName = ["nirmla",'radha']   //boject
// console.log(firstName.length)
// console.log(firstName.length-1)
// console.log(firstName[1])



// important array method 
// const numbers = [2,3,4,5,9,8,6];

// function multiplyBy2(number,index){
//     console.log("index is", index);
//     console.log(`${number}*2 = ${number*2}`);
// }

// multiplyBy2(numbers[0], 0);
// multiplyBy2(numbers[1], 1);

// for(let i=0; i< numbers.length; i++){
//     multiplyBy2(numbers[1],i)
// }

// function myFunc(numbers, index){
//     console.log('index is $ {index} number is ${numbers}')
//     }
    
//     numbers.forEach (function(number,index){
//         console.log(`index is ${index}number is ${number}`)
//     });


// const user = [
//     {firstName: "raniii", age: 23},
//     // {firstName: "abbhimanyu", age: 23},
//     {firstName: "raushan", age: 23},
//     {firstName: "raja", age: 23},
// ]

// user.forEach(function(user){
//     console.log(user.firstName);
// });


// user.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }

