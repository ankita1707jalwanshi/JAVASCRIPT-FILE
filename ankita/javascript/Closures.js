//closures
//closures : 30-40%
//analyse : 70-80%
//real 




// function can return functions
// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction();
// }
// const ans = outerFunction();
// console.log(ans);
// ans();

// function printFullName(firstName,lastName){
//     function printName(){
//         console.log(firstName, lastName);
//     }
//     return printName;
// }
// const ans = printFullName("amisha","sharma");
// console.log(ans);
// ans();

// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function(){
//     }
// }
// const ans = hello("arg");
// ans();

// function myFunction(power){
//     return function(Number){
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);

// function myFunction(power){
//     return function(Number){
//         return number**power
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);

// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);


// const myFunction = power => number => number ** power
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);
// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);



function func(){
    return function(){
        if(true){
            console.log("Hii You Called me")
        }else{
            console.log("Mai already ek bar call ho chukahoon!");
        }
    }
}
const myFunc = func();
myFunc();
myFunc();
const myFunc2 = func();
myFunc2();
myFunc2();