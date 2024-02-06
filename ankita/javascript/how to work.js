//1 - compilation 
//2 - code execution 
//why compilation 
//how js code execution 
//what is global exection context?
// what is local exection context ?
// closures
//global memory in window hota h ,gminvaruse krke bnayege unction toundefine hoga
//gmmthis,window hota h,let se bnaye variable bn jate h lekin initialiaz krna pdta h bena initializ kiya use nhi kr skte
//tdz(temparary means jb tk variable initialize nhi hoga tbtk tdz hogaead zone )


//gec (global execution context )
//hosting
console.log(this);
console.log(window);
console.log(myFunction);
myFunction();
console.log(fullName);
function myFunction(){
    console.log("this is my function");
}
var firstName = "mahant";
var lastName = "sharma";
var fullName = firstName + " " + lastName;
console.log(fullName);

//let 
console.log(firstName);//uninitializ 
let firstName = "mahit";
console.log(firstName);  //initializ




//fec (function execution context)

// let foo = "foo";
// console.log(foo);
// function getFullName(firstName, lastName){
//     console.log(arguments);
//     let myVar = "var inside func";
//     console.log(arguments);
//     let myVar = "var inside func";
//     console.log(myVar);
//     const fullName = firstName + " " + lastName;
//     return fullName;
// }

// const personName = gatFullName("mohit","sharma");
// console.log(personName);


//lexical environment, scope chain

const lastName = "vandana";
const printName = function(){
    const firstName = "anudhav";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction()
}
printName();