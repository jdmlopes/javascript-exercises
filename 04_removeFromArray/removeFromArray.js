const removeFromArray = function(array = [], ...elementsToRemove) {
    resultArray = array;
    elementsToRemove.forEach((e) =>{
        resultArray = resultArray.filter((element) => element !== e);
    });
    return resultArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
