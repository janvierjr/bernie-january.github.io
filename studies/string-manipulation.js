/**
 *  STRING MANIPULATION
 * 
 * 0. Strings are a datatype in JavaScript that can be manipulated by operators and methods. 
 * 
 * 1. Strings can be manipulated with the (+) operator or (+=) assignment operator to concatenate strings, variables, 
 * and/or numbers into new strings.
 *  
 * 2. The String class has a set of built-in methods that one can use to manipulate strings: i.e. .charAt(), etc. Some 
 * of these methods can also be used on arrays i.e. .length() .slice(), .concat() etc.
 */

// 1. Strings with Operators
// (+) operator // concatenate strings, variables, spaces, and/or Numbers to create a new string
let sister = "Yuli";
console.log(sister + " is my sister.") // prints => Yuli is my sister. // uses the (+) operator to concatenate 
// the variable <sister> and string <" is my sister."> to create a new string.

// (+=) operator // concatenate strings, variables, spaces, and/or Numbers to create a new string
let nephew = "Jordan";
nephew += " Johnson";

console.log(nephew); // prints => Jordan Johnson uses the (+) assignment operator to concatenate strings.

// 2. Strings with Methods
// . charAt() // accesses the character at the index provided
let myName = "Bernie";
console.log(myName.charAt(2)); //  // prints => r // the character at the second index of string myName

// .length // accessess the number of indexed values/characters within a string
console.log(myName.length); // prints => 6 / the number of characters within the string

// .slice() // manipulates a string via (startIndex, endIndex) startIndex is inclusive and endIndex is exclusive;
console.log(myName.slice(1, 4)); // prints => ern // inclusive at index of 1 and 
// exclusive at index of 4 i.e. does not include index 4. or anything after