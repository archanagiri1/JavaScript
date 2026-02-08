console.log("welcome")
console.log('Hello everyone')


// Variable
// Variables:These are containers for storing data.use let or const to declare them

name="Archanagiri";
console.log(name);

age=21;
console.log(age);

x=null     
console.log(x);

y=undefined;
console.log(y);


// Boolean type variable = true or false.

isfollow=true;
console.log(isfollow);

isfollow=false;
console.log(isfollow);

// let,cannot be re-declared but can be updated.

let name="Archana";
console.log(name);

// var, can be re-declared & updated.

var age=21;
console.log(age);

//const, cannot be re-declared or updated. 

const price= 144.0;
console.log(price);


// Data types (7 permitive types)

// 1.number data type

let age=21;
let price1=120.7;

// // 2.string data type
 let fullname="hello js"

// 3.Boolen data type
  isfollow=true;
  
// 4.undefined
 let=a;

// 5.Null
 let x=null;

// 6.BigInt
 let a= BigInt("123");

// 7.Symbol
 let b=Symbol("hello!");

// Non permitive types
// object

const student={
    name:"john",
    age:20,
    marks:90.81,
    ispass:true
};

student ["age"]=student["age"]+1;
console.log=(student["age"]);
