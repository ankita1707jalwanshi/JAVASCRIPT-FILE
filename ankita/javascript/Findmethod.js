

// //find method
// const myArray = ["hello","world","salu","khalu"];
// function isLength3(string){
//     return string.Length === 3;
// }
// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

// const user = [
//     {userId : 1, userName: "anshu"},
//     {userId : 2, userName: "ankita"},
//     {userId : 3, userName: "anshi"},
//     {userId : 4, userName: "aashu"},
//     {userId : 5, userName: "ansha"},
// ];

// const myUser = user.find((user)=>{
//     return user.userId===3;
// });
// console.log(myUser);


//every method
//callback function --> true / false (boolean)
//every method --> true / false(boolean)

// const numbers = [2,4,6,8,88];
// // return isEven(number){
//  return number % 2 === 0;
// //}
// const ans = numbers.every((number)=>number%2===0);
// const ans = numbers.every(isEven);
// console.log(ans);
// const userCart = [
//     {productid: 1, productName: "mobile", price: 12000},
//     {productid: 2, productName: "Tv", price: 12000},
//     {productid: 3, productName: "phone", price: 12000},    
// ]
// const ans = userCart.every((cartItem)=>cartItem.price<2000);
//  console.log(ans);


//some  method
//kya ak bhi no. even h 
// const numbers = [3,5,11,9];

// const ans = numbers.some((Number)=>Number%2===0);
// console.log(ans);
// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "mobile", price: 190000},
//     {productId: 3, productName: "mobile", price: 9000},
//     {productId: 4, productName: "mobile", price: 12000},
// ]
// const ans= userCart.some((cartItem)=>cartItem.price > 100000);
// console.log(ans);

