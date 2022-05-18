
////////////////////////////////////////////////////////
// Activity 1:
console.log("Activity 1:");
console.log("");
// Make an array of 3 your favourite songs.
// 3 of them.
// Log them to the console.
let arrABBA = [
    "Waterloo",
    "Money Money",
    "Dancing Queen"
];

for(let intIndex = 0; intIndex < arrABBA.length; intIndex++){
    console.log(arrABBA[intIndex]);
}
console.log("");
console.log("");

// Stretch
// Can you add another two songs to the list
// using a method 
arrABBA.push("Knowing You");
arrABBA.push("Winner Takes It All");

for(let intIndex = 0; intIndex < arrABBA.length; intIndex++){
    console.log(arrABBA[intIndex]);
}
console.log("");
console.log("");
// and then remove the last one
// added?
arrABBA.pop("Winner Takes It All");

for(let intIndex = 0; intIndex < arrABBA.length; intIndex++){
    console.log(arrABBA[intIndex]);
}
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 2:
// Using MDN choose one of the following methods:
// map(), shift(), unshift(), splice(), unsplice().
// Create a program to demonstrate the use of the
// method.
// (Note: Not all methods would permanently
// update/make changes to the arrays themselves.)