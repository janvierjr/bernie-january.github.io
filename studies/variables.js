/** 
 * 
 * VARIABLES:
 * 
 * 0: Variables are named identifiers bound to a section of our program. 
 * To hold values in memory in a variable in JavaScript, we use the keywords: var, const, and/or let, followed
 * by a named identifier we choose to give our variable. Names should relate the nature of the value being stored.
 * 
 * Variables are either able to contain values of primitive datatypes: a string, number, or boolean or point to 
 * a location in memory where a complex datatype value is stored: an object, array, or function. 
 * 
 * Variables are important for data value retrieval. 
 * If we don't store values in containers like variables, we can never retrieve those values.
 * 
 * 1. To declare a variable, use the var keyard followed by a name we give our variable
 * 2. There are 2 phases of using variables: declaration and assignement.
 */


 // 1a. Declararation
 // At the declaration phase, a variable nameLast is declared, and by default it is undefined as it isn't assigned to any value.
var nameLast; 
console.log(nameLast); // prints => undefined

 // 1b. Assignement or iniliazation
// Assigning the undeclared variable to the a value, in this case string value, using the = operator
nameLast = "january";
console.log(nameLast); // prints => january

 // 2a. var
// the var keyword allows for unlimited reassignment within JavaScript, which can be flexible and/or problematic 
var nameFirst = "bernie";
console.log(nameFirst); // prints => bernie
nameFirst = "penny";
console.log(nameFirst) // prints => bernie

 // 2b. let
// containers whose values are reassignable but are NOT hoisted to their code block
// used inside a block, let limit's the variables scope to within that block 
let catName = "kitty";
console.log(catName); // prints => kitty
catName = "catty";
console.log(catName); // prints => catty 


 // 2c. const
// containers whose values can never change; they are block scoped i.e. pinned to code block they are declared/assigned, and not hoisted to the top of their block scope
// constants must be assigned a value and cannot be reassigned
const numberTwo = 2;
console.log(numberTwo); // prints => 2
numberTwo = 3; 
console.log(numberTwo) // prints => 2 cannot be reassigned after assigned to 2
 
 // 3. Hoisting
 // const containers are NEVER hoisted to top of block scope
console.log(variableConst); // throws error, as cannot be hoisted 

 // let containers are NOT hoisted to their code block and cannot be referenced before it's declared
console.log(variableLet); // throws error, as scoped only to if-block

 var petName = "spot";
 if (petName === "spot") {
     console.log(variableLet); // throws error, let can't be refereced before being declared
    let variableLet = "new pup";
    const variableConst = "old pup";
 };