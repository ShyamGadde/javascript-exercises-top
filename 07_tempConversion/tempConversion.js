const round = num => Math.round(num * 10) / 10

const convertToCelsius = function(fahrenheit) {
  return round((fahrenheit - 32) * 5 / 9);
};

const convertToFahrenheit = function(celsius) {
  return round(celsius * 9 / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
