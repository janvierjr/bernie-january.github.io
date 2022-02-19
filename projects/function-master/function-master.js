//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object); 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var array = Object.values(object);
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] !== "string" || typeof array[i] == "boolean") {
        array.splice(i, 1);
        return array.join(" ");
      }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (typeof collection === "object" && !Array.isArray(collection)) {
        return "object";
    } 
    if (Array.isArray(collection)) {
        return "array";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.substring(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////


function capitalizeAllWords(string) {
    
    var capitalize = function(str) {
        return str[0].toUpperCase() + str.substring(1);
     }
    var wordsArray = string.split(" ").map(capitalize);
    return wordsArray.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function welcomeMessage(object) {
    if (object["name"]) {
        var string = object["name"];
        string = string[0].toUpperCase() + string.substring(1);
        var message = "Welcome " + string + "!";
        return message;
    }
}


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    if (object["name"] && object["species"]) {
      var stringName = object["name"];
        stringName = stringName[0].toUpperCase() + stringName.substring(1);
      var stringSpecies = object["species"]
        stringSpecies = stringSpecies[0].toUpperCase() + stringSpecies.substring(1);
      var message = stringName + " is a " + stringSpecies;
      return message;
    }
}


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object && object["noises"]) {
      if (Array.isArray(object["noises"])) {
        if (object["noises"].length > 0) {
          return object["noises"].join(" ");
        } 
      }
    } 
    return "there are no noises";
  }  

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.includes(word)) {
      return true;
    } else {
      return false;
    }
  }

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
  for (key in object) {
    if(Array.isArray(object[key])) {
      object[key].push(name);
      return object;
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  if (object === {}) {
     return false;
  } else {
      for (key in object) {
     } if (!('friends' in object)) {
       return false;
     } else if (object["friends"].includes(name)) {
         return true;
     } else {
       return false;
     }
  }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  var everyone = [];
  var notFriends = [];
  var current = null;

  for (var i = 0; i < array.length; i++) {
      if (name === array[i].name) {
          current = array[i];
      } else {
          everyone.push(array[i].name);
      }
  }

  if (current === null){
      return everyone;
  }

  for (var i = 0; i < everyone.length; i++) {
      if (current.friends.indexOf(everyone[i]) == -1) {
          notFriends.push(everyone[i]);
      }
  }

  return notFriends;

}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  for (var prop in object) {
    object[key] = value;
    return object;
  }
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for (var key in object) {
    for (var i = 0; i < array.length; i++) {
        if (object[array[i]] === object[key]) {
          delete object[array[i]];
      }
    }
  }
   return object;
}


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  var noDups = [];
  for (var i = 0; i < array.length; i++) {
    let duplicates = false;
    for (var j = 0; j < noDups.length; j++) {
      if (array[i] === noDups[j]) {
        duplicates = true;
      }
    }
    if (!duplicates) {
      noDups.push(array[i]);
    }
  }
  return noDups;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}