// 1. Declare an empty array called `myArray`.

// 2. Create an array called 'fruits' that contains the following elements: 'apple', 'banana', 'cherry'.
const myArray = [];
const fruits = ["apple", "banana", "cherry"];

// 3. Access the second element of the fruits array and assign it to a variable called 'secondFruit'.
secondFruit = fruits[1];
console.log(secondFruit);

// 4. Add the element 'orange' to the end of the 'fruits' array.
fruits.push("orange");

// 5. Remove the first element from the 'fruits' array.
fruits.shift("apple");

console.log(fruits);

// 6. Find the length of the 'fruits' array and assign it to a variable called 'numFruits'.
numFruits = fruits.length;

console.log(numFruits);

// 7. Check if the element 'banana' exists in the 'fruits' array and assign the result to a variable called 'hasBanana'.
hasBanana = fruits.includes("banana");
console.log(hasBanana);
// 8. Loop through the 'fruits' array and console.log each element.
fruits.forEach((element) => {
  console.log(element);
});

// 9. Create a new array called 'numbers' that contains the numbers 1, 2, 3, 4.
numbers = [1, 2, 3, 4];

// 10 Use the 'map' method to create a new array called 'squares' that contains the squares of each number in the 'numbers' array.
const squaredNum = numbers.map((squares) => squares ** 2);
console.log(squaredNum);
