let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); 
console.log(fruits.length);
fruits.push("orange");
console.log(fruits); 
let removedFruit = fruits.pop();
console.log(fruits); 
console.log(removedFruit);  
fruits.push("grape", "mango");
console.log(fruits);
let lastFruit = fruits.pop();
console.log(fruits); 
console.log(lastFruit); 
console.log(fruits.length); 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  let appleCount = 0;

  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "apple") {
      appleCount++;
    }
  }
  
  console.log(`"apple" appears ${appleCount} time(s).`);
 
 
 
  let cart = [];
cart.push("milk", "bread", "eggs");
console.log("Cart contents:", cart); 

let removedItem = cart.pop();
console.log("Updated cart:", cart); 
console.log("Cart length:", cart.length); 

let numbers = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}

console.log("Reversed array:", reversed); 

let array1 = ["a", "b", "c", "d"];
let array2 = ["red", "green", "blue"];

if (array1.length > array2.length) {
  console.log("array1 has more items.");
} else if (array1.length < array2.length) {
  console.log("array2 has more items.");
} else {
  console.log("Both arrays have the same number of items.");
}

const array = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
  }
  
