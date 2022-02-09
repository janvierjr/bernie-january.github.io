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
    // create a for in loop that iterates from 1 to 100
    for (var i = 1; i <= 100; i++) {
        // if number can be divided by 3 AND 5 is true replace with "FizzBuzz" 
        if (i / 3 && i / 5 == true) {
            var threeFive = i;
            .replace(/threeFive/g, "FizzBuzz");
         // else if number can be divided by ONLY 5 is true replace with "Buzz"
        } else if (i / 5 == true && i / 3 != true) {
            var five = i;
            .replace(/five/g, "Buzz");
         // else if number can be divided by ONLY 3 is true replace with "Fizz"
        } else if (i / 3 == true && i / 5 != true) {
            var three = i;
            .replace(/three/g, "Fizz");
        } // print entire list of 1 to 100 with replacements
                console.log(i);
    }
    
   
    

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}