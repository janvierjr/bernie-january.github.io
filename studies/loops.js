/***
 * LOOPS 
 * 
 * 0. Loops are built-in constructs that allow us to execute a block
 * of code as many times as needed. They are used for iterating through
 * collections of data and allow us to pull, update, or transform values
 * within a collection, one by one.
 * 1. There are 3 loop types: while, for, and for-in loops. 
 * 2. Loops require a start variable to initialize an index; an end condition; and an 
 * iterator to increment through the loop. Failing to specify an end condition or increment
 *  can create an infinite loop, which will crash the program.
 * 
 */

// 1. For Loops 
/* Utilized for looping through an array. For loops require, 
a start condition, let i = 0 // starts at index 0
a stop condition, i < arr.length // stops iterating at last index
and an increment. i++ // increments through index by one every loop
*/
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // prints => 1, 2, 3, 4, 5
}

// 2. While Loops & Counting forward & backwards
/* Using the keyword "while", then a condition within a parentheses and
curly brackets for a code block with an iterator, the loop will execute as 
long as the condition remains true. Failing to increment with the count variable
within the code block will create an infinite loop, which will crash the program.
*/
// counting up from 0 to 5
var count = 0;
while (count <= 5) {
    console.log(count); // prints => 0 1 2 3 4 5 
    count++;
}

// OR backward down from 5 to 0
var countNow = 5;
while (countNow >= 0) {
    console.log(countNow); // prints => 5 4 3 2 1 0 
    countNow--;
}


// 3. Looping over an array forwards and backwards
// Loops allow us to interate forward through a collection
// increment++
var strNumbers = ["one", "two", "three"];

for (let x = 0; x < strNumbers.length; x++) {
    console.log(strNumbers[x]);
}

// OR in reverse, increment -- // .length - 1 represents the last index of array
for (let y = strNumbers.length - 1; y >= 0 ; y--) {
    console.log(strNumbers[y]);
}

// 4. Looping over an Object
/**
 * Utilized for looping through an object. For-in loops iterate through
 * the keys of an object to access to keys and/or values.
 * For-in loops require,
 * a variable key/property & term "in", var key in // iterates through each key within stated object
 * the object, <objectname> // the stated object being looped over
 */

var vehicle = {
    brand: "Honda",
    make: 2020,
    model: "CRV",
    location: "New Orleans",
};

for (let key in vehicle) {
    console.log(vehicle[key]); // prints => Honda 2020 CRV New Orleans 
    // all values within object vehicle
}

