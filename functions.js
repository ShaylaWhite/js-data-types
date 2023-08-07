/* 

Function:
A function in JavaScript is like a recipe that you can use over and over again to perform a specific task.

Purpose:
Functions help you organize your code and make it easier to manage and reuse. Instead of writing the same code multiple times, you create a function and then call (use) that function whenever you need to perform that task.

Why do we use functions?

Benefits of functions:
>>Reusability
>>DRYness
>>Naming convention (describes intent)


Input for Functions:

paramaters - the placeholders
arguments - what youve passed in 
*/ 


//Use:

//1. Defining a Function: You create a function by giving it a name and writing the steps (code) inside curly braces.
function greet() {
    console.log("Hello!");
} 


//2. Calling a Function: To use the function, you "call" it by using its name followed by parentheses.
greet(); // This will print "Hello!" to the console. 




//3. Passing Data: You can also give data (arguments) to a function and use that data inside the function.
function greetPerson(name) {
    console.log("Hello, " + name + "!");
}

greetPerson("Alice"); // This will print "Hello, Alice!" to the console.

//4. Getting Results: Functions can also return a result after they finish their task.

function add(a, b) {
    return a + b;
}

let sum = add(5, 3); // The value of sum will be 8.
