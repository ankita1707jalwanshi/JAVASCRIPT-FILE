
// splice method
// start,delete ,insert
const myArray = ['item1', 'item2', 'item3'];
delete
myArray.splice(1,  1);

insert 
myArray.splice(1,0,'insert item');
console.log(myArray);

const deletedItem = myArray.splice(1,2);
console.log("deleted item",deletedItem);
console.log(myArray);

// insert and delete
myArray.splice(1,2,"inserted item1","inserted item2");
console.log(myArray);
