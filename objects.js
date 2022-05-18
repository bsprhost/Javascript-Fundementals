
// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee", 
//         "Tea",
//         "Hot chocolate"],
//     breakfastOffer: "Free croisant with coffee",
//     luncheOffer: "Free drink with surprissinggly priced sandwich",
//     noOffer: "Sorry no offer",

//     openCafe:()=>{
//         return "come on in";
//     },
//     closeCafe:()=>{
//         return "We are closed, come back tomorrow!"
//     }
// };

// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } 
// else if (time < 1500) {
//     offer = cafe.luncheOffer;
//     console.log(cafe.luncheOffer);
// }

// const alarm = {
//     weekendAlarm: "no alarm needed",
//     weedayAlarm: "get up at 7am"
// }

// const favSongs = {
//     abba: "Waterloo",
//     raycharles: "Hit the road jack",
//     frackSinatra: "Come fly with me"
// }

////////////////////////////////////////////////////////
// Activity 1:
console.log("Activity 1:");
console.log("");
// Let’s edit our person object to include...
// A function called sayHi and when it’s called, it
// should return “Hello my name is ${this.name}”

const person = {
    name: "John",
    age: "30",
    sayHi(){
        return `Hello my name is ${this.name}`
    }
};
    
console.log(person.sayHi());
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 2:
console.log("Activity 2:");
console.log("");
// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a
// string saying [Your Pet Name] is eating/drinking.

const pet = {
    name: "bruce",
    typeOfPet: "dog",
    age: "3",
    color: "brown",
    eat(){
        return `${this.name} is eating.`
    },
    drink(){
        return `${this.name} is drinking`
    }
}

console.log(pet.eat());
console.log(pet.drink());
console.log("");
console.log("");

////////////////////////////////////////////////////////
// Activity 3:
console.log("Activity 3:");
console.log("");
// Create an object called coffeeShop with key values of:
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is ... with all
// items chosen with costs and total costs.

// Great work today folks,  some tricky challenges .
// When tackling activity 3 (objects) look at the following methods....

//  .join 
//  .toString 
//  .split 
//  .padEnd 

// Also take care when defining your food and drinks.  
// Do they need to be separate key value pairs?  
// Also think carefully about where you add your prices 

let grandTotal = 0;
let drinksSubTot = 0;
let foodSubTot = 0;
let reqDrinks = [];
let reqFood = [];

var currFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });
  
const coffeeShop = {
    branch:"Manchester",

    // Product and Pricing reference:
    // https://www.coffeefriend.co.uk/
    // blog/what-high-street-coffee-drinks-and-desserts-menu-could-look-like-in-2050/  

    drinksWithPrices:{"Latte":"£3.32",
                        "Cappuccino":"£3.18",
                        "Espresso":"£1.82",
                        "Hot Chocolate":"£3.23",
                        "Frappuccino":"£3.85",
                        "Tea":"£1.95"},

    foodWithPrices:{"Smoked Bacon Roll":"£3.68",
                    "Ham & Cheese Panini":"£4.67",
                    "Blueberry Muffin":"£2.28",
                    "All Butter Croissant":"£1.90",
                    "Carrot Cake":"£2.73",
                    "Banana Loaf":"£1.88"},

    drinksOrdered(reqDrinks){
        let drinks = Object.keys(this.drinksWithPrices); 
        let drinkValues = Object.values(this.drinksWithPrices);
        let drinkEntries = Object.entries(this.drinksWithPrices);
        let orderedDrinks = "";
        let strDrinkValue = "";

        for(i=0;i<drinks.length;i++){
            for(j=0;j<reqDrinks.length;j++){
                if (drinks[i] === reqDrinks[j]){
                    reqDrinks[j] = `${drinkEntries[j]} `;
                    strDrinkValue = drinkValues[j].replace("£","");
                    drinksSubTot = drinksSubTot + Number(strDrinkValue);
                }
            }
        }
        orderedDrinks = `For drinks you've ordered:\n
        ${reqDrinks}\n
        Drinks Sub-Total: ${currFormatter.format(drinksSubTot)}\n`;

        orderedDrinks = orderedDrinks.split(" ,").join(" | ");
        orderedDrinks = orderedDrinks.split(",").join("-");
        return orderedDrinks;
    },

    foodOrdered(reqFood){
        let food = Object.keys(this.foodWithPrices); 
        let foodValues = Object.values(this.foodWithPrices);
        let foodEntries = Object.entries(this.foodWithPrices);
        let orderedFood = "";
        let strFoodValue = "";

        for(i=0;i<food.length;i++){
            for(j=0;j<reqFood.length;j++){
                if (food[i] === reqFood[j]){
                    reqFood[j] = `${foodEntries[j]} `;
                    strFoodValue = foodValues[j].replace("£","");
                    foodSubTot = foodSubTot + Number(strFoodValue);
                }
            }
        }
        orderedFood = `For food you've ordered:\n
        ${reqFood}\n
        Food Sub-Total: ${currFormatter.format(foodSubTot)}`;

        orderedFood = orderedFood.split(" ,").join(" | ");
        orderedFood = orderedFood.split(",").join("-");
        return orderedFood;
    }
}

reqDrinks.push("Latte");
reqDrinks.push("Espresso");
reqDrinks.push("Frappuccino");
reqFood.push("Ham & Cheese Panini");
reqFood.push("All Butter Croissant");
reqFood.push("Banana Loaf");

console.log(coffeeShop.drinksOrdered(reqDrinks));
console.log(coffeeShop.foodOrdered(reqFood));
console.log("");
grandTotal = drinksSubTot + foodSubTot;
drinksSubTot = currFormatter.format(drinksSubTot);
foodSubTot = currFormatter.format(foodSubTot);
grandTotal = currFormatter.format(grandTotal);

console.log(`Your grandTotal will be:`);
console.log(`Drinks Sub-Total of:       ${drinksSubTot}.`);
console.log(`Plus Food Sub-Total of:    ${foodSubTot}.`);
console.log("====================================");
console.log(`Which will altogether be:  ${grandTotal}.`);
console.log("");
console.log("");


// // Objects: Activity 3-------- Tracy's Solution -----------------------------

// //Declaring variables
// const coffeeShop = {
//     branch: "Manchester",
  
//     drinks: {
//       americano: 2,
//       latte: 2.5,
//       espresso: 1.5,
//       capuccino: 3,
//     },
  
//     food: {
//       cookie: 1.5,
//       muffin: 2,
//       sandwich: 3,
//     },
  
//     //Function which creates a new array, using the ... spread operator, and functionality to connect the drinks order and cost.
//     drinksOrdered(...drinks) {
//       let cost = 0;
//       const drinksStr = drinks.join(" & ");
//       drinks.forEach((drink) => (cost += this.drinks[drink]));
//       cost = cost.toString().split(".");
//       cost[1] = cost[1].padEnd(2, "0");
//       cost = cost.join(".");
  
//       return this.displayOrder(drinksStr, cost);
//     },
//    //function which again creates a new array and functionality to connect the order and cost.
//     foodOrdered(...food) {
//       let cost = 0;
//       const foodStr = food.join(" & ");
  
//       food.forEach((item) => (cost += this.food[item]));
  
//       cost = cost.toString().split(".");
//       cost[1] = cost[1].padEnd(2, "0");
//       cost = cost.join(".");
  
//       return this.displayOrder(foodStr, cost);
//     },
  
//     //function to create a string to inject the variables using template literals. 
//     displayOrder(order, cost) {
//       return console.log(
//         `Your ${order} will be with you shortly, the total is £${cost}.`
//       );
//     },
//   };
  
//   coffeeShop.drinksOrdered("capuccino", "espresso");
//   coffeeShop.foodOrdered("cookie", "muffin");
