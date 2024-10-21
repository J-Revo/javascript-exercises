const add = function(num1, num2) {
  let result = (num1 + num2);
  return result;
	
};

const subtract = function(num1, num2) {
  let result = (num1 - num2);
  return result;
	
};

const sum = function(array) {
  let sumOfArray = 0;
  for (i = 0; i < array.length; i++) {
    sumOfArray = sumOfArray + array[i];
  }

  return sumOfArray;

	
};

const multiply = function(array) {
  let sumOfArray = 1;
  for (i = 0; i < array.length; i++) {
    sumOfArray = sumOfArray * array[i];
  }

  return sumOfArray;
};

const power = function(num1, num2) {
  let result = (num1 ** num2);
  return result;
	
};

const factorial = function(num1) {
  let result = num1;
  if (num1 === 0 || num1 === 1) {
    return 1;
  }  
  for (i = num1 -1; i >= 1; i--) {
    result *= i;
  }

return result;

} 

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
