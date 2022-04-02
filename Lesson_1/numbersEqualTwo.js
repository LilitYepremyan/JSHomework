let firstNumber = +prompt('Please enter first number');
let secondNumber = +prompt('Please enter second number');
let thirdNumber = +prompt('Please enter third number');

if (firstNumber === 2 && secondNumber === 2) {
  alert(true);
} else if (secondNumber === 2 && thirdNumber === 2) {
  alert(true);
} else if (firstNumber === 2 && thirdNumber === 2) {
  alert(true);
} else {
  alert(false);
}
