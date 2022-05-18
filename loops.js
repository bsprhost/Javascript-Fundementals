////////////////////////////////////////////////////////
// Activity 1:
console.log("Activity 1:");
console.log("");
// Create an array that lists your favourite films, up to
// 5 elements.

let arrFavFilms = [
    "Jaws",
    "Alien",
    "Terminator",
    "Godfather",
    "Enter The Dragon"
];

// Add 2 more using a method.
arrFavFilms.push("Titanic");
arrFavFilms.push("The Mountain");

// Use a loop to cycle through the array
for(let intIndex = 0; intIndex < arrFavFilms.length; intIndex++){
    console.log(arrFavFilms[intIndex]);
}
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 2:
console.log("Activity 2:");
console.log("");
// Generate 6 random numbers between
// 1-50 and log them to the console.

let arrRandNums = [];
for (int2Index = 0; int2Index < 6; int2Index++){
    intX = Math.round(Math.random()*50) + 1;
    arrRandNums.push(intX);
    console.log(arrRandNums[int2Index]);
}
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 3:
console.log("Activity 3:");
console.log("");
// If we can create a loop to put 0-9 on the screen, 
let arrOrderedNums = [];
for (int3Index = 0; int3Index < 10; int3Index++){
    arrOrderedNums.push(int3Index);
    console.log(arrOrderedNums[int3Index]);
}
console.log("");
console.log("");

// how can we count from 9-0? Create a program that does
// this.
arrOrderedNums.reverse();
for (int3Index = 0; int3Index < 10; int3Index++){
    arrOrderedNums.push(int3Index);
    console.log(arrOrderedNums[int3Index]);
}
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 4:
console.log("Activity:4");
console.log("");

// Displays 4 films stored in an array.
let arrFourFilms = [
    "Jaws",
    "Alien",
    "Ghostbusters",
    "Godfather"
];

// Use a for loop to show each film in the array.
for(let intBIndex = 0; intBIndex < arrFourFilms.length; intBIndex++){
    console.log(arrFourFilms[intBIndex]);
}
console.log("");
console.log("");

// Use an if statement to check if the 3rd film in the array is
// Ghostbusters.
// If it is, return “Yay it’s Ghostbusters”. 
if (arrFourFilms[2] == "Ghostbusters"){
    console.log(`Yay it's ${arrFourFilms[2]}`);
}
// If it isn’t return “Boo! we want Ghostbusters!""
else {
    console.log(`Boo! we want Ghostbusters`);
}
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 5:
console.log("Activity 5:");
console.log("");
// Generate a random number between 1 and 30
// six times.
for(let int5Index = 0; int5Index < 6; int5Index++){
    let intRandNum = Math.floor((Math.random() * 30) + 1); 
// For each random number generated, check if
// this number of divisible by 7 or not.
// Log out a message to the console if it is divisible
// by 7 or not.
    if(intRandNum % 7 == 0){
        console.log(`${intRandNum} is Divisible by 7.`);
    } 
    else{ 
        console.log(`${intRandNum} is not divisible by 7.`);
    }
}
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 6:
console.log("Activity 6:");
console.log("");
// Imagine you’re a programmer for a social media platform! You have
// been tasked with building a prototype for a mutual followers program.
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
// In these arrays place 4 names as strings. Make sure there are 2 names
// that are in BOTH arrays.
let bobsFollowers =[
    "Mathew",
    "Mark",
    "Luke",
    "John"
];
let hannahsFollowers =[
    "Mathew",
    "Jenny",
    "Luke",
    "Frank"
];

// > Using a nested loop iterate over both arrays and console.log out the
// matching follower.
for(int6X=0;int6X<bobsFollowers.length;int6X++){
    for(let int6J=0;int6J<hannahsFollowers.length;int6J++){
        if(bobsFollowers[int6X] == hannahsFollowers[int6J]){
            console.log(`${bobsFollowers[int6X]} likes both Hannah and Bob`);
            continue;
        }
    }
}
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 7:
// Research on do...while loop, find
// out about the difference between
// for loop, while loop and do...while
// loop. Give an example of each.
// What are the pros and cons?