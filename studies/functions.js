/**
 * FUNCTIONS
 * 
 * 0. Function is a type of data that allows us to encapsulate a block of code so that it may be reused when and how we want.
 * 
 * 1. Functions are lists of instructions that require 2 phases: 
 * Phase 1: Create the function: requires us to declare with the keyword <function> and define the function with a body of code.
 * Phase 2 Use/Execute the function: requires an invocation or function call.
 * 
 * 2. Functions inputs are known as parameters. Function do not require explicit parameters though it helps to name paramenters
 *  of what is needed by the function when executed. During function invocation, given arguments are passed in as a function's parameters.
 * Passed arguments include any value that fits the function parameters definition. 
 * 
 * 3-4. Named functions are hoisted to the top of their scope and can be used before they appear to be definied. Named fuctions
 * are defined by the keyword <function> (or function arrow), assigned a name/variable, and code body.
 * 
 * 5. Function can optionally take in inputs based on if parameters are defined. Functions without a return statement will default 
 * return/output: undefined but can return, with a <return> keyword followed by values, any defined values/outputs.
 * 
 * 6. Functions can access variables / values from the global scope but not from other function scoped variables / values.
 * 
 * 7. Closures maintain access to variables in a parent scope by enclosing them in function bodies.
 * 
 */


// 1. Declare and Defining a function
// this function takes in one parameter <param> and adds 2 to it
function add2(param) {
 return param + 2;
}

// 2. Invoking a function
// this invocation uses the argument of 4 and passes to the <add2()> function
console.log(add2(4)); // prints => 6


// 3. Named function
// this named function is assigned to the variable "subtract3" and is hoisted to the top of it's scope

let subtract3 = function(num) {
    let numParam = num;
    return numParam - 3;
}

console.log(subtract3(5)); // prints => 2

// 6.a Function Scope
// Functions can access variables / values from the global scope but not from other function scoped variables / values
let testStr = "hello";

let funcScope = function (str) {
    console.log(str);
}

funcScope(testStr); // this function can modify the global variable testStr // prints => hello 
funcScope(numParam); // this function cannot modify the function scoped numParam from above // prints => Reference Error: <numParam not defined>

// 6.b Function Scope Assignment
// Functions can access variables / values from the global scope and have the ability to reassign those variables
let str = "Hello";

function changeString() {
 str = "Bye";
}

console.log(str); // str variable // prints => Hello 
changeString(); // invokes the function <changeString>
console.log(str); // str variable // prints => Bye // after function invocation reassigns the global scoped variable <str>

// 7. Closure
/***
 * Closure allows for an association between the data environment(parent/global scoped variables/values) with a function that operates on that data.
 * Global variables and actions can be made "private" with closures.
 * Below, the invocation of <newFunction>, which holds the parent scoped variable of <outerVar>, is an
 * example of closure. When <newFunction> is called, it has access to <outerVar> and prints the string
 * with the <outerVar> variable within it when returned.
 * 
 */ 

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
      console.log("outer variable: " + outerVar);
      console.log("inner variable: " + innerVar);
    }
  }
  
  let newFunction = outerFunction("outside");
  newFunction(); // prints => "outer variable outside" "inner variable undefined" // nothing was passed as an argument i.e. no defined <innerVar>
  newFunction("inside"); // prints => "outer variable outside" "inner variable inside" // arguments of both variables defined, specifically <outerVar> due to closure