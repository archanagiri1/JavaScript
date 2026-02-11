// ============================================
// PART 1: ARRAY BASICS
// ============================================
console.log("--- PART 1: ARRAY BASICS ---\n");

// What is an Array?
// An array is a special variable that can hold multiple values at once
// Think of it like a list or a container with numbered slots

// Creating Arrays
console.log("1. Creating Arrays:");

// Method 1: Array literal (most common)
const fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits);

// Method 2: Using new Array()
const numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers:", numbers);

// Method 3: Empty array
const empty = [];
console.log("Empty array:", empty);

// Arrays can hold different types
const mixed = [1, "hello", true, null, { name: "John" }];
console.log("Mixed types:", mixed);

// Accessing Array Elements
console.log("\n2. Accessing Elements:");
console.log("First fruit:", fruits[0]);     // apple
console.log("Second fruit:", fruits[1]);    // banana
console.log("Third fruit:", fruits[2]);     // orange
console.log("Last fruit:", fruits[fruits.length - 1]); // orange

// Array Properties
console.log("\n3. Array Properties:");
console.log("Length:", fruits.length);      // 3
console.log("Type:", typeof fruits);        // object
console.log("Is Array?:", Array.isArray(fruits)); // true

// ============================================
// PART 2: ADDING AND REMOVING ELEMENTS
// ============================================
console.log("\n--- PART 2: ADDING AND REMOVING ELEMENTS ---\n");

// PUSH - Add to end
console.log("1. PUSH - Add to end:");
const colors = ["red", "green"];
console.log("Before push:", colors);
colors.push("blue");
console.log("After push('blue'):", colors);
colors.push("yellow", "purple"); // Can add multiple
console.log("After push('yellow', 'purple'):", colors);

// POP - Remove from end
console.log("\n2. POP - Remove from end:");
const items = ["first", "second", "third"];
console.log("Before pop:", items);
const removed = items.pop();
console.log("After pop:", items);
console.log("Removed item:", removed);

// UNSHIFT - Add to beginning
console.log("\n3. UNSHIFT - Add to beginning:");
const nums = [3, 4, 5];
console.log("Before unshift:", nums);
nums.unshift(1, 2);
console.log("After unshift(1, 2):", nums);

// SHIFT - Remove from beginning
console.log("\n4. SHIFT - Remove from beginning:");
const letters = ["a", "b", "c", "d"];
console.log("Before shift:", letters);
const first = letters.shift();
console.log("After shift:", letters);
console.log("Removed item:", first);

// SPLICE - Add/Remove at any position
console.log("\n5. SPLICE - Add/Remove anywhere:");
const animals = ["dog", "cat", "bird", "fish"];
console.log("Original:", animals);

// Remove 1 element at index 2
animals.splice(2, 1);
console.log("After splice(2, 1):", animals); // Removes "bird"

// Add elements at index 1
animals.splice(1, 0, "rabbit", "hamster");
console.log("After splice(1, 0, 'rabbit', 'hamster'):", animals);

// Replace elements
animals.splice(0, 2, "lion", "tiger");
console.log("After splice(0, 2, 'lion', 'tiger'):", animals);

// ============================================
// PART 3: SEARCHING IN ARRAYS
// ============================================
console.log("\n--- PART 3: SEARCHING IN ARRAYS ---\n");

const students = ["Alice", "Bob", "Charlie", "David", "Alice"];

// indexOf - Find first occurrence
console.log("1. indexOf - Find first occurrence:");
console.log("Students:", students);
console.log("Index of 'Charlie':", students.indexOf("Charlie")); // 2
console.log("Index of 'Alice':", students.indexOf("Alice"));     // 0 (first one)
console.log("Index of 'Eve':", students.indexOf("Eve"));         // -1 (not found)

// lastIndexOf - Find last occurrence
console.log("\n2. lastIndexOf - Find last occurrence:");
console.log("Last index of 'Alice':", students.lastIndexOf("Alice")); // 4

// includes - Check if exists
console.log("\n3. includes - Check if exists:");
console.log("Includes 'Bob'?", students.includes("Bob"));    // true
console.log("Includes 'Eve'?", students.includes("Eve"));    // false

// find - Find first element that matches condition
console.log("\n4. find - Find element by condition:");
const scores = [45, 67, 89, 23, 90, 78];
const firstHighScore = scores.find(score => score > 80);
console.log("Scores:", scores);
console.log("First score > 80:", firstHighScore); // 89

// findIndex - Find index of first match
console.log("\n5. findIndex - Find index by condition:");
const firstHighScoreIndex = scores.findIndex(score => score > 80);
console.log("Index of first score > 80:", firstHighScoreIndex); // 2

// ============================================
// PART 4: ARRAY ITERATION METHODS
// ============================================
console.log("\n--- PART 4: ARRAY ITERATION METHODS ---\n");

// forEach - Execute function for each element
console.log("1. forEach - Loop through array:");
const prices = [10, 20, 30];
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price}`);
});

// map - Transform each element (returns NEW array)
console.log("\n2. map - Transform elements:");
const originalNumbers = [1, 2, 3, 4, 5];
const doubled = originalNumbers.map(num => num * 2);
console.log("Original:", originalNumbers);
console.log("Doubled:", doubled);

const names = ["alice", "bob", "charlie"];
const capitalized = names.map(name => name.toUpperCase());
console.log("Names:", names);
console.log("Capitalized:", capitalized);

// filter - Select elements that match condition (returns NEW array)
console.log("\n3. filter - Select matching elements:");
const ages = [12, 18, 25, 15, 30, 17];
const adults = ages.filter(age => age >= 18);
console.log("All ages:", ages);
console.log("Adults (18+):", adults);

const words = ["hello", "hi", "goodbye", "hey", "farewell"];
const shortWords = words.filter(word => word.length <= 3);
console.log("All words:", words);
console.log("Short words (<=3):", shortWords);

// reduce - Reduce array to single value
console.log("\n4. reduce - Reduce to single value:");
const numbersToSum = [1, 2, 3, 4, 5];
const sum = numbersToSum.reduce((total, num) => total + num, 0);
console.log("Numbers:", numbersToSum);
console.log("Sum:", sum);

// Find max number
const nums2 = [45, 23, 67, 12, 89, 34];
const max = nums2.reduce((maximum, num) => num > maximum ? num : maximum);
console.log("Numbers:", nums2);
console.log("Maximum:", max);

// Count occurrences
const votes = ["yes", "no", "yes", "yes", "no", "yes"];
const voteCount = votes.reduce((count, vote) => {
  count[vote] = (count[vote] || 0) + 1;
  return count;
}, {});
console.log("Votes:", votes);
console.log("Vote count:", voteCount);

// some - Check if ANY element matches
console.log("\n5. some - Check if any match:");
const testScores = [45, 67, 89, 23, 56];
const hasHighScore = testScores.some(score => score > 80);
console.log("Scores:", testScores);
console.log("Has score > 80?", hasHighScore); // true

// every - Check if ALL elements match
console.log("\n6. every - Check if all match:");
const allPassed = testScores.every(score => score >= 50);
console.log("All scores >= 50?", allPassed); // false

const allPositive = testScores.every(score => score > 0);
console.log("All scores positive?", allPositive); // true

// ============================================
// PART 5: ARRAY MANIPULATION
// ============================================
console.log("\n--- PART 5: ARRAY MANIPULATION ---\n");

// concat - Join arrays
console.log("1. concat - Join arrays:");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const combined = arr1.concat(arr2, arr3);
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Array 3:", arr3);
console.log("Combined:", combined);

// Using spread operator (modern way)
const combined2 = [...arr1, ...arr2, ...arr3];
console.log("Combined with spread:", combined2);

// slice - Extract portion (doesn't modify original)
console.log("\n2. slice - Extract portion:");
const allFruits = ["apple", "banana", "orange", "mango", "grape"];
const someFruits = allFruits.slice(1, 4); // From index 1 to 3
console.log("All fruits:", allFruits);
console.log("Slice(1, 4):", someFruits);

const lastTwo = allFruits.slice(-2); // Last 2 elements
console.log("Last two:", lastTwo);

// reverse - Reverse array (modifies original!)
console.log("\n3. reverse - Reverse array:");
const order = [1, 2, 3, 4, 5];
console.log("Before reverse:", order);
order.reverse();
console.log("After reverse:", order);

// sort - Sort array (modifies original!)
console.log("\n4. sort - Sort array:");

// Sort strings
const unsortedWords = ["banana", "apple", "cherry"];
console.log("Before sort:", unsortedWords);
unsortedWords.sort();
console.log("After sort:", unsortedWords);

// Sort numbers (IMPORTANT: Need compare function!)
const unsortedNums = [40, 100, 1, 5, 25, 10];
console.log("\nNumbers before sort:", unsortedNums);

// Wrong way (treats as strings)
const wrongSort = [...unsortedNums].sort();
console.log("Wrong sort (no compare):", wrongSort);

// Correct way (ascending)
const correctSort = [...unsortedNums].sort((a, b) => a - b);
console.log("Correct sort (ascending):", correctSort);

// Descending
const descendingSort = [...unsortedNums].sort((a, b) => b - a);
console.log("Descending sort:", descendingSort);

// join - Convert array to string
console.log("\n5. join - Convert to string:");
const veggies = ["carrot", "potato", "tomato"];
const str1 = veggies.join();        // Default comma
const str2 = veggies.join(", ");    // Custom separator
const str3 = veggies.join(" and "); // Custom separator
console.log("Array:", veggies);
console.log("Join():", str1);
console.log("Join(', '):", str2);
console.log("Join(' and '):", str3);

// split - Convert string to array (opposite of join)
console.log("\n6. split - Convert string to array:");
const sentence = "Hello world from JavaScript";
const wordsArray = sentence.split(" ");
console.log("Sentence:", sentence);
console.log("Split by space:", wordsArray);

const csv = "apple,banana,orange";
const csvArray = csv.split(",");
console.log("CSV:", csv);
console.log("Split by comma:", csvArray);

// fill - Fill with static value
console.log("\n7. fill - Fill with value:");
const zeros = new Array(5).fill(0);
console.log("Array filled with 0:", zeros);

const arr = [1, 2, 3, 4, 5];
arr.fill(0, 2, 4); // Fill with 0 from index 2 to 3
console.log("Partial fill:", arr);

// ============================================
// PART 6: MULTI-DIMENSIONAL ARRAYS
// ============================================
console.log("\n--- PART 6: MULTI-DIMENSIONAL ARRAYS ---\n");

// 2D Array (Array of arrays)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matrix:");
console.log(matrix);

console.log("\nAccessing elements:");
console.log("matrix[0][0]:", matrix[0][0]); // 1
console.log("matrix[1][2]:", matrix[1][2]); // 6
console.log("matrix[2][1]:", matrix[2][1]); // 8

console.log("\nLooping through 2D array:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`[${i}][${j}] = ${matrix[i][j]}`);
  }
}


