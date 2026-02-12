/* ---------------------------------------------------------------
1) DECLARATION
We create a reusable machine with a name.
Whenever we call it, it runs.
----------------------------------------------------------------*/
function hello() {
  console.log("Hello");
}
hello();   // runs the machine



/* ---------------------------------------------------------------
2) PARAMETERS & ARGUMENTS
Parameter = variable the function receives.
Argument = real value you send.
----------------------------------------------------------------*/
function greet(name) {
  console.log("Hi " + name);
}
greet("Archna");



/* ---------------------------------------------------------------
3) RETURN VALUE
Function sends result back.
Without return → you get undefined.
----------------------------------------------------------------*/
function add(a, b) {
  return a + b;
}
let sum = add(2, 3);
console.log("Sum =", sum);



/* ---------------------------------------------------------------
4) FUNCTION EXPRESSION
Function stored inside a variable.
Behaves like data.
----------------------------------------------------------------*/
const multiply = function (a, b) {
  return a * b;
};
console.log("Multiply =", multiply(3, 4));



/* ---------------------------------------------------------------
5) ARROW FUNCTION
Short, modern style. Very common in projects.
----------------------------------------------------------------*/
const divide = (a, b) => a / b;
console.log("Divide =", divide(10, 2));



/* ---------------------------------------------------------------
6) DEFAULT PARAMETERS
If caller sends nothing → default value is used.
----------------------------------------------------------------*/
function login(user = "Guest") {
  console.log("Welcome", user);
}
login();          // Guest
login("Archna");  // Archna



/* ---------------------------------------------------------------
7) REST PARAMETERS
Accept unlimited inputs → packed into array.
----------------------------------------------------------------*/
function total(...numbers) {
  let result = 0;
  for (let n of numbers) result += n;
  return result;
}
console.log("Total =", total(1, 2, 3, 4));



/* ---------------------------------------------------------------
8) SPREAD
Unpack array → send as separate values.
----------------------------------------------------------------*/
let nums = [5, 6];
console.log("Add =", add(...nums));



/* ---------------------------------------------------------------
9) CALLBACK
We give a function to another function to run later.
----------------------------------------------------------------*/
function processUser(name, callback) {
  callback(name);
}

processUser("Archna", function (n) {
  console.log("Processed", n);
});



/* ---------------------------------------------------------------
10) HIGHER ORDER FUNCTION
Either takes a function OR returns one.
Very powerful concept.
----------------------------------------------------------------*/
function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = createMultiplier(2);
console.log("Double =", double(5));



/* ---------------------------------------------------------------
11) CLOSURE
Inner function REMEMBERS outer variable even after
outer function finished.
----------------------------------------------------------------*/
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const inc = counter();
inc();  // 1
inc();  // 2



/* ---------------------------------------------------------------
12) SCOPE
What is inside function stays inside.
----------------------------------------------------------------*/
function scopeTest() {
  let local = "inside";
  console.log(local);
}
scopeTest();
// console.log(local); cannot access



/* ---------------------------------------------------------------
13) THIS KEYWORD
"this" = owner of the function at call time.
----------------------------------------------------------------*/
const user = {
  name: "Archna",
  show() {
    console.log(this.name);
  },
};
user.show();



/* ---------------------------------------------------------------
14) ARROW vs NORMAL
Arrow does NOT get its own this.
----------------------------------------------------------------*/
const obj = {
  value: 10,
  normal: function () {
    console.log("Normal:", this.value);
  },
  arrow: () => {
    console.log("Arrow:", this.value); // usually undefined
  },
};

obj.normal();
obj.arrow();



/* ---------------------------------------------------------------
15) IIFE
Function that runs immediately after creation.
----------------------------------------------------------------*/
(function () {
  console.log("IIFE executed");
})();



/* ---------------------------------------------------------------
16) RECURSION
Function calling itself until condition stops it.
----------------------------------------------------------------*/
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial =", factorial(5));



/* ---------------------------------------------------------------
17) PURE vs IMPURE
Pure → depends only on inputs.
Impure → touches outside world.
----------------------------------------------------------------*/
function pureAdd(a, b) {
  return a + b;
}

let outside = 0;
function impureAdd(x) {
  outside += x;   // modifies external data
}



/* ---------------------------------------------------------------
18) ASYNC
Runs in future / wait for result.
Used in APIs, database, files.
----------------------------------------------------------------*/
async function fetchData() {
  return "Data received";
}

fetchData().then(res => console.log(res));




