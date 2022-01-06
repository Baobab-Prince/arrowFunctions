//Named function with multiple parameters (2)
function sum(a, b) {
  return a + b;
}

let sum2 = (a, b) => a + b; //arrow function version

//Named function with one parameter
function isPositive(number) {
  return number >= 0;
}

let isPositive2 = (number) => number >= 0;

//Named function with no parameters
function randomNumber() {
  return Math.random;
}

let randomNumber2 = () => Math.random;

//Anonymous function....a function with no name
document.addEventListener('click', function () {
  console.log('Click');
});

document.addEventListener('click', () => console.log('Click'));
