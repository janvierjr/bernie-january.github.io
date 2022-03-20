/**
* DATATYPES:
* Different types of values in JavaScript. There are effectively two category of datatypes: primitive and complext.
* 1. Primitive or simple data types include: Number, String, Boolean, NaN, undefined, and null. Atomoic, immutable: they do not hold, collect,
* or aggregate other values. Maximum size of 8 bytes.
* 2. Complex datatypes include: object, array, and function. Aggregates others values and therefore has an indefinite size. Complex datatypes can also
* change in size.
*/ 

// 1. Number
290 // any numeric data 1, 2, 14859

// 2. String
"string data" // any character data, identified with single or double quotations

// 3. Boolean
true // true or false

// 4. Array
// indexed list-like objects identified by brackets []
let array = [1, "fifty", true]; 
array.push(5, "ten");
console.log(array); // [1, "fifty", true, 5, "ten"] arrays can change in size, characteristic of complex datatypes

// 5. Object
//store various keyed collections identifed by curly braces {}
let object = { 
    name: "bernie", 
    age: 32, 
    home: "new orleans", 
    favoriteFoods: ["shrimp", "crawfish"] 
}; 

// 6. Function
let add = function(x, y) {
    console.log(x + y);
}
console.log(add(10, 50)); // prints => 60 

// 7. undefined
undefined // no value, not-initialized variable, or a value undefined

// 8. null
null // no value, an intentionally defined as null value by a programmer

// 9. NaN
NaN // not a number though (typeof NaN; // => "number")

// 10. Infinity and -Infinity
Infinity // a global property and a numeric value representing infinity, the value is greater than any other number
Number.NEGATIVE_INFINITY // any negative value including infinity multiplied or divided by NEGATIVE_INFINITY is negative and vice versa for negative numbers
// Zero multiplied by NEGATIVE_INFINITY is NaN

// 11. Primitive vs. Complex Datatypes
// Variables themselves have a fixed memory and therefore can hold the actual value of primitive types, but only reference to complex dataytypes
var twenty = 20; // There's only every a single number value: 20, therefore primitive datatypes are atomic.

/** objects can change in size, a characteristic of complex datatypes. To work with the limited size of variables, 
variables store a reference to complex datatypes. This reference is to a memory address not the data value itself.
 */ 
object["name"] = "january";
object.pet = "hamster";
console.log(object); // object = { name: "january", age: 32,  home: "new orleans", favoriteFoods: ["shrimp", "crawfish"], pet: "hamster"}; 

// 12. Passing Primitive v.s Complex Datatypes to a function
// Primitive datatypes copy by value when assigning or passing i.e. simple datatypes are copied from one variable to the next
let x = 10;
let y = x; // the value stored in x is stored in y
y = 20; // changing the value of y has no effect on what's stored in x
console.log(x); // prints => 10

/** Complex datatypes copy by reference when assigning or passing i.e. complex datatypes are passed by reference due to 
indefinite size referencing the object above
*/
var sizeHat = { hat: "big" }; 
var sizeHatRef = sizeHat; // the value of sizeHatRef is a reference to sizeHat and they point to the same object

sizeHatRef.hat = "small";
console.log(sizeHat.hat) // prints => "small" because sizeHat points to the same object as sizeHatRef and changing the objects values changes all values.




