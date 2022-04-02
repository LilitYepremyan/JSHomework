let firstNumber = +prompt('Please enter first number');
let secondNumber = +prompt('Please enter second number');
let thirdNumber = +prompt('Please enter third number');

if (firstNumber < secondNumber && firstNumber < thirdNumber) {
  alert(firstNumber);
} else if (secondNumber < firstNumber && secondNumber < thirdNumber) {
  alert(secondNumber);
} else if (thirdNumber < firstNumber && thirdNumber < secondNumber) {
  alert(thirdNumber);
}
