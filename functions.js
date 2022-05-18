////////////////////////////////////////////////////////
console.log("Activity 1:");
console.log("");
// Activity 1:
// Take this code and turn it into arrow function
// syntax:

// function factorial (n) {
//     if ((n === 0) || (n === 1 )) {
//         return 1;
//     }
//     else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

factorial = (n) => {
    if ((n === 0) || (n === 1 )) {
        return 1;
    }
    else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));
console.log("");
console.log("");

////////////////////////////////////////////////////////
console.log("Activity 2:");
console.log("");
// Activity 2:
// Edit the below snippet to include two parameters and a
// running order count updated when the function is called:

// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }
// takeOrder("pineapple");

let orderCount = 0;

const takeOrder = (firstTopping, secondTopping) => {
  console.log(`You have ordered: Pizza with:
                ${firstTopping} & ${secondTopping}`);
  orderCount++;
  console.log(`Order count = ${orderCount}`);
};
takeOrder("pineapple", "olives" );
takeOrder("beef", "ham"); 
console.log("");
console.log("");

////////////////////////////////////////////////////////
console.log("Activity 3:");
console.log("");
// Activity 3:
// Cash machine time!
// Let’s create one that:
// > Dispenses cash if your pin number is correct and your
// balance is equal to, or more than, the amount you’re
// trying to withdraw!

// Joint colaboration solution between myself and Gwyl using a class

// Gwyl's original version:

// class newAccount {
//     constructor(newPin, newBalance, newName){
//         this.pin = newPin;
//         this.balance = newBalance;
//         this.name = newName;
//     }
// }
// const me = new newAccount(1234, 5678, "me");
// const withdrawCash = (account,pin,amount) => {
//     pin = account.pin;
//     if(amount < account.balance){
//         console.log(`Thank you for your withdrawal, ${account.name}, your new balance is ${account.balance - amount}`)
//     }
//     else {
//         console.log("Sorry, please enter a valid amount");
//     }
// }
// const pinCheck = (account,pin,amount) => {
//     if(pin == account.pin){
//         withdrawCash(account,pin,amount);
//     }
//     else{
//         console.log("Sorry, you can't access this account");
//     }
// }

// pinCheck(me,1234,5000);

// My modified version:
class newAccount {
    constructor(newPin, newBalance, newName){
        this.pin = newPin;
        this.balance = newBalance;
        this.name = newName;
    }

    checkPin = (pin) => {
        if(pin !== this.pin){
            console.log("Sorry, you can't access this account");
            return false;
        }
        else{
            return true;
        }
    }
    
    withdrawCash = (amount) => {
        if(amount < this.balance){
            console.log(`Thank you for your withdrawal, ${this.name}, your new balance is ${this.balance - amount}`)
        }
        else {
            console.log("Sorry, please enter a valid amount");
        }
    }
}

const objNewAccount = new newAccount(1234, 5678, "Jeff");

if (objNewAccount.checkPin(1234)) {
    objNewAccount.withdrawCash(5000)
};