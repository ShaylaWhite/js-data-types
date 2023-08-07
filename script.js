
/*

For Loops:

for (initial expression; condition; final expression) {
    Code that will be executed
} 

for loops are a fundamental looping construct in JavaScript and are used when you need to repeat a 
block of code a certain number of times or iterate through elements in an array or other iterable object.

*/


// For Loops//

let passwordGuess = '';

while (passwordGuess !== 'password') {
    passwordGuess = prompt('WE made it, guess the password:');
}

alert('Argh! You are free');

                                  // For Loops//


// Iterating over Arrays or Iterables: 
for (let i = 0; i < array.length; i++) {
    // Do something with array[i]
} 





// Repeating a Block of Code:

for (let i = 0; i < numberOfTimes; i++) {
    // Code to repeat
}

///Generating Number Sequences: for loops are often used to generate sequences of numbers.

for (let i = start; i <= end; i++) {
    // Use the value of i
}


// Working with Indices: When you need to work with both the values and indices of an array, you can use a for loop.

for (let i = 0; i < array.length; i++) {
    // Use both array[i] and i
}

// Iterating over Object Properties: You can use for...in loops to iterate over the properties of an object.

for (let key in object) {
    // Use object[key]
}