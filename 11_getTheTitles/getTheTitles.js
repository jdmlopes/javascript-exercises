const getTheTitles = function(array) {
    let titles = [];
    for(let obj of array){
        titles.push(obj.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
