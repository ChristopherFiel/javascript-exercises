const removeFromArray = function (array, ...numbers) {
  return array.filter((item) => !numbers.includes(item));
};

removeFromArray([1, 2, 3, 4], 3, 4);
// Do not edit below this line
module.exports = removeFromArray;
