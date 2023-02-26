const leapYears = function(year) {
    //-- A YEAR IS A LEAP YEAR IF --
    //divisible by 4
    //not divisible by 100
    //  unless divisible by 400
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
