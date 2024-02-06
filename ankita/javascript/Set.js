
// SET -- (it is iterable) ,store data, set also have own methods,No index-base access 
// order is  not granteed ,unique items only(no duplicates allowed)


const items = ['item1','item2','item3'];
 console.log(item);
const numbers = new set();
numbers.add(1);
numbers.add(2);
// numbers.add(2);
if(numbers.has(1)){
    console.log("one is present")
}else{
    console.log("one is not present")
}
console.log(numbers);
    // numbers.add(['item1','item2']);
 // numbers.add(['item1','item2']);
 // console.log(numbers);
const myArray = [1,2,3,4,4,5,6];
const uniqueElemenets = new Set(myArray);
console.log(uniqueElemenets);
let length = 0;
for(let element of uniqueElemenets){
    lenght++;
}
console.log(length);


