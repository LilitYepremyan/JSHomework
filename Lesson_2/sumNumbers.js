let a = +prompt('Please enter your number');
let b = +prompt('Please enter your number');
let c = +prompt('Please enter your number');
let d = +prompt('Please enter your number');

if (a === b + c + d || b === a + c + d || c === a + b + d || d === a + b + c) {
  alert(true);
} else {
  alert(false);
}
