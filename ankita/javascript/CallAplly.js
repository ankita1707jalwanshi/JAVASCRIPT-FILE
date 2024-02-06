
//call
//apply
function about(hobby, ghumna){
console.log(this.firstName, this.age, ghumna)
//clg m jitna input denge untna hi print hoga
}
const user1= {
    firstName : "Manu",
    age : 7,
}
const user2 ={
    firstName : "Mahi",
    age:8,
}
// user1.about.call(user2);
// user1.about.call(user1);
// user1.about.call(user2,"music","travelling");
// user1.about.apply(user1,["guitar","music"]);
const func= about.bind(user1, "music", "travelling");
func();



//sort inedex
const user1 = {
    firstName:"mahi",
    age:9,
    about() {
        console.log(this.firstName, this.age);
    }
}
user1.about();






