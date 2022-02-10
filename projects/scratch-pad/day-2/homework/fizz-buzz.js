// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    function fizzBuzz() {
        // YOUR CODE GOES BELOW HERE //
        // create a for loop that iterates from 1 to 100
        for (var i = 1; i <= 100; i++) {
            var skip = 0;
            // if number can be divided by 3 AND 5 is true replace with "FizzBuzz" 
            if (i % 3 == 0 && i % 5 == 0) {
               console.log("FizzBuzz");
               skip = 1;
             // else if number can be divided by ONLY 3 is true replace with "Fizz"
            } else if (i % 3 == 0) {
                console.log("Fizz");
                skip = 1;
             // else if number can be divided by ONLY 5 is true replace with "Buzz"
            } else if (i % 5 == 0) {
                console.log("Buzz");
            } 
        }
    }
    
    
   
    

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}