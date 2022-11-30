"use strict";
exports.__esModule = true;
// types for parameters of a function
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNumbers(5, 6));
// default value for parameters and return type for the function 
function printString(text, user) {
    if (user === void 0) { user = "guest"; }
    return "Hello " + user + ".Here is the message: " + text + ".";
}
printString("This is level 1 of javascript");
printString("This is level 1 of javascript", "Smriti");
var games = ["Super Mario", "Contra", "Tekken"];
games.map(function (game) { return "return ".concat(game); });
