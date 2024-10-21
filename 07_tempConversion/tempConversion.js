const convertToCelsius = function(temp) {
  // convert to Celcius and store in variable
  let tempInCelsius = (temp - 32) * 5/9;
  // Return value of variable as a float rounded to 1 decimal place
  return parseFloat(tempInCelsius.toFixed(1)); 

};

const convertToFahrenheit = function(temp) {
  // convert to Fahrenheit and store in variable
  let tempInFahrenheit = (temp * 9/5) + 32;
  // Return value of variable as a float rounded to 1 decimal place
  return parseFloat(tempInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
