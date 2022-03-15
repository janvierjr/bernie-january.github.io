// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./bernie-january.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var maleNumber = 0;
    var males = array.filter(function(customer){
      return customer.gender === "male"; // => [ {male object}, {male object}, {male object}, ...]
    }); 
     maleNumber += males.length;
     return maleNumber;
}
  

var femaleCount = function(array) {
    var femaleNumber = 0;
    var females = array.filter(function(customer){
      return customer.gender === "female"; 
    }); 
     femaleNumber += females.length;
     return femaleNumber;
}


var oldestCustomer = function(array) {
  var oldAge = array.reduce(function (prev, curr){
    if (prev.age > curr.age) {
      return prev;
    } else {
      return curr;
    }
     
  })
  return oldAge.name;
}

var youngestCustomer = function(array) {
  var youngAge = array.reduce(function(prev, curr){
    if (prev.age < curr.age) {
      return prev;
    } else {
      return curr;
    } 
  })
  return youngAge.name;
}

var averageBalance = function(array) {
  //get all the balances from each customer and create a total balance with reduce method
  var sumBalance = array.reduce(function(total, curr){
    let strCurr = curr.balance;
    let noDollar = strCurr.replace(/[^a-zA-Z0-9,+]/, '');
    let numCurr = parseFloat(noDollar);
    total += numCurr;
    return total;
  }, 0);
  let average = (sumBalance / array.length);
  return average;
  // average = divide by # of customers
}

var firstLetterCount = function(array, letter) {
  let letterCount = 0;
  var capLet = letter.toUpperCase();
  var firstLetter = array.filter(function(customer){
    if (customer.name.charAt(0) === capLet) {
      return letterCount += 1;
    } else {
      return letterCount += 0;
    }
  });
  return letterCount;
}

var friendFirstLetterCount = function(array, customer, letter) {;
let friendCount = 0;
var capLet = letter.toUpperCase();
var haveFriends = array.filter(function(customer) {
  return customer.friends;
}).filter(function(friend){
  if (friend.name.charAt(0) === capLet) {
    return friendCount += 1;
  } else {
    return friendCount += 0;
  }
});
return friendCount;
};

var friendsCount = function(array, name) {
  var hasFriend = array.filter(function(customer) {
    return customer.friends.includes(name);
  }).map(function(customer){
    return customer.name;
  });
  return hasFriend;
}

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
