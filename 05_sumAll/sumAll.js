const sumAll = function(int1, int2) {

    // create variables for sum, and the starting and ending numbers
    let intSum = 0;
    let startingNum;
    let endingNum;

    // confirm which argument is the starting number and which is ending number by size
    if (int1 > int2) {
        startingNum = int2;
        endingNum = int1;
    } else { 
        startingNum = int1;
        endingNum = int2;
    }


    //check if arguments are integers and are positive
    if ((Number.isInteger(startingNum) === true) && (Number.isInteger(endingNum) === true)
    && startingNum >= 0 && (endingNum >= 0)) {
    // if both positive integers, loop through every number in between, and inclusive of, the two arguments 
        for (i = startingNum; i <= endingNum; i++) {
    // on each iteration add the number to the sum        
            intSum = intSum + i;

        }
    // Return the sum
        return intSum
    } 
       
    //Return Error if eiether argument is not a positive integer
    else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
