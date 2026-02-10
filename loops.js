// ============================================
// COMPLETE LOOPS IN JAVASCRIPT
// ============================================


console.log("=== JAVASCRIPT LOOPS TUTORIAL ===\n");

// ============================================
// 1. FOR LOOP - Most Common Loop
// ============================================
console.log("--- 1. FOR LOOP ---");

// Basic syntax: for (initialization; condition; increment)
// Use when you know how many times to loop

for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}
// Output: Iteration 0, 1, 2, 3, 4

console.log("\n--- Counting Backwards ---");
for (let i = 5; i > 0; i--) {
  console.log(`Countdown: ${i}`);
}
// Output: 5, 4, 3, 2, 1

console.log("\n--- Skip by 2 ---");
for (let i = 0; i < 10; i += 2) {
  console.log(`Even number: ${i}`);
}
// Output: 0, 2, 4, 6, 8

console.log("\n--- Loop Through Array ---");
const fruits = ["apple", "banana", "orange", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}. ${fruits[i]}`);
}
// Output: 1. apple, 2. banana, 3. orange, 4. mango

console.log("\n--- Nested For Loop (Multiplication Table) ---");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("---");
}

// ============================================
// 2. WHILE LOOP - Loop While Condition is True
// ============================================
console.log("\n--- 2. WHILE LOOP ---");

// Use when you DON'T know how many times to loop
// Condition is checked BEFORE each iteration

let count = 0;
while (count < 5) {
  console.log(`Count is: ${count}`);
  count++;
}
// Output: 0, 1, 2, 3, 4

console.log("\n--- While Loop Example: User Input Simulation ---");
let password = "";
let attempts = 0;
const correctPassword = "secret123";

// Simulate password attempts (in real app, this would be user input)
const passwordAttempts = ["wrong1", "wrong2", "secret123"];

while (password !== correctPassword && attempts < 3) {
  password = passwordAttempts[attempts]; // Simulating user input
  attempts++;
  console.log(`Attempt ${attempts}: ${password}`);
  
  if (password === correctPassword) {
    console.log("✓ Access granted!");
  } else if (attempts < 3) {
    console.log("✗ Wrong password, try again");
  } else {
    console.log("✗ Too many attempts, account locked");
  }
}

console.log("\n--- While Loop: Find First Even Number ---");
const numbers = [1, 3, 5, 7, 8, 9, 11];
let index = 0;
let found = false;

while (index < numbers.length && !found) {
  if (numbers[index] % 2 === 0) {
    console.log(`Found even number: ${numbers[index]} at index ${index}`);
    found = true;
  }
  index++;
}

// ============================================
// 3. DO-WHILE LOOP - Execute At Least Once
// ============================================
console.log("\n--- 3. DO-WHILE LOOP ---");

// Condition is checked AFTER each iteration
// Guarantees at least ONE execution

let num = 0;
do {
  console.log(`Number: ${num}`);
  num++;
} while (num < 5);
// Output: 0, 1, 2, 3, 4

console.log("\n--- Do-While: Runs Even When Condition is False ---");
let x = 10;
do {
  console.log(`This runs once even though x (${x}) is not < 5`);
} while (x < 5);

console.log("\n--- Do-While: Menu System Example ---");
let choice = 0;
let menuAttempts = 0;
const validChoices = [1, 2, 3];

do {
  // Simulate user choosing menu option
  choice = menuAttempts === 0 ? 5 : 2; // First attempt: invalid, second: valid
  menuAttempts++;
  
  console.log(`You selected: ${choice}`);
  
  if (validChoices.includes(choice)) {
    console.log("✓ Valid choice!");
  } else {
    console.log("✗ Invalid choice, please try again");
  }
} while (!validChoices.includes(choice) && menuAttempts < 3);

// ============================================
// 4. FOR...OF LOOP - Loop Through Arrays/Iterables
// ============================================
console.log("\n--- 4. FOR...OF LOOP ---");

// Best for looping through ARRAYS, STRINGS, SETS, MAPS
// Gives you the VALUE directly (not the index)

const colors = ["red", "green", "blue", "yellow"];
console.log("Looping through array:");
for (const color of colors) {
  console.log(`Color: ${color}`);
}

console.log("\n--- For...of: Loop Through String ---");
const name = "JavaScript";
for (const char of name) {
  console.log(char);
}

console.log("\n--- For...of: With Index Using .entries() ---");
for (const [index, color] of colors.entries()) {
  console.log(`${index}: ${color}`);
}

console.log("\n--- For...of: Loop Through Set ---");
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
for (const num of uniqueNumbers) {
  console.log(`Unique number: ${num}`);
}

console.log("\n--- For...of: Loop Through Map ---");
const userRoles = new Map([
  ["Alice", "Admin"],
  ["Bob", "User"],
  ["Charlie", "Moderator"]
]);

for (const [name, role] of userRoles) {
  console.log(`${name} is a ${role}`);
}

// ============================================
// 5. FOR...IN LOOP - Loop Through Object Properties
// ============================================
console.log("\n--- 5. FOR...IN LOOP ---");

// Best for looping through OBJECT KEYS
// Gives you the KEY/PROPERTY NAME (not the value)

const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  job: "Developer"
};

console.log("Looping through object:");
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

console.log("\n--- For...in: With hasOwnProperty Check ---");
// Always check if property belongs to object (not inherited)
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`Own property - ${key}: ${person[key]}`);
  }
}

console.log("\n--- For...in: With Arrays (NOT RECOMMENDED) ---");
// For...in with arrays gives you indices as STRINGS
const arr = ["a", "b", "c"];
for (const index in arr) {
  console.log(`Index: ${index} (type: ${typeof index}), Value: ${arr[index]}`);
}
console.log("⚠️ Use for...of for arrays, not for...in!");

// ============================================
// 6. ARRAY METHODS (Alternative to Loops)
// ============================================
console.log("\n--- 6. ARRAY METHODS ---");

const nums = [1, 2, 3, 4, 5];

// forEach - Execute function for each element
console.log("forEach - Loop with callback:");
nums.forEach((num, index) => {
  console.log(`Index ${index}: ${num * 2}`);
});

// map - Transform each element
console.log("\nmap - Create new array:");
const doubled = nums.map(num => num * 2);
console.log(`Original: ${nums}`);
console.log(`Doubled: ${doubled}`);

// filter - Select elements that match condition
console.log("\nfilter - Get even numbers:");
const evens = nums.filter(num => num % 2 === 0);
console.log(evens);

// reduce - Reduce array to single value
console.log("\nreduce - Sum all numbers:");
const sum = nums.reduce((total, num) => total + num, 0);
console.log(`Sum: ${sum}`);

// find - Find first matching element
console.log("\nfind - Find first number > 3:");
const found2 = nums.find(num => num > 3);
console.log(found2);

// some - Check if ANY element matches
console.log("\nsome - Is any number > 3?");
console.log(nums.some(num => num > 3)); // true

// every - Check if ALL elements match
console.log("\nevery - Are all numbers > 0?");
console.log(nums.every(num => num > 0)); // true

// ============================================
// 7. BREAK AND CONTINUE
// ============================================
console.log("\n--- 7. BREAK AND CONTINUE ---");

// BREAK - Exit loop completely
console.log("Using BREAK - Stop at 5:");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking at 5!");
    break;
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// CONTINUE - Skip current iteration
console.log("\nUsing CONTINUE - Skip even numbers:");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip rest of loop body
  }
  console.log(i); // Only odd numbers
}
// Output: 1, 3, 5, 7, 9

console.log("\n--- Break in While Loop ---");
let counter = 0;
while (true) { // Infinite loop!
  console.log(`Counter: ${counter}`);
  counter++;
  
  if (counter >= 5) {
    console.log("Breaking out!");
    break; // Exit the loop
  }
}

console.log("\n--- Continue in While Loop ---");
let n = 0;
while (n < 10) {
  n++;
  
  if (n % 2 === 0) {
    continue; // Skip even numbers
  }
  
  console.log(`Odd number: ${n}`);
}

// ============================================
// 8.LABELED STATEMENTS (Advanced)
// ============================================
console.log("\n--- 8. LABELED STATEMENTS ---");

// Use labels to break out of nested loops
console.log("Breaking out of nested loop:");

outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log(`Breaking at i=${i}, j=${j}`);
      break outerLoop; // Breaks the outer loop!
    }
    console.log(`i=${i}, j=${j}`);
  }
}



// ============================================
// 9. PRACTICAL EXAMPLES
// ============================================
console.log("\n--- 9. PRACTICAL EXAMPLES ---");

// Example 1: Find all prime numbers up to 20
console.log("Prime numbers up to 20:");
function isPrime(num) {
  if (num <= 1) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i <= 20; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Example 2: Fibonacci sequence
console.log("\nFirst 10 Fibonacci numbers:");
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib.join(", "));

// Example 3: Reverse a string
console.log("\nReverse a string:");
const text = "Hello World";
let reversed = "";
for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}
console.log(`Original: ${text}`);
console.log(`Reversed: ${reversed}`);

// Example 4: FizzBuzz (1 to 30)
console.log("\nFizzBuzz:");
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) {
    console.log(`${i}: FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i}: Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i}: Buzz`);
  } else {
    console.log(i);
  }
}

// Example 5: Find duplicates in array
console.log("\nFind duplicates:");
const items = [1, 2, 3, 2, 4, 5, 3, 6];
const duplicates = [];

for (let i = 0; i < items.length; i++) {
  for (let j = i + 1; j < items.length; j++) {
    if (items[i] === items[j] && !duplicates.includes(items[i])) {
      duplicates.push(items[i]);
    }
  }
}
console.log(`Array: ${items}`);
console.log(`Duplicates: ${duplicates}`);

// Example 6: Sum of array elements
console.log("\nSum of array elements:");
const values = [10, 20, 30, 40, 50];
let total = 0;

for (const value of values) {
  total += value;
}
console.log(`Values: ${values}`);
console.log(`Sum: ${total}`);

// Example 7: Create a pattern
console.log("\nStar Pattern:");
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 0; j < i; j++) {
    stars += "* ";
  }
  console.log(stars);
}

// Example 8: Object iteration
console.log("\nCalculate total cart price:");
const cart = {
  apple: 2.5,
  banana: 1.5,
  orange: 3.0,
  mango: 4.5
};

let cartTotal = 0;
for (const item in cart) {
  console.log(`${item}: $${cart[item]}`);
  cartTotal += cart[item];
}
console.log(`Total: $${cartTotal.toFixed(2)}`);

// ============================================
// 10. LOOP COMPARISON CHART
// ============================================
console.log("\n--- LOOP COMPARISON ---");
console.log(`
┌─────────────┬───────────────────┬─────────────────────────────┐
│ Loop Type   │ Best For          │ Example                     │
├─────────────┼───────────────────┼─────────────────────────────┤
│ for         │ Known iterations  │ for(let i=0; i<10; i++)     │
│ while       │ Unknown iterations│ while(condition)            │
│ do-while    │ At least once     │ do {...} while(condition)   │
│ for...of    │ Arrays/Iterables  │ for(const x of array)       │
│ for...in    │ Object properties │ for(const key in obj)       │
│ forEach     │ Array iteration   │ arr.forEach(item => {})     │
└─────────────┴───────────────────┴─────────────────────────────┘
`);
