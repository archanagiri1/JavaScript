// ============================================
// OPERATORS IN JAVASCRIPT
// ============================================

// ============================================
// 1. ARITHMETIC OPERATORS
// ============================================

const a = 10;
const b = 3;

// Basic arithmetic
console.log(a + b);  // 13 - Addition
console.log(a - b);  // 7  - Subtraction
console.log(a * b);  // 30 - Multiplication
console.log(a / b);  // 3.333... - Division
console.log(a % b);  // 1  - Modulus (remainder)
console.log(a ** b); // 1000 - Exponentiation (10^3)

// Increment and Decrement
let x = 5;
console.log(x++);    // 5 (post-increment: use then increment)
console.log(x);      // 6
console.log(++x);    // 7 (pre-increment: increment then use)
console.log(x--);    // 7 (post-decrement)
console.log(--x);    // 5 (pre-decrement)

// Unary operators
console.log(+true);  // 1 (converts to number)
console.log(-"5");   // -5 (converts and negates)

// ============================================
// 2. ASSIGNMENT OPERATORS
// ============================================

let num = 10;

// Basic assignment
num = 20;

// Compound assignments
num += 5;   // num = num + 5  → 25
num -= 3;   // num = num - 3  → 22
num *= 2;   // num = num * 2  → 44
num /= 4;   // num = num / 4  → 11
num %= 3;   // num = num % 3  → 2
num **= 3;  // num = num ** 3 → 8

// Logical assignment (ES2021)
let value = null;
value ??= "default";  // Assigns if null/undefined
console.log(value);   // "default"

let flag = false;
flag ||= true;        // Assigns if falsy
flag &&= false;       // Assigns if truthy

// ============================================
// 3. COMPARISON OPERATORS
// ============================================

// Equality
console.log(5 == "5");    // true  (loose equality - type coercion)
console.log(5 === "5");   // false (strict equality - no coercion)
console.log(5 != "5");    // false (loose inequality)
console.log(5 !== "5");   // true  (strict inequality)

// Always prefer === and !== to avoid bugs

// Relational
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(10 <= 9);     // false

// String comparison (lexicographical)
console.log("apple" < "banana");  // true
console.log("Z" < "a");           // true (uppercase < lowercase)

// ============================================
// 4. LOGICAL OPERATORS
// ============================================

const t = true;
const f = false;

// AND (&&) - Returns first falsy value or last value
console.log(t && t);        // true
console.log(t && f);        // false
console.log(5 && "hello");  // "hello" (last truthy)
console.log(0 && "hello");  // 0 (first falsy)

// OR (||) - Returns first truthy value or last value
console.log(t || f);        // true
console.log(f || f);        // false
console.log(0 || "hello");  // "hello" (first truthy)
console.log("" || null);    // null (last value if all falsy)

// NOT (!) - Inverts boolean value
console.log(!true);         // false
console.log(!false);        // true
console.log(!0);            // true (0 is falsy)
console.log(!!"hello");     // true (double NOT converts to boolean)

// Nullish coalescing (??) - Returns right if left is null/undefined
console.log(null ?? "default");      // "default"
console.log(undefined ?? "default"); // "default"
console.log(0 ?? "default");         // 0 (not null/undefined)
console.log("" ?? "default");        // "" (not null/undefined)

// Short-circuit evaluation
const getName = (user) => user && user.name;  // Safe navigation
const getDefault = (val) => val || "Unknown"; // Default value

// ============================================
// 5. BITWISE OPERATORS
// ============================================

const p = 5;  // Binary: 0101
const q = 3;  // Binary: 0011

// Bitwise AND
console.log(p & q);   // 1 (0001)

// Bitwise OR
console.log(p | q);   // 7 (0111)

// Bitwise XOR
console.log(p ^ q);   // 6 (0110)

// Bitwise NOT
console.log(~p);      // -6 (inverts bits)

// Left shift
console.log(p << 1);  // 10 (1010) - multiply by 2

// Right shift
console.log(p >> 1);  // 2 (0010) - divide by 2

// Unsigned right shift
console.log(-5 >>> 1); // Large positive number

// Practical use: checking even/odd
const isEven = (n) => (n & 1) === 0;
console.log(isEven(4));  // true
console.log(isEven(5));  // false

// ============================================
// 6. STRING OPERATORS
// ============================================

// Concatenation
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName);  // "John Doe"

// Template literals (preferred)
const greeting = `Hello, ${firstName}!`;
console.log(greeting);

// Comparison
console.log("a" < "b");     // true
console.log("apple" < "app"); // false

// ============================================
// 7. CONDITIONAL (TERNARY) OPERATOR
// ============================================

// Syntax: condition ? valueIfTrue : valueIfFalse
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);  // "Yes"

// Nested ternary (use sparingly)
const grade = 85;
const result = grade >= 90 ? "A" : 
               grade >= 80 ? "B" : 
               grade >= 70 ? "C" : "F";
console.log(result);  // "B"

// ============================================
// 8. TYPE OPERATORS
// ============================================

// typeof - Returns type as string
console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (quirk)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"

// instanceof - Checks if object is instance of class/constructor
const arr = [];
console.log(arr instanceof Array);   // true
console.log(arr instanceof Object);  // true
const date = new Date();
console.log(date instanceof Date);   // true

// ============================================
// 9. COMMA OPERATOR
// ============================================

// Evaluates multiple expressions, returns last one
let i = 0;
const result2 = (i++, i++, i);  // Returns 2
console.log(result2);  // 2
console.log(i);        // 2

// Often used in for loops
for (let j = 0, k = 10; j < 5; j++, k--) {
  console.log(`j: ${j}, k: ${k}`);
}

// ============================================
// 10. SPREAD AND REST OPERATORS (...)
// ============================================

// Spread operator - Expands iterables
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };  // {a: 1, b: 2, c: 3, d: 4}

// Rest operator - Collects remaining elements
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4));  // 10

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);  // [3, 4, 5]

// ============================================
// 11. OPTIONAL CHAINING (?.)
// ============================================

const user = {
  name: "Alice",
  address: {
    city: "NYC"
  }
};

// Safe property access
console.log(user?.address?.city);     // "NYC"
console.log(user?.contact?.phone);    // undefined (no error)

// Optional function call
const greet2 = user.greet?.();        // undefined (no error)

// Optional array access
const items = null;
console.log(items?.[0]);              // undefined

// ============================================
// 12. OPERATOR PRECEDENCE
// ============================================

// From highest to lowest:
// 1. Grouping ()
// 2. Member access .
// 3. Function call ()
// 4. Postfix ++/--
// 5. Prefix ++/--, !, typeof
// 6. Exponentiation **
// 7. *, /, %
// 8. +, -
// 9. Comparison <, >, <=, >=
// 10. Equality ==, ===, !=, !==
// 11. Logical AND &&
// 12. Logical OR ||
// 13. Ternary ?:
// 14. Assignment =, +=, etc.

console.log(2 + 3 * 4);      // 14 (not 20)
console.log((2 + 3) * 4);    // 20 (grouping)

