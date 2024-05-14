const removeFromArray = function(anArrayToRemove, ...elementsToRemove) {

    // for each element in array to remove, return the element if it does not include elements to remove.
    return anArrayToRemove.filter(element => !elementsToRemove.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
