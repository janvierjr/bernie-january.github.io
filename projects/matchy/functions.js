/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(array, nameSearch) {
    for (var i = 0; i < array.length; i++) {
        if (array[i]["name"] === nameSearch) {
            var found = array[i];
            return found;    
         } 
    }
    return null;
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, nameSearch, replacement) {
    for (var i = 0; i < array.length; i++) {
        if (array[i]["name"] === nameSearch) {
            array[i] = replacement;
     }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, nameSearch) {
    for (var i = 0; i < array.length; i++) {
        if (array[i]["name"] === nameSearch) {
            array.splice(i, 1);
        }
    }
}   


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, newObj) {
    for (var i = 0; i < array.length; i++) {
        if (newObj.hasOwnProperty("name") 
        && newObj["name"].length > 0 === true 
        && newObj.hasOwnProperty("species") 
        && newObj["species"].length > 0 === true 
        && newObj["name"] != array[i]["name"]) {
            array.push(newObj);
        } else {
            return array;
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
