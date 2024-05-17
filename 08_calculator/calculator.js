const add = function(...nums) {
  let sum = 0;
	nums.forEach(num => sum += num);
  return sum;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(nums) {
  let sumValue = 0;
	nums.forEach(num => sumValue += num);
  return sumValue;
};

const multiply = function(nums) {
  let product = 1;
	nums.forEach(num => product *= num);
  return product;

};

const power = function(num, power) {
	return num**power;
};

const factorial = function(num) {
  let total = 1;

	for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
