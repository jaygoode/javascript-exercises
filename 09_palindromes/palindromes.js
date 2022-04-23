const palindromes = function (str) {
    strOnlyLetters = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    stringReverse = strOnlyLetters.split("").reverse().join("").toLowerCase();
    return stringReverse == strOnlyLetters;
};

// Do not edit below this line
module.exports = palindromes;
