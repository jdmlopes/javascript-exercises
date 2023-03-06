const findTheOldest = function(array) {
    
    let oldest = array[0];
    for(i = 0; i < array.length; i++){
        let aAge = ('yearOfDeath' in array[i]) ? (array[i].yearOfDeath - array[i].yearOfBirth) : (new Date().getFullYear() - array[i].yearOfBirth);
        let oldestAge = ('yearOfDeath' in oldest) ? (oldest.yearOfDeath - oldest.yearOfBirth) : (new Date().getFullYear() - oldest.yearOfBirth);

        if(aAge > oldestAge){
            oldest = array[i];
        }
    }

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
