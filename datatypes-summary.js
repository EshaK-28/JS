// primitive and non-primitive datatypes
// difference on the basis of how it is stored and retieved

// Primitive Datatype - call by reference
// 7 types - string, number, bool, null, undefined, symbol, BigInt

// Reference Type data type - non primitive
// array, objects, Functions

// Javascript is dynamically type language.

// Symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

// Array 
const heroes = ["Iron man", "captain", "thor"];
console.log(heroes);

// object
let myobj = {
    name: "Esha",
    age: 6,
}
console.log(myobj);

// function - object function
const myfunc = function(){
    console.log("Hello Esha");
}

// type of
console.log(typeof null); // object
console.log(typeof heroes); // object