function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(4, 4);
console.log('sum:', sum);

function covertHoursToMinutes(x) {
  return x * 60;
}
var min = covertHoursToMinutes(2);
console.log('Minutes:', min);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
var Greeting = getGreeting('World');
console.log('Greeting:', Greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var result1 = addAndMultiplyBy5(10, 5);
console.log('Result:', result1);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var result2 = multiplyAndDivideBy5(35, 10);
console.log('Result:', result2);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var result3 = subtractTwoNumbers(22, 7);
console.log('Result:', result3);

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}
var result4 = getCircleCircumference(5);
console.log('Result:', result4);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var result5 = getFullName('Dennis', 'Chang');
console.log('Full Name:', result5);

function cube(number) {
  return Math.pow(number, 3);
}
var result6 = cube(5);
console.log('Result:', result6);
