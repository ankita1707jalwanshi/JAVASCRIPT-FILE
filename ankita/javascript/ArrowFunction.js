


// arrow functionn
// arrow function m this -- windows hota h 


const user1 = {
    firstName : "mahima",
    age : 8,
    about: () => {
        console.log(this.firstName, this.age);
    }
}
user1.about(user1);
