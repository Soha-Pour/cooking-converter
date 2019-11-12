var galToLiter = function(number1) {
  return number1 * 3.785;
};

var number1 = parseInt(prompt("Enter a volume in gallons:"));

var result = galToLiter(number1);
alert(number1 + " gallons" + " is equal to " + result + " liters.");
