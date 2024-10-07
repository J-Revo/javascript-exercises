const repeatString = function(word1,num1) {
    let repeatedString = "";
    for (let x = 1; x <= num1; x++) {
        repeatedString = repeatedString.concat(word1);    
    }
    return repeatedString;
    
};

// Do not edit below this line
module.exports = repeatString;
