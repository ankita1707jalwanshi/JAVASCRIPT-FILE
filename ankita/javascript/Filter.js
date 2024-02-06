
//filter method

const numbers=[1,2,3,4,5,6,7,8];
const isOdd=function(number){
    return number%2==0;
    // return number%2!==0;
}
const evenNumbers=numbers.filter(isOdd);
console.log(evenNumbers);
console.log(OddNumbers);


         //reduce methode
// sum  of al the numbers in array---aim:
//   const numbers=[1,2,3,4,56,66];
//   const sum=numbers.reduce((accumulator, currentValue)=>{
//  return accumulator + currentValue;
//      });
//  console.log(sum);
//accumulator , currentValue, return
    // 1             2               3

// const userCart = [
// {productId: 1, productName: "mobile", price: 12000},
// {productId: 2, productName: "laptop", price: 22000},
// {productId: 3, productName: "Tv", price: 15000},
// ]
// userCart.reduce((totalPrice, currentProduce)=>{
//    return totalPrice + currentProduct.price;
// }, 0)
// console.log(totalAmount);
