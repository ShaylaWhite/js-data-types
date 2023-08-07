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



//************//
// call a function, passing no arguments
multiply();

// Call a function, passing 2 arguments in
multiply(2, 5);

// Reference the function. What happens if we reference the function without parentheses?
multiply;
//************//


/*  **Function Declaration:**

A function declaration is a way to define a named function using the `function` keyword. 
It's typically used in the top-level scope or within blocks of code.



Advantages of Function Declarations:

Hoisted: Function declarations are hoisted to the top of their scope, 
meaning you can call the function before it's defined in the code.
Can be called before or after the declaration.


**Function Declaration:**

*/ 


greet("Alice"); // This works even before the function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}







/* 
Function Expression:
A function expression involves assigning a function to a variable. It uses a variable to store the function and can be either named or anonymous.


Advantages of Function Expressions:

More flexible: Function expressions can be used to create anonymous functions (no function name) or named functions (stored in a variable).
Better control over scope: Because function expressions are assigned to variables, they respect block scope and are not hoisted in the same way as function declarations.

*/ 

greet("Bob"); // This would cause an error because greet is not yet defined
const greet = function(name) {
    console.log("Hello, " + name + "!");
};
 






/*
Arrow functions, also known as arrow function expressions, are a concise way to write functions in JavaScript. They were introduced in ES6 (ECMAScript 2015) and provide a more compact syntax compared to traditional function expressions. Here's an overview of arrow functions:

**Syntax:**
Arrow functions are defined using the following syntax:

```javascript
const functionName = (parameters) => {
    // Function body
    return result;
};
```

If the function body consists of a single expression, you can even omit the curly braces and the `return` keyword:

```javascript
const functionName = (parameters) => expression;
```

**Advantages:**
1. **Shorter Syntax:** Arrow functions often result in shorter and more readable code, especially for simple functions.

2. **Lexical `this` Binding:** Arrow functions do not have their own `this` context. Instead, they inherit the `this` value from the surrounding code, which can be beneficial in certain situations.


**Note:** Arrow functions are not a suitable replacement for all functions, especially when complex logic or specific binding of `this` is required. Traditional function expressions are still important in those cases.

Remember that while arrow functions offer concise syntax, you should choose the appropriate function type (arrow function, function expression, or function declaration) based on your specific needs and the context in which you are using them.

*/ 


//*Examples:**//
//1. Arrow function with a single parameter:
const square = (x) => x * x;


//2. Arrow function with multiple parameters:

const add = (a, b) => a + b;




//3. Arrow function with a function body and multiple statements:

const greet = (name) => {
    console.log("Hello, " + name + "!");
};



//4. Arrow function for array manipulation:
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);