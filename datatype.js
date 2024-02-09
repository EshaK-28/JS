// Primitive: String, Number, String, Boolean, Null, BigINT, Symbol
// Reference: Array, Objects, Functions


const her = ["Apple", "Banana", "Cat"]

let myobj = {
    name: "Esha",
    age: 22,
}

console.log(myobj.name)
console.log(myobj.age)

let myfunc = function(){
    console.log("Hello World")
}

myfunc()

let x = Symbol("123")
console.log(x)

console.log(typeof myfunc)
console.log(typeof myobj)
console.log(typeof x)