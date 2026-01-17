const convertToCelsius = function (temperature) {
  celciusTemp = (temperature - 32) * (5 / 9);
  return Math.round(celciusTemp * 10) / 10;
};

const convertToFahrenheit = function (temperature) {
  fahrenheitTemp = (temperature * 9) / 5 + 32;
  return Math.round(fahrenheitTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
