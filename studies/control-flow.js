/***
 * CONTROL FLOW
 * 
 * Control flow allows us to make decisions in our code by asking true false 
 * questions by way of conditional statements and branching, similar to a true/false flow chart. 
 * By default, JavaScript code is executed from top to bottom, line by line but 
 * can be changed via control flow.
 * Examples include: if, if-else, and else statements, switch statements, and ternary operators.
 * 
 */


// 1. If 
/* To start a conditional block of code, one can use an <if> statement. When the test-condition 
within the parentheses: () is true, the <if> code block/body within curly brackets: {} will execute. 
When the test-condition is false, the <if> code block will not execute; 
*/
var number20 = 20;
if (number20 === 20) {
    console.log(`${number20} is 20.`) // prints => "20 is 20."
};

if (number20 === 15) {
    console.log(`${number20} is 20.`) // nothing prints as 20 doesn't equal 15
};

// 2. Else-if
/* To give other options within in a conditional statement/control flow, an <else-if> can be chained 
to the <if> statement. <else-if> statements provide a selection of different test-conditions that 
can be executed if true.
*/
var number10 = 10;
if (number10 === 20) {
    console.log(`Number is 20.`) // FALSE // prints nothing
} else if (number10 < 20) {
    console.log(`Number is less than 20.`) // TRUE // prints => "Number is less than 20."
} else {
    console.log(`Number is greater than 20.`) // test-conditional not executed
};

// 3. Else
/**
 * <else> is the default end of the conditional chain and if no other condition is met, <else>
 * will execute.
 */
var number25 = 25;
if (number25 === 20) {
    console.log(`Number is 20.`) // FALSE // prints nothing
} else if (number25 < 20) {
    console.log(`Number is less than 20.`) // FALSE // prints nothing
} else {
    console.log(`Number is greater than 20.`) // Else condition executed // prints => "Number is greater than 20."
};

// 4. Switch statements
/**
 * Similar to an if-else statement, switch statements evaluate an input expression, match the expression's
 * value to a "case", and execute statements associated with that "case." A "break" statement should
 * end each "case" or the next code block will execute automatically & likely unintentially. Switch statements
 * can end with "default", which acts similar to <else> and will execute if all cases evaluate to false.
 */

var cityFrom = "New Orleans";

switch (cityFrom) {
    case "San Francisco":
        console.log("Rice-a-Roni, the SF treat");
        break;
    case "New Orleans":
        console.log("Shrimp po-boy, fully dressed"); // prints => "Shrimp po-boy, fully dressed"
        break;
    default:
        console.log("Where are you from?");
}