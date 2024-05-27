// String

const name = "Esha";
let rowcount = 50;

console.log(name + rowcount + "hehe");
console.log(`Hello my name is ${name} and my row count is ${rowcount}`);

// String object
const surname = new String('Kumbhare');
console.log(surname.__proto__);
console.log(surname.length);
console.log(surname.charAt(3));
console.log(surname.indexOf('h'));
console.log(surname.toUpperCase());

const substr = surname.substring(0,6);
console.log(substr);

const substrneg = surname.slice(-8, );
console.log(substrneg);