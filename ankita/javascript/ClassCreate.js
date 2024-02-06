


class CreateUser{
constructor(firstName, lastName, email, age, address){
console.log("constructor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
about(){
    return `${this.firstName} is ${this.age}years old`;
}
is18(){
    return this.age >= 18;
}
sing(){
    return "la la la la";
  }
}

const user1 = new CreateUser('amish','sahh','amish@gmail.com');
const user2 = new CreateUser('ananaya','path','ananaya@gmail.com');
const user3 = new CreateUser('manay','saheb','manay@gmail.com');
 console.log(user1.firstName);

