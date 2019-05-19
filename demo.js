'use strict';

// variables - we store date in variables 
// data types - this are the diff kinds of things we can put in a variables
// flow control - how we make decisions 
// functions - ways to make repeatable chunks of code 

// in 102 
// variables 
// half the data types
// half of flow control 
// functions 

// variables 
var instructorName; 

// 'hello world' is a string - js knows because of the '' (quotes)
console.log('hello world');
console.log('instructorName');

instructorName = 'Stephanie';
console.log(instructorName);


var stephanieCatsName = 'Amelia';

var stephaniesAge = 41;

var sum = 2 + 2
var subtract = 3 - 1
var multiply = 2 * 2
var divide = 9 / 3

var usersAge = prompt("How old are you today?");
console.log(userAge);
// put the script where you want it to show up
document.write('<h2>You are ' + userAge + ' old today!</h2>');
document.write('<p>' + userAge + '</p>');


var usersAge = prompt("How old are you today?");
console.log(userAge);

if (userAge === '36'|| userAge === '37') {
    document.write('<h2>You are ' + userAge + ' old today!</h2>');
} else {
    document.write('<h2> You are lying about your age. You are not the chosen one. </h2>')
}