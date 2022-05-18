

////////////////////////////////////////////////////////
// Activity 1:
console.log("Activity 1:");
console.log("");
// Create a variable called age. 
let age = 20;
// Write an if statement
// that logs “Yes I can serve you” if the age is greater
// than 17
if (age > 17) {
    console.log("Yes I can serve you");
}
// and else logs “You aren’t old enough”.
else{
    console.log("You aren't old enough");
}
console.log("");
console.log("");
// Stretch
// Take your if statement and add a variable
// called country in.
// Eg. if age > 17 and country == “UK”.

let country = "US";

if (age > 17 && country == "UK") {
    console.log("Yes I can serve you");
}
else if (age <= 17) {
    console.log("Sorry You aren't old enough");
}
else if (country != "UK") {
    console.log("Sorry this is not the UK")
}
console.log("");
console.log("");
////////////////////////////////////////////////////////
// Activity 2:
console.log("Activity 2:");
console.log("");
// Create a variable for any pizza topping.
let topping = "Pepperoni";
// Create a switch statement,
switch(topping){
// if the topping is one of your    
// favourite ingredients, log to the console “These are
// important ingredients for my pizza.” If you don’t mind
// having Pepperoni for example log to the console “I don’t
// mind having ${topping} on my pizza.
    case "Pepperoni":
        console.log(`I don't mind having ${topping} on my pizza. `);
        break;
    case "Onions":
    case "Peppers":
// Finally, for any topping you don’t like log “${topping}
// should not be on a pizza.”
    case "Sausage":
        console.log(`${topping} should not be on a pizza!`);
        break;        
}
console.log("");
console.log("");
////////////////////////////////////////////////////////
// Activity 3:
console.log("Activity 3:");
console.log("");
// Create a variable called password.
let password = "TestWord";

// Check how many letters are in the password, if there are
// less than 8, log to the console that the password is too
// short. Otherwise log the password to the console.
if (password.length < 8){
    console.log("This password is too short.");
} else {
    console.log(`Your new password is ${password}`);
}
console.log("");
console.log("");
////////////////////////////////////////////////////////
// Activity 4:
console.log("Activity 4:");
console.log("");
// Create a variable called num.
let num4 = 20;
// Check if the variable is divisible by 3 or 5. If it
// is, log “This number is divisible by 3 or 5”.
if (num4 % 3 == 0){
    console.log("This number is divisble by 3.")
} 
else if (num4 % 5 == 0){
    console.log("This number is divisble by 5.");
}
// Otherwise log something else.
else {
    console.log("This number is not divisable by 3 or 5")
}

console.log("");
console.log("");
////////////////////////////////////////////////////////
// Activity 5:
console.log("Activity 5:");
console.log("");
// Create a variable called num.
let num5 = 10;

switch(true) {
// If num is divisible by 3 log “fizz” to the console,
    case num5 % 3 == 0:
		console.log("fizz")
		break;
// if it’s divisible by 5 log “buzz” to the console,  
    case num5 % 5 == 0:
		console.log("buzz")
		break;
// if it’s divisible by both 3 and 5 log
// “fizz buzz” to the console.
    case num5 % 5 == 0 && num5 % 3 == 0:
		console.log("fizz buzz")
		break;
// Otherwise log num to the console.
    default:
      	console.log("This number is not divisble by either 3 nor 5")
}
console.log("");
console.log("");
////////////////////////////////////////////////////////
// Activity 6:
console.log("Activity 6:");
console.log("");
// Create a variable called num.
let num6 = 2009;
let strNum6 = num6.toString(); 

strNum6 = strNum6.split('');
strNum6 = strNum6.reverse();
strNum6 = strNum6.join('');

// Check if the number is a palindrome (looks the
// same forward as it does backwards e.g. 1001 or
// 20202).
if (num6 == strNum6){
    console.log(`Yes ${num6} is a palindrome`)
} else {
    console.log(`No ${num6} is not a palindrome`)
}
console.log("");
console.log("");
////////////////////////////////////////////////////////
// Activity 7:
console.log("Activity 7:");
console.log("");
// Create a variable called time, 
let time = 7;
// a variable called placeOfWork
let placeOfWork = "Manchester"
// and a variable called townOfHome.
let townOfHome = "Stockport"

// Create an if statement that logs to the console where someone is at times of the day.
// E.g. if the time is 7 I’m at home,
if (time == 7){
  	console.log(`I am at home in ${townOfHome}`); 
// at 8 I’m commuting,
} else if (time == 8){
  	console.log(`I am commuting to work in ${placeOfWork}`);
// at 9 I’m at work.
} else if (time == 9){
  	console.log(`I am at work in ${placeOfWork}`)
} 
console.log("");
console.log("");
////////////////////////////////////////////////////////
// Activity 8:
console.log("Activity 8:");
console.log("");
// Take the string:
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
let strRndLetters = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// Find the index of a last vowel in the strRndLetters.
let arrVowels = ['a', 'e', 'i', 'o', 'u'];
let intHighestIndx = 0;
let strLastVowel = "";
let intLastOccur = 0;

for (let i = 0; i < arrVowels.length; i++){
    intLastOccur = strRndLetters.lastIndexOf(arrVowels[i]);
    if (intLastOccur >= intHighestIndx ){
        intHighestIndx = intLastOccur;
        strLastVowel = arrVowels[i];
    }
}
console.log(`This last vowel is: ${strLastVowel} with an index of: ${intHighestIndx}`); 
console.log("");
console.log("");
////////////////////////////////////////////////////////
// Activity 9:
console.log("Activity 9:");
console.log("");
// Create a variable called word that takes a strRndLetters.
let word = "racecar";
// Create an if statement that checks if the last letter is the same as
// the first.
let firstLetter = "";
let lastLetter = "";

firstletter = word.charAt(0);
lastLetter = word.charAt(word.length - 1);
// If it is return true,
if (lastLetter ==firstletter){
  	console.log("True")
} 
// otherwise return false.
else {
  	console.log("False")
}
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 10
console.log("Activity 10:");
console.log("");
// Create two variables called num1 and num2.
let num10 = 7;
let num20 = 7;
// Create an if statement that checks if the result of the
// sum is even. If it is return the number,
let sumTot = 0;
sumTot = num10 + num20;
if (sumTot % 2 == 0){
  	console.log(`The sum = ${sumTot} and is even.`)
} 
// otherwise return
// the numbers multiplied together.
else {
  	console.log(`${num10 * num20}`)
}
