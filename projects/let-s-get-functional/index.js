// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { filter } = require('lodash');

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
  let balance = array.reduce(function(total, curr){
    let strCurr = curr.balance;
    let noDollar = Number(strCurr.replace(/[^0-9.-]+/g,""));
    let numCurr = parseFloat(noDollar);
    return total += numCurr; 
  }, 0);
  return balance / array.length;
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

var friendFirstLetterCount = function(array, customer, letter) {
  // iterate through the input array 

    for (let i = 0; i < array.length; i++) {
       // does array[i].name equals input string customer
      if (array[i].name === customer) {
        // filter through customer friends array to find if object.name first letter === letter
        var haveFriends = array[i]["friends"].filter(function(friend){
          if (friend.name.charAt(0).toLowerCase() === letter.toLowerCase()) {
            return true;
          } else {
            return false;
          }
        });
      }
    }
    return haveFriends.length;
};


/***
 * input: array of customers and name "string"
 * output: array
 */
var friendsCount = function(array, name) {
  let friendsArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty("friends")) {
      let friendsMatch = array[i]["friends"].filter(function(friend){
          if (friend.name === name) {
              friendsArr.push(array[i].name);
              return true;
          } else {
            return false;
          }
      });
    }
  }
  return friendsArr;
};

/**
 * ### 9: `topThreeTags`
 - **Objective**: Find the three most common tags among all customers' associated tags
 - **Input**: `Array`
 - **Output**: `Array`
 - **Constraints**:
 */
 var topThreeTags = function(array){
  // use reduce to get an object with key as tag and value as count
  let countObj = array.reduce(function(acc, curr) {
      // if (acc.includes(curr.tags)) {
        let tags = curr.tags;
        // iterate through tags array
        for (let i = 0; i < tags.length; i++) {
          // determine if object has prop then += 1
          if (acc.hasOwnProperty(tags[i])) {
            acc[tags[i]] += 1;
        } else {
          // else if object not prop then = 1
            acc[tags[i]] = 1;
        }
      }
      return acc;
  }, {});
   // use Object.entries to create array of arrays
      let arrTags = Object.entries(countObj);
      arrTags.sort(function(a, b){
      // use sort to a[1] - b[1]
      return b[1] - a[1];
    })
  let topThree = [ arrTags[0][0], arrTags[1][0], arrTags[2][0] ]
  return topThree;
};

/**
 * input: array of customers
 * output: new object, where key <gender> = value <# of customers w/ gender>
 * constraint: use reduce array method 
 * 
 * Steps:
 * 1. iterate through customers array to count how many are male v. female v. non-binary
 * 2. store male, female, and non-binary values in a new object as key <gender> : value <count> pairs
 * 3 return new object 
 * 
 */
 var genderCount = function(array){
  let mCount = 0;
  let fCount = 0;
  let bCount = 0;
  let obj = {};
  let gender = array.reduce(function(prev, curr) {
    if (curr.gender === "male") {
      mCount += 1;
      return Object.assign(obj, { "male": mCount });
    }
    if (curr.gender === "female") {
      fCount += 1;
      return Object.assign(obj, { "female": fCount});
    }
    if (curr.gender === "non-binary") {
      bCount += 1;
      return Object.assign(obj, { "non-binary": bCount});
    }
    return obj;
  }, {});
  return gender;
};


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
