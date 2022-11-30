// types for parameters of a function
function addTwoNumbers  ( num1 : number, num2 : number) {
  
    return num1 + num2;
}

console.log(addTwoNumbers(5,6))

export {}

// default value for parameters and return type for the function 
function printString ( text : string , user : string = "guest") : string {
    return "Hello " +  user + ".Here is the message: " + text + ".";
}

printString("This is level 1 of javascript");
printString("This is level 1 of javascript" , "Smriti");

const games = ["Super Mario" , "Contra" , "Tekken"];

games.map((game) : string => `return ${game}`);