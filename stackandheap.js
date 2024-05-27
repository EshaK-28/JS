// Stack - Primitive memory - you get a copy
// Heap - Non primitive memory - you get a reference 

//stack
let name1 = "Esha";
let name2 = name1;
name2 = "Kush";

console.log(name1);
console.log(name2);

//heap
let user = {
    name:"Esha",
    age:6,
}

let user2 = user;
user.name = "Kush";

console.log(user);
console.log(user2);