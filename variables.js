
////////////////////////////////////////////////////////
// Activity 1:
console.log("Activity 1:");
console.log("");
// Create a program that stores someone’s name,
// age and favourite colour and log it to the console
// in a complete sentence using Template Literals.
let name = "Matt";
let age = 31;
let favColor = "Blue";

console.log(`Hi my name is: ${name} I am:  ${age} years old. 
My favourite drink is: ${favColor}`);
console.log("");
console.log("");

// Stretch
// Update all of your variables and write out a
// new sentence underneath your original.
name = "Lee";
age = 21;
favColor = "Black";

console.log(`Hi my name is: ${name} I am:  ${age} years old. 
My favourite drink is: ${favColor}`);
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 2:
console.log("Activity 2:");
console.log("");
// Create a program that stores what you eat today
// for breakfast, lunch and dinner. 
let breakfast = "Weetabix";
let lunch = "Ham sandwich";
let dinner = "Roast Chicken";

// Log these to the console.
console.log(`Hi today I had: ${breakfast} for breakfast. 
Then I had : ${lunch} for lunch. 
Then I had : ${dinner} for dinner`);
console.log("");
console.log("");

// Stretch
// Update each of these variables to what you
// will eat tomorrow. 
Breakfast = "Cornflakes";
Lunch = "Cheese sandwich";
Dinner = "Grilled fish";

// Log these to the console.
console.log(`Tomorrow I will have: ${Breakfast} for breakfast. 
Then I will have : ${Lunch} for lunch. 
Then I will have : ${Dinner} for dinner`);
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 3:
console.log("Activity 3:");
console.log("");
// Create a program that calculates the number
// of days from today to your birth date.
// Hint
// Look for ‘Javascript Date’ on MDN.

// At age 30
const birthDate = new Date(1992, 05, 09, 23, 59, 59, 999); 

// Todays date
let today = new Date

// Number of milliseconds per day
const msPerDay = 24 * 60 * 60 * 1000; 

// Subtract birth date from today's date
let numDays = (today.getTime() - birthDate.getTime()) / msPerDay; 

// Rounding off number of days
// Divide number by 365 days will give the intial age.
// This verifies that calculatins are correct.
numDays = Math.round(numDays); 

// Print to the console
console.log(numDays); 
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 4:
console.log("Activity 4:");
console.log("");
// Create 9 variables: space1, space2... space9.
// > Assign either the value ‘x’,’o’,’ ‘, to each of
// these variables.
let space1 = "x", space2 = "o", space3 = " "
let space4 = "x", space5 = "x", space6 = " "
let space7 = "o", space8 = " ", space9 = " "

// > Insert the variables into your board using the
// ${varName} syntax and make it look like the
// displayed board.
for (let intIndex = 1; intIndex < 7; intIndex++) {
    console.log(`    |    |    `);
    switch (intIndex) {
        case 1:
            console.log(` ${space1}  | ${space2}  | ${space3}  `);
            break;
        case 2:
            console.log(`--------------`);
            break;
        case 3:
            console.log(` ${space4}  | ${space5}  | ${space6}  `);
            break;
        case 4:
            console.log(`--------------`);
            break;
        case 5:
            console.log(` ${space7}  | ${space8}  | ${space9}  `);
            break;
    }
}