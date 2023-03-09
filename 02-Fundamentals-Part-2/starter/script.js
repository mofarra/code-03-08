'use strict';
// // Lecture: Activating Strict Mode

// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive`)

// // const interface = `Audio`;  // This gave an error becaused "interface" is a reserved word that may be hold a meaning in future js versions
// // const private = 534;       // Same thing here. "Private"
// // const if = 23;            // Also gives an error. Strict Mode does not want you to use "if" since that already has a different meaning
//.............................................................................................................................................................................................................................................

// Lecture: Functions

// 'use strict';

// function tester() {
//     console.log(`My Name is Jonas`);
// }

// tester();   // here we are Invoking the function / Calling the Function / Running the Function (AKA Reuse)
// tester();  // We can repeat this function as much as we want
// tester(); // Everytime this is repeated `My Name is Jonas` shows up in the console again

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice; // juice is now a value that will be later stored/ captured in a new variable. Returning it is what alllows us to do this.
// }

// // Now we will call the above function and set specific arguments to the parameters

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);  // we have now stored/captured this value in appleJuice. Makes sense since there are no oranges in the recipe.

// const appleOrangeJuice = fruitProcessor(2, 4); // We can also now change the values associated with food processor.
// console.log(appleOrangeJuice);
//.............................................................................................................................................................................................................................................

// Lecture: Function Declarations vs. Expressions

//Function Declarations (function (defined) + return + const + console.log)

// ('use strict')

// const age1 = calcAge1(1991); // In declarations, you can call them before they are defined. but may not be a good idea

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// Function Expressions (const = function (und) + return + const + console.log)

// const calcAge2 = function (birthYear) {            // We have unnamed functions when writing expressions
//     return 2037 - birthYear;                       //You can not call on these before they are defined
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);
//.............................................................................................................................................................................................................................................

//Lecture: Arrow Functions

// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, `Jonas`));
// console.log(yearsUntilRetirement(1980, `Bob`));
//.............................................................................................................................................................................................................................................

// Lecture: Functions Calling Other Functions
// ('use strict')

// function cutFruitPieces(fruit) {
//     return (fruit * 4);
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apples and
//     ${orangePieces} piece of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3))
//.............................................................................................................................................................................................................................................

// Lecture: Reviewing Functions

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthyear, firstName) {
//     const age = calcAge(birthyear)
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`)
//         return -1;
//     }

// }

// console.log(yearsUntilRetirement(1991, 'jonas'));
// console.log(yearsUntilRetirement(1970, 'mike'));
//.............................................................................................................................................................................................................................................

// Lecture: Coding Challenge #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(85, 54, 41)
// const scoreKoalas = calcAverage(23, 34, 27)

// console.log(scoreDolphins, scoreKoalas)

// function checkWinner(avgDoplhins, avgKoalas) {
//     if (avgKoalas > avgDoplhins && avgKoalas >= (avgDoplhins) / .5) {
//         console.log(`Koalas win ${avgKoalas} to ${avgDoplhins}`)
//     } else if (avgDoplhins > avgKoalas && avgDoplhins >= (avgKoalas) / .5) {
//         console.log(`Dolphins win ${avgDoplhins} to ${avgKoalas}`)
//     } else
//         console.log(`No one wins!`)
// }

// checkWinner(scoreDolphins, scoreKoalas);
//.............................................................................................................................................................................................................................................

// Lecture: Introduction to Arrays

// const friend1 = `michael`;
// const friend2 = `steven`;
// const friend3 = `Peter`;

// const friends = [`Michael`, `Steven`, `Peter`] // more common way of writing an array
// console.log(friends);

// const friends2 = new Array(`Michael`, `Steven`, `Peter`); // less common way of writing an array

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length); // to return the # of elements in the array (not 0 based)
// console.log(friends[friends.length - 1]) // to return the last element of an array. In this case it would return peter (3-1=2)

// friends[2] = `Jay`; // this is used to change the value of one of the elements in the array
// console.log(friends)

// const firstName = `Jonas`;
// const jonas = [`Jonas`, `Schmedtmann`, 2037 - 1991, `teacher`, friends];
// console.log(jonas);
// console.log(jonas.length);

// // Excerise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages)

//.............................................................................................................................................................................................................................................

// Lecture: Basic Array Operations (methods)

// const friends = [`Michael`, `Steven`, `Peter`]

// // Add elements
// const newLenght = friends.push('Jay');  // push ads jay to the ^ list
// console.log(friends);
// console.log(newLenght)

// friends.unshift(`John`);
// console.log(friends)

// // Remove elements
// friends.pop(); // removes last element of array
// const popped = friends.pop(); // weve now removed jay and peter
// console.log(popped)
// console.log(friends)

// friends.shift(); //removes first element of array
// console.log(friends)

// console.log(friends.indexOf('Steven')); // tells you the position of steven
// console.log(friends.indexOf(`Bob`)); // tells you the position of Bob

// friends.push(23);
// console.log(friends.includes('Steven')); // tells you if this value is included
// console.log(friends.includes(`Bob`)); // in this case it will return false, since Bob is not in the array
// console.log(friends.includes(23)); // In this case it is true since we added him in via push

// if (friends.includes('steven')) {
//     console.log(`You have  a friend called steven`); // one of the most used cases of the include method. Put it in notes!
// }
//.............................................................................................................................................................................................................................................

// Lecture: Coding Challenge #2

// function calcTip(bills) {
//     return bills >= 50 && bills <= 300 ? bills * .15 : bills * .2 // ternary operator
// }
// console.log(calcTip(125))
// console.log(calcTip(555))
// console.log(calcTip(44))

// const bill = [125, 555, 44]

// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]

// const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]]
// console.log(total)
//.............................................................................................................................................................................................................................................

// Lecture: Introduction to Objects

// const jonasArray = [
//     `Jonas`,
//     `Schmedtmann`,
//     2037 - 1991,
//     `teacher`,
//     [`Michael`, `Peter`, `Steven`]
// ];

// const jonas = {
//     firstName: `Jonas`,
//     lastName: `Schmedtmann`,
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: [`Michael`, `Peter`, `Steven`]
// };
//.............................................................................................................................................................................................................................................

// Lecture: Dot Vs. Bracket Notation

// const jonas = {
//     firstName: `Jonas`,
//     lastName: `Schmedtmann`,
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: [`Michael`, `Peter`, `Steven`]
// };

// console.log(jonas);

// console.log(jonas.lastName)
// console.log(jonas[`lastName`]) // both of these return the same value, but since this one has brackets, we can put an operation in it (something that produces a value).

// const nameKey = `Name`;
// console.log(jonas['first' + nameKey]) // here we have put something that returns a value
// console.log(jonas['last' + nameKey]) // this combines last with name (bcz thats what namekey is equal to) and returns schmedtmann

// const interestedIn = prompt(`What do you want to know about Jonas? Choose
// between firstName, lastName, age, job, and friends`);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log(`Wrong request!Choose
//     between firstName, lastName, age, job, and friends`)
// }

// jonas.location = `portugal`;  // adding new values to objects
// jonas['twitter'] = `@jonasschmedtman`
// console.log(jonas);

// // Challenge
// // 'Jonas has 3 friends, and his best friend is called Michael'

// const challenge = `${jonas.firstName} has ${jonas.friends.length}
// friends, and his best friend is called ${jonas.friends[0]} `;          // use dots when you can!
// console.log(challenge);
//.............................................................................................................................................................................................................................................

// Lecture: Object Methods

// const jonas = {
//     firstName: `Jonas`,
//     lastName: `Schmedtmann`,
//     birthYear: 1991,
//     job: 'teacher',
//     friends: [`Michael`, `Peter`, `Steven`],
//     hasDriversLicense: true,

//     calcAge: function () {
//         this.age = 2037 - this.birthYear // we have now created jonas.age
//         return 2037 - this.age; // instead of saying birthYear, we say this.birthYear to refer to jonas' birthyear
//     },

//     // Challenge
//     getSummary: function () {
//         return `${this.firstName} is a ${this.age} -year old ${this.job}
//     , and he ${this.hasDriversLicense = true ? `has a drivers license` :
//                 `does not have a drivers license`} `;
//         console.log(jonas.getSummary)
//     }
// }


// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.getSummary());
//.............................................................................................................................................................................................................................................

// Lecture: Coding Challenge #3

// const markMiller = {
//     firstName: `Mark`,
//     lastName: `Miller`,
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         const markBMI = this.mass / (this.height * this.height);
//         return markBMI;
//     }
// }

// const johnSmith = {
//     firstName: `John`,
//     lastName: `Miller`,
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         const johnBMI = this.mass / (this.height * this.height);
//         return johnBMI;
//     }

// }

// const markBMI = markMiller.calcBMI(); // this is what i didnt get and got from CHatGPT
// const johnBMI = johnSmith.calcBMI(); // Without these markBMI and johnBMI were UND


// const comp = (johnBMI > markBMI) ? `${johnSmith.firstName} 's BMI (${johnBMI})
// is higher than ${markMiller.firstName} 's BMI (${markBMI})!`
//     : `${markMiller.firstName}'s BMI (${markBMI})
// is higher than ${johnSmith.firstName}'s BMI (${johnBMI})!`

// console.log(comp)
//.............................................................................................................................................................................................................................................

// Lecture: Iteration: The for loop

// console.log(`Lifting weights repetition 1`);
// console.log(`Lifting weights repetition 2`);
// console.log(`Lifting weights repetition 3`);
// console.log(`Lifting weights repetition 4`);
// console.log(`Lifting weights repetition 5`);
// console.log(`Lifting weights repetition 6`); // This is what we would have to write out without the loop below
// console.log(`Lifting weights repetition 7`);
// console.log(`Lifting weights repetition 8`);
// console.log(`Lifting weights repetition 9`);
// console.log(`Lifting weights repetition 10`);

// for loop keeps running while condtion is true (<=10). When rep = 11 it will stop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }
//.............................................................................................................................................................................................................................................

// Lecture: Looping Arrays, Breaking and Continuing

// const jonas = [
//     `Jonas`,
//     `Schmedtmann`,
//     2037 - 1991,
//     `teacher`,
//     [`Michael`, `Peter`, `Steven`]
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);      // reading from jonas array

//     // types[i] = typeof jonas[i]                  // filling types array (filling with data types from jonas array)
//     types.push(typeof jonas[i])
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = []

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])
// }

// console.log(ages);

// // continue and break
// console.log(`--- CONTINUE WITH ONLY STRINGS ---`)
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== `string`) continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log(`--- BREAK WITH NUMBER ---`)
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === `number`) break;

//     console.log(jonas[i], typeof jonas[i]);
// }
//.............................................................................................................................................................................................................................................

// Lecture: Looping Backwards and Loops in Loops

// we previously have gone 0,1, ..., 4
// now we want to go 4, 3, ..., 0

// const jonas = [
//     `Jonas`,
//     `Schmedtmann`,
//     2037 - 1991,
//     `teacher`,
//     [`Michael`, `Peter`, `Steven`]
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

// // loop inside a loop

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----- Starting exercise ${exercise}`)

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting Weights Repetition ${rep}`)
//     }
// }
//.............................................................................................................................................................................................................................................

// // Lecture: The While Loop

// // for (let rep = 1; rep <= 10; rep++) {
// //     console.log(`Lifting weights repetition ${rep}`);
// // }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Loop is about to end`)
// }
//.............................................................................................................................................................................................................................................

// Coding Challenge #4

// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2
// }

// const bills = [
//     22,
//     295,
//     176,
//     440,
//     37,
//     105,
//     10,
//     1100,
//     86,
//     52,
// ]

// const tips = []

// const totals = []

// for (let i = 0; i < bills.length; i++) {
//     const grat = (calcTip(bills[i]));
//     tips.push(grat);
//     const final = (bills[i] + calcTip(bills[i]));
//     totals.push(final);
// }



