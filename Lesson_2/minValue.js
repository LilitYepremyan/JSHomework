let a = +prompt('Please enter your number');
let b = +prompt('Please enter your number');
let c = +prompt('Please enter your number');
let d = +prompt('Please enter your number');

if (a < b && a < c && a < d) {
  alert(a);
} else if (b < a && b < c && b < d) {
  alert(b);
} else if (c < a && c < b && c < d) {
  alert(c);
} else if (d < a && d < b && d < c) {
  alert(d);
}
