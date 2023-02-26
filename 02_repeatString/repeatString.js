const repeatString = function(text, repetitions = 1) {
    if(repetitions < 0) return "ERROR";
    let resultString = "";
    for(i = 0; i < repetitions; i++){
        resultString += text;
    }
    return resultString;

};

// Do not edit below this line
module.exports = repeatString;
