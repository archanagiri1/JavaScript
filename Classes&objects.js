console.log("=== JAVASCRIPT CLASSES AND OBJECTS GUIDE ===\n");

// ============================================
// PART 1: OBJECT BASICS
// ============================================
console.log("--- PART 1: OBJECT BASICS ---\n");

// What is an Object?
// An object is a collection of related data and functionality
// Think of it like a real-world object with properties (characteristics) and methods (actions)

// Creating Objects - Method 1: Object Literal
console.log("1. Creating Objects with Object Literal:");

const person = {
  // Properties (data)
  name: "John",
  age: 30,
  city: "New York",
  
  // Methods (functions)
  greet: function() {
    return `Hello, I'm ${this.name}`;
  },
  
  // Shorthand method
  celebrate() {
    return `${this.name} is celebrating!`;
  }
};

console.log("Person object:", person);
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log(person.greet());
console.log(person.celebrate());

// Accessing Properties
console.log("\n2. Accessing Properties:");

// Dot notation (most common)
console.log("Using dot notation:", person.name);

// Bracket notation (useful for dynamic property names)
console.log("Using bracket notation:", person["age"]);

// Dynamic property access
const property = "city";
console.log("Dynamic access:", person[property]);

// Adding new properties
console.log("\n3. Adding Properties:");
person.email = "john@example.com";
person.country = "USA";
console.log("After adding properties:", person);

// Modifying properties
console.log("\n4. Modifying Properties:");
person.age = 31;
person.city = "Los Angeles";
console.log("Updated age:", person.age);
console.log("Updated city:", person.city);

// Deleting properties
console.log("\n5. Deleting Properties:");
delete person.country;
console.log("After deleting country:", person);

// Nested Objects
console.log("\n6. Nested Objects:");

const student = {
  name: "Alice",
  age: 20,
  address: {
    street: "123 Main St",
    city: "Boston",
    zipCode: "02101"
  },
  grades: {
    math: 95,
    english: 88,
    science: 92
  }
};

console.log("Student:", student);
console.log("Street:", student.address.street);
console.log("Math grade:", student.grades.math);

// ============================================
// PART 2: OBJECT METHODS
// ============================================
console.log("\n--- PART 2: OBJECT METHODS ---\n");

// Object.keys() - Get all property names
console.log("1. Object.keys() - Get property names:");
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
  color: "blue"
};

const keys = Object.keys(car);
console.log("Keys:", keys);

// Object.values() - Get all values
console.log("\n2. Object.values() - Get values:");
const values = Object.values(car);
console.log("Values:", values);

// Object.entries() - Get key-value pairs
console.log("\n3. Object.entries() - Get key-value pairs:");
const entries = Object.entries(car);
console.log("Entries:", entries);

// Looping through objects
console.log("\n4. Looping through objects:");

// Using for...in
console.log("Using for...in:");
for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}

// Using Object.keys()
console.log("\nUsing Object.keys():");
Object.keys(car).forEach(key => {
  console.log(`${key}: ${car[key]}`);
});

// Using Object.entries()
console.log("\nUsing Object.entries():");
Object.entries(car).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Object.assign() - Copy/Merge objects
console.log("\n5. Object.assign() - Copy/Merge:");

const source = { a: 1, b: 2 };
const target = { c: 3 };
const merged = Object.assign(target, source);
console.log("Merged:", merged);

// Better way: Spread operator
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const combined = { ...obj1, ...obj2 };
console.log("Combined with spread:", combined);

// ============================================
// PART 3: CONSTRUCTOR FUNCTIONS (Old Way)
// ============================================
console.log("\n--- PART 3: CONSTRUCTOR FUNCTIONS ---\n");

// Constructor function (old ES5 way)
// Convention: Start with capital letter
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  
  this.greet = function() {
    return `Hello, I'm ${this.name} from ${this.city}`;
  };
}

// Creating instances with 'new' keyword
const person1 = new Person("Alice", 25, "New York");
const person2 = new Person("Bob", 30, "Los Angeles");

console.log("Person 1:", person1);
console.log("Person 2:", person2);
console.log(person1.greet());
console.log(person2.greet());

// Adding methods to prototype (more efficient)
Person.prototype.celebrate = function() {
  return `${this.name} is ${this.age} years old!`;
};

console.log(person1.celebrate());
console.log(person2.celebrate());

// ============================================
// PART 4: ES6 CLASSES (Modern Way)
// ============================================
console.log("\n--- PART 4: ES6 CLASSES ---\n");

// Class declaration
console.log("1. Basic Class:");

class Animal {
  // Constructor - runs when creating new instance
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
  
  // Method
  makeSound() {
    return `${this.name} makes a sound`;
  }
  
  // Method
  getInfo() {
    return `${this.name} is a ${this.age}-year-old ${this.species}`;
  }
}

// Creating instances
const dog = new Animal("Buddy", "Dog", 3);
const cat = new Animal("Whiskers", "Cat", 2);

console.log(dog.getInfo());
console.log(cat.getInfo());
console.log(dog.makeSound());

// More complex example
console.log("\n2. Complete Class Example:");

class BankAccount {
  constructor(owner, accountNumber, balance = 0) {
    this.owner = owner;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.transactions = [];
  }
  
  deposit(amount) {
    if (amount <= 0) {
      return "Amount must be positive";
    }
    this.balance += amount;
    this.transactions.push({
      type: "deposit",
      amount: amount,
      date: new Date()
    });
    return `Deposited $${amount}. New balance: $${this.balance}`;
  }
  
  withdraw(amount) {
    if (amount <= 0) {
      return "Amount must be positive";
    }
    if (amount > this.balance) {
      return "Insufficient funds";
    }
    this.balance -= amount;
    this.transactions.push({
      type: "withdrawal",
      amount: amount,
      date: new Date()
    });
    return `Withdrew $${amount}. New balance: $${this.balance}`;
  }
  
  getBalance() {
    return `Current balance: $${this.balance}`;
  }
  
  getTransactionHistory() {
    return this.transactions;
  }
}

const account = new BankAccount("Alice Johnson", "ACC001", 1000);
console.log(account.getBalance());
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());
console.log("Transactions:", account.getTransactionHistory());

// ============================================
// PART 5: GETTERS AND SETTERS
// ============================================
console.log("\n--- PART 5: GETTERS AND SETTERS ---\n");

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  // Getter - access like a property
  get area() {
    return this.width * this.height;
  }
  
  get perimeter() {
    return 2 * (this.width + this.height);
  }
  
  // Setter - set like a property
  set width(value) {
    if (value <= 0) {
      console.log("Width must be positive");
      return;
    }
    this._width = value;
  }
  
  get width() {
    return this._width;
  }
  
  set height(value) {
    if (value <= 0) {
      console.log("Height must be positive");
      return;
    }
    this._height = value;
  }
  
  get height() {
    return this._height;
  }
}

const rect = new Rectangle(10, 5);
console.log("Width:", rect.width);
console.log("Height:", rect.height);
console.log("Area:", rect.area);          // Called like property, not method
console.log("Perimeter:", rect.perimeter);

// Using setters
rect.width = 15;
console.log("New area:", rect.area);

// ============================================
// PART 6: STATIC METHODS AND PROPERTIES
// ============================================
console.log("\n--- PART 6: STATIC METHODS ---\n");

class MathUtils {
  // Static method - called on class, not instance
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
  
  static square(n) {
    return n * n;
  }
  
  // Static property
  static PI = 3.14159;
}

// Call static methods on the class itself
console.log("Add:", MathUtils.add(5, 3));
console.log("Multiply:", MathUtils.multiply(4, 7));
console.log("Square:", MathUtils.square(5));
console.log("PI:", MathUtils.PI);

// Real-world example
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.id = User.generateId();
  }
  
  static userCount = 0;
  
  static generateId() {
    return ++User.userCount;
  }
  
  static compareUsers(user1, user2) {
    return user1.id === user2.id;
  }
}

const user1 = new User("alice", "alice@email.com");
const user2 = new User("bob", "bob@email.com");
const user3 = new User("charlie", "charlie@email.com");

console.log("User 1:", user1);
console.log("User 2:", user2);
console.log("User 3:", user3);
console.log("Total users:", User.userCount);

// ============================================
// PART 7: INHERITANCE (extends)
// ============================================
console.log("\n--- PART 7: INHERITANCE ---\n");

// Parent class
class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  getInfo() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
  
  start() {
    return `${this.brand} ${this.model} is starting...`;
  }
}

// Child class extends parent
class Car extends Vehicle {
  constructor(brand, model, year, doors) {
    super(brand, model, year); // Call parent constructor
    this.doors = doors;
  }
  
  // Override parent method
  start() {
    return `${this.brand} car is starting with a roar!`;
  }
  
  // New method specific to Car
  honk() {
    return "Beep beep!";
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, model, year, type) {
    super(brand, model, year);
    this.type = type; // sport, cruiser, etc.
  }
  
  start() {
    return `${this.brand} motorcycle is revving up!`;
  }
  
  wheelie() {
    return "Doing a wheelie!";
  }
}

const myCar = new Car("Toyota", "Camry", 2023, 4);
const myBike = new Motorcycle("Harley", "Sportster", 2022, "cruiser");

console.log(myCar.getInfo());      // Inherited from Vehicle
console.log(myCar.start());        // Overridden in Car
console.log(myCar.honk());         // Specific to Car

console.log(myBike.getInfo());     // Inherited from Vehicle
console.log(myBike.start());       // Overridden in Motorcycle
console.log(myBike.wheelie());     // Specific to Motorcycle

// More complex inheritance example
console.log("\n--- Complex Inheritance Example ---");

class Employee {
  constructor(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }
  
  getDetails() {
    return `Employee: ${this.name} (ID: ${this.id})`;
  }
  
  getAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, id, salary, department) {
    super(name, id, salary);
    this.department = department;
    this.team = [];
  }
  
  addTeamMember(employee) {
    this.team.push(employee);
    return `${employee.name} added to ${this.name}'s team`;
  }
  
  getDetails() {
    return `${super.getDetails()}, Manager of ${this.department}`;
  }
  
  getTeamSize() {
    return this.team.length;
  }
}

class Developer extends Employee {
  constructor(name, id, salary, programmingLanguages) {
    super(name, id, salary);
    this.programmingLanguages = programmingLanguages;
  }
  
  getDetails() {
    return `${super.getDetails()}, Developer (${this.programmingLanguages.join(", ")})`;
  }
}

const manager = new Manager("Alice", "M001", 8000, "Engineering");
const dev1 = new Developer("Bob", "D001", 6000, ["JavaScript", "Python"]);
const dev2 = new Developer("Charlie", "D002", 6500, ["Java", "C++"]);

console.log(manager.getDetails());
console.log(manager.addTeamMember(dev1));
console.log(manager.addTeamMember(dev2));
console.log("Team size:", manager.getTeamSize());
console.log(dev1.getDetails());
console.log(dev2.getDetails());

// ============================================
// PART 8: PRIVATE FIELDS (ES2022)
// ============================================
console.log("\n--- PART 8: PRIVATE FIELDS ---\n");

class BankAccount2 {
  // Private fields start with #
  #balance;
  #pin;
  
  constructor(owner, pin, initialBalance = 0) {
    this.owner = owner;
    this.#pin = pin;
    this.#balance = initialBalance;
  }
  
  // Private method
  #validatePin(pin) {
    return pin === this.#pin;
  }
  
  deposit(amount, pin) {
    if (!this.#validatePin(pin)) {
      return "Invalid PIN";
    }
    if (amount <= 0) {
      return "Amount must be positive";
    }
    this.#balance += amount;
    return `Deposited $${amount}`;
  }
  
  getBalance(pin) {
    if (!this.#validatePin(pin)) {
      return "Invalid PIN";
    }
    return `Balance: $${this.#balance}`;
  }
}

const account2 = new BankAccount2("John Doe", 1234, 1000);
console.log(account2.getBalance(1234));
console.log(account2.deposit(500, 1234));
console.log(account2.getBalance(1234));
console.log(account2.getBalance(9999)); // Wrong PIN
// console.log(account2.#balance); // Error: Private field

