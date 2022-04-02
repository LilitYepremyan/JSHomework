let firstNumber = +prompt('Please enter first number');
let secondNumber = +prompt('Please enter second number');
let thirdNumber = +prompt('Please enter third number');

if (secondNumber - firstNumber === thirdNumber - secondNumber) {
  alert(true);
} else {
  alert(false);
}
