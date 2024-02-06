



//String Length
// let firstName="Harse";
// console.log(firstName [0]);
// console.log(firstName.length);
// console.log(firstName[firstName]);
// console.log(firstName[firstName.length-3]);

//trime( generate new result without space)
let firstName="Harse";
console.log(firstName);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
//console.log(firstName[firstName.length-3]);


//Slice
let new String = firstName.slice(1);
console.log(first)
console.log(newString);











//lexical scope
 //it will print value 1 and then it will print value 59


// const myVar= "value1";
//  function myApp(){
  
//     function myFunc(){
//         const myVar= "value59";
//         console.log("inside myFunc", myVar);
  
//  }
//  console.log(myVar);
//  myFunc();

// }
//  myApp();




//parameter destructuring
const person ={
    firstName: "ankit",
    gender:"male",
}
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);

//funtion returning function
function myFunc(){
    function hello(){
        return "hello world"
     }
    return hello;
}

const ans= myFunc()
console.log(ans());

// heigher  order function is taken a function as a input and call as  afunction
