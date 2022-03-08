/**
OPERATORS

Take action on our data and values i.e. assign data to variables or compare data or include data in arithmetic operations. 
Operators are classed by what they do and how many operands they require. Unary operators work with one value, binary with two, ternary with three.

 */

 // 1. Assignment Operators
// assign values to its left operand based on the value of its right operand
var five = 5; // assigns variable five to number 5 value
five += 5; // addition assignment
console.log(five) // prints => 10 
five -= 2; // subtraction assignment
console.log(five) // prints => 8
five *= 2; // multiplication assignment
console.log(five) // prints => 16
five /= 4; // division assignment
console.log(five) // prints => 4
five %= 3; // remainder assignment
console.log(five) // prints => 1

// if a variable is an object, the left hand side of an expression may make assignments to properties of that variable.
let newObject = {};
newObject.name = "bernie";
console.log(newObject.name); // prints ==> "bernie"
console.log(newObject); // prints ==> { name: "bernie" }

 // 2. Arithmetic Operators
 // binary operators with 2 operands that function like typical math equations i.e. with order of operations.
console.log(5 + 4) // addition // prints => 9
console.log(5 - 4) // subtraction // prints => 1 
console.log(5 * 4) // multiplication // prints => 20
console.log(20 / 4) // division // prints => 5
console.log(20 % 9) // modulo or remainder // prints => 2

 // 3. Comparison Operators
// comparies two values and return boolean values of true or false
 console.log(5 > 2) // greater than // prints => true // (5 is greater than 2)
 console.log(5 < 2) // less than // prints ==> false // (5 is not less than 2)
 console.log(5 >= 5) // greater than or equal to // prints true // (5 is equal to 5)
 console.log(5 <= 10) // less than or equal to // prints true // (5 is less than 10)
 
 // strict comparison operator compares values and other properties like datatypes, preferred usage
 console.log(5 === "5") // strict comparison // prints false // (the number 5 is not strictly equal to string of "5")
 // non-strict comparison operator is less strict, allows for some notable comparison exceptions, less preferred
 console.log(5 == "5") // non-strict comparison // prints true // (the number 5 is loosely equal to string of "5")

 // 4. Logical Operators
&& // the AND operator resolves to true if both conditions are true
console.log(2 > 1 && 4 > 2) // prints ==> true // as both conditions are true

|| // the OR operator resolves to true if one or the other condition is true
console.log(2 === 2 || 2 < 1) // prints ==> true // as at least one condition resolves to true

! // is the bang operator and flips the truthiness of the value
console.log(!true) // prints ==> false // as the bang operator flips value from true to false

 // 5. Unary Operators (!, typeOf, delete)
 // unary operators is a programming operator
 // type of <operand> returns data type as a string
 console.log(typeof 37) // prints => "number"
 console.log(typeof "name") // prints => "string"
 console.log(typeof { name: "bernie", student: true}) // prints => "object"

 // bang operator (!) negates the truthiness of a value and can be used to negate the strict comparison operator
 var tenIsTen;
 if (!tenIsTen) {
     console.log("No Value")
 }
 console.log(tenIsTen); // prints => "No Value" undefined // 

 // delete operator deletes an object's property
 delete newObject.name;
 console.log(newObject); // prints ==> { } // propert of name is deleted from the object

 // 6. Ternary Operartor (a ? b : c)
 // also konw as a conditional operator, this is the only JavaScript operater that takes three operands. This operator acts as else if conditional expresson
 var age = 18;
 var legalDrinker = (age >= 21) ? "legal" : "minor";
 console.log(legalDrinker); // prints ==> "minor" // the variable age is less than 21 and resolves to the else statement of "minor"