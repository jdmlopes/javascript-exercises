const palindromes = function (string) {
    let cleanString = string.replaceAll(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let reverse = cleanString.split('').reverse().join('');
    return reverse === cleanString;
};

// Do not edit below this line
module.exports = palindromes;
