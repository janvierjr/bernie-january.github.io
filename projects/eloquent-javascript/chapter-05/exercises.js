// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  let flat = array.reduce(function(array, current){
    return array.concat(current);
  }, []);
  return flat;
};

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, start, end, action) {
  for (let i = value; start(i); i = end(i)) {
    action(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, predicate) {
  let notEvery = [];
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      notEvery.push("found one")
    }
  }
  if (notEvery.length > 0) {
    return false;
  } else {
    return true;
  }
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/***
 * will be reviewed in class by Alex
 */

function dominantDirection(str) { //"Hello!"
// create variable to point to str
 let newStr = str;
 // create arrays to store ltr/rtl results
 let ltr = [];
 let rtl = [];
 // iterate through string copy
 for (var i = 0; i < str.length; i++) {
   let scriptName = characterScript(newStr.charCodeAt(i));
   // if scriptName is NOT null
   if (scriptName !== null) {
     scriptName.direction === 'ltr' ? ltr.push(scriptName.name) : rtl.push(scriptName.name);
   }
 }
 if (ltr.length > rtl.length) {
   return 'ltr';
 } else {
   return 'rtl';
 }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
