// console.log("Hello World!")

// console.log("Hello World!".toUpperCase());

// console.log(Math.random());

// console.log(Math.random()*10);

// console.log(Math.floor(Math.random()*10));

// Activity
// Have a go at logging a grid like this to the console.

console.log("    |    |    ");
console.log("    |    |    ");
console.log("    |    |    ");
console.log("--------------");
console.log("    |    |    ");
console.log("    |    |    ");
console.log("    |    |    ");
console.log("--------------");
console.log("    |    |    ");
console.log("    |    |    ");
console.log("    |    |    ");
console.log("");
console.log("");

// If you figure it out, try researching arrays and
// loops and see if you can do it that way.
// Stretch

for (let intIndex = 1; intIndex < 10; intIndex++) {
    console.log("    |    |    ");
    if (intIndex == 3) {
        console.log("--------------");
    } 
    else if (intIndex == 6) {
        console.log("--------------");
    } 
}
console.log("");
console.log("");

// Switch Case version

for (let intIndex = 1; intIndex < 10; intIndex++) {
    console.log("    |    |    ");
    switch (intIndex) {
        case 3:
            console.log("--------------");
            break;
        case 6:
            console.log("--------------");
    }
}



