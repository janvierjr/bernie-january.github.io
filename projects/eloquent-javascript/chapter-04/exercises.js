////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  // create an ouput variable
  let result = [];
  // determine if start === end
  if (start === end) {
    return result;
  }
  // determine if step was passed into the function else no step passed in
  if (step === undefined) {
    if (start < end) {
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
      // create for loop starting at start, ending at end that is ascending
        // push the current value of i into output
    } else { // if start is greater
      for (let i = end; i <= start; i--) {
        result.push(i);
      }
      // create a for loup starting at end, ending at start that is descending
        // push the current value of i into output
    }
  } else {
    if (step < 0) {
      return result;
    }
    if (start < end) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
      // create for loop starting at start, ending at end, incrementing by step, that is ascending
        // push the current value of i into output
    } else { // if start is greater
      for (let i = end; i<= start; i -= step) {
        result.push(i);
      }
      // create a for loup starting at start, ending at end, decrementing by step, that is descending
        // push the current value of i into output
    }
  }
  return result;
}

/***
 * range(1, 4); => [1, 2, 3, 4]
 * range(4, 1); => [4, 3, 2, 1]
 * range(1, 4, 2); => [1, 3]
 * range(4, 1, 2); => [3, 1]
 * range(1, 1); => []
 * range(1, 4, -1); => []
 */

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];  
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/***
 * var arr = [1, 2, 3]
 * reverseArray(arr); => [3, 2, 1]
 * console.log(arr); => [1, 2, 3]
 * 
 * return a reversed copy of the input array
 */

function reverseArray() {

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/***
 * var arr = [1, 2, 3];
 * console.log(arr); => [3, 2, 1]
 * 
 * must mutate the original array
 */

function reverseArrayInPlace() {

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * arrayToList([10, 20, 30]);
 * =>
 * value: 10,
 * rest: {
 *    value: 20, 
 *    rest: {
 *      value: 30
 *      rest: null
 *    }  
 *   }
 * }
 */

function arrayToList(array) {
// create a variable called rest and initialize it to null
  let rest = null;
  // iterate backwards through input array
  for (let i = array.length - 1; i >= 0; i--){
    // reassign rest to an object with a value prop equal to array[i] and rest prop equal to 
    // current value of rest
    rest = { value: array[i], rest };
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * listToArray(...object)
 */

function listToArray(obj, output=[]) {
  // base
  if (obj.rest === null) {
    output.push(obj.value)
    return output;
  }
  // recursion
  output.push(obj.value);
  return listToArray(obj.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
// determine if x AND y are both NOT OBJECTS
  if (typeof x !== "object" && typeof y !== "object"){
    return x === y;
  }
  // determine if one of the values is not an object
  if (typeof x !== "object" || typeof y !== "object") {
    return false;
  }
  // use the Object.keys() method to create an array of keys for both values
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  // detrmine if the length of the arrays don't match
  if (xKeys.length !== yKeys.length) {
    return false;
  }
  // iterater through xKeys
  for(let i = 0; i < xKeys.length; i++) {
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])) {
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
