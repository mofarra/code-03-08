/*
//Lecture: Values and Variables
let js = 'amazing';
//console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Jonas"

console.log(firstName);
console.log(firstName);
console.log(firstName);

//This is a comment js will ignore since i put slashes
let jonas_matolda = "JM";
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);
*/
//.........................................................................................................................................................

/*
// Lecture: Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);
//reminder, javascriptIsFun is the variable name! True is the value.

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jonas');

javascriptIsFun = 'Yes!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/
//...................................................................................................................................................................

/*
// Lecture: let, const and var
let age = 30;
age = 31;

const birthyear = 1991;
//birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);
*/
//..................................................................................................................................................................

/*
//Lecture: Basic Operators
// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

const firstName = 'Jonas';
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // (15)
x += 10; // (x = x + 10) = 25
x *= 4; // (x = x * 4) = 100
x++; // (x = x + 1) x++ Increases by increment of 1
x--; // (x = x - 1) x-- dencreases by increment of 1
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >,<,>=,<=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18; // this variable isFullAge is now the variable holding the boolean

console.log(now - 1991 > now - 2018) // gives us the same result we where looking for in the previous lines
*/
//..............................................................................................................................................................................................................................................

/*
// Lecture: Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)

let x, y;
x = y = 25 - 10 - 5; // showed up as x = y = 10 since the operator for addition/subtraction comes before the operator for "="
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2; // parentheses used here so the adding up of ages is executed first, and not dividing sarah by 2
console.log(ageSarah, ageJonas, averageAge);
*/
//..............................................................................................................................................................................................................................................

// Lecture: Coding Challenge #1
/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
*/
//..............................................................................................................................................................................................................................................

/*
// Lecture: Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job} !`;
console.log(jonasNew)

console.log(`just a regular string...`); // You can use backticks to write any string! (and it may be easier that way)

console.log(`string
multiple
lines`)
*/
//..............................................................................................................................................................................................................................................

/*
// Lecture: Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
}

const birthyear = 2012;

let century; // must define a variable before including it in a block, even if you leave it undefined.
if (birthyear <= 2000) {
    century = 20;
} else {
    century = 21
}
console.log(century);
*/
//..............................................................................................................................................................................................................................................

//Lecture: Coding Challenge #2
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / (markHeight * markHeight);
// const johnBMI = johnMass / (johnHeight * johnHeight);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
// } else {
//     console.log(`John's ${johnBMI} is higher than Mark's BMI ${markBMI}!`);
// }
//..............................................................................................................................................................................................................................................

// Lecture: Type Conversion and Coercion

// Type Conversion (Manually Converting)
// const inputYear = '1991';
// console.log(Number(inputYear)) // Here we just logged inputYear as a Number -  not necessary
// console.log(Number(inputYear) + 18);

// console.log(Number(`Jonas))`)); // When we executed this line, it came back as NaN, which means Not a Number
// console.log(typeof NaN);

// console.log(String(23))

// // Type Coercion (Automatic Converting)
// console.log(`I am ` + 23 + ` years old`); // JavaScript automatically logs this entire line as a string
// console.log('23' - '10' - 3); // The minus sign always performs subtraction, so this string was converted to a #. Not for + though.
// console.log('23' * '2'); // The multiply sign also only works to perform multiplication, so this shows up correctly as a #. Sam for Divide.


// let n = '1' + 1; // This = 11
// n = n - 1; // This = 10 (actually recognizes to do math this time)
// console.log(n);
//..............................................................................................................................................................................................................................................

// Lecture: Truthy and Falsy Values

// 5 falsy values: 0, '' , undefined, null, NaN --> These values are not false initially, but will cause the function to become false when converted to a boolean.

// console.log(Boolean(0)); // False
// console.log(Boolean(undefined)); // False
// console.log(Boolean('jonas')); // True
// console.log(Boolean({})); // True
// console.log(Boolean('')); // False

// const money = 100;
// if (money) {
//     console.log(`Don't spend it all`);
// } else {
//     console.log(`You should get a job!`)
// } // The result of this when const money = 0 was false, and that's because declaring money as 0 leads to false (0 is falsy)

// let height;
// if (height) {
//     console.log(`YAY! Height is defined`)
// } else {
// //     console.log(`Height is UNDEFINED`)
// } // The result of this is false because we left height undefined, which is a flasy value, so the else block was triggered
//..............................................................................................................................................................................................................................................

// Lecture: Equality Operators: == vs ===

// const age = '18';
// if (age === 18) console.log(`You just became an adult`); // If there is no "If" part to your if else statement, ypu only need 1 line

// if (age == 18) console.log(`You just became an adult`); // This line of code executes in the console while the one above as LEO recognizes 18 string = #18 while SEO does not

// const favourite = Number(prompt(`What's your favourite number?`))
// console.log(favourite);

// if (favourite === 23) {                              // this worked because we used LEO which does type coercion. After converting to SEO we set 18 script = to #18
//     console.log(`Cool! 23 is an amazing number!`)
// } else if (favourite === 7) {
//     console.log(`Cool! 7 is also a cool number`)
// } else if (favourite === 9) {
//     console.log(`Cool! 9 is also a cool number`)
// } else {
//     console.log(`Number is not 23 or 7`)            // If we put any number other then 7 =, 9 or 23, this last else block will be executed
// }

// if (favourite !== 23) console.log(`Why not 23?`);   // We put a number other then 23 before executing this, and it gave us the message
//..............................................................................................................................................................................................................................................

// Lecture: Logical Operators
// const hasDriversLicense = true; // Variable A from boolean vid
// const hasGoodVision = true; // Variable B from boolean vid

// console.log(hasDriversLicense && hasGoodVision); // outcome is false because for && only one thing needs to be false for it all to be false.
// console.log(hasDriversLicense || hasGoodVision); // outcome is true because for || only one needs to be true for it all to be true.
// console.log(!hasDriversLicense); // outcome is false bcz it is inverted (!Not)


// // if (hasDriversLicense && hasGoodVision) {
// //     console.log(`Sarah is able to drive!`)
// // } else {                                             // Ask youself, false or true?
// //     console.log(`someone else should drive`)
// // }

// const isTired = false; // Variable C
// console.log(hasDriversLicense && hasGoodVision && isTired); // Is it true or false? Ask yourself

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive!`)
// } else {                                                     // Is it true or false?
//     console.log(`someone else should drive`)
// }
//..............................................................................................................................................................................................................................................

// Lecture: Coding Challenge #3

// const dolphinsAvgScore = (97 + 112 + 101) / 3;
// const koalasAvgScore = (109 + 95 + 106) / 3;

// if (dolphinsAvgScore > 100 && dolphinsAvgScore > koalasAvgScore) {
//     console.log(`Dolphins win!`)
// } else if (dolphinsAvgScore === koalasAvgScore && dolphinsAvgScore > 100 && koalasAvgScore > 100) {
//     console.log(`There was a draw!`)
// } else if (koalasAvgScore > 100 && koalasAvgScore > dolphinsAvgScore) {
//     console.log(`Koalas Win!`)
// }
// else {
//     console.log(`No one wins!`)
//..............................................................................................................................................................................................................................................

// Lecture: The Switch Statement

// const day = `monday`;

// switch (day) {
//     case 'monday': // day = monday
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case `tuesday`:
//         console.log('Prepare theory videos');
//         break;
//     case `wednesday`:
//     case `thursday`:
//         console.log(`Write code examples`)       // result is plan course structure & go to coding meetup. Or whatever day const is set to....
//         break;
//     case `friday`:
//         console.log(`Record Videos`)
//         break;
//     case `saturday`:
//     case `sunday`:
//         console.log(`enjoy the weekend`)
//         break;
//     default:
//         console.log(`Not a valid day!`)
// }

// if (day === `monday`) {
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
// } else if (day === `tuesday`) {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {         // here we did the same thing as the above switch statement, but with an if/else statement
//     console.log(`Write code examples`)
// } else if (day === `friday`) {
//     console.log(`Record Videos`)
// } else if (day === saturday || day === sunday) {
//     console.log(`enjoy the weekend`)
// } else {
//     console.log(`Not a valid day!`)
// }
//..............................................................................................................................................................................................................................................

//Lecture: Statements and Expressions

// 3 + 4
// 1991                              //these are expressions (they produce a value)
// true && false && !false

// if (23 > 10) {
//     const str = `23 is bigger`;   // This is a statement (performs an action)
// }

// Statements do not work in template literals. You can include an if else statement in a template literal.
//..............................................................................................................................................................................................................................................

//Lecture: The Conditional (Ternary) Operator

// const age = 23;
// age >= 18 ? console.log(`I like to drink juice`) :
//     console.log(`I like to drink water`);

// const drink = age >= 18 ? `juice` : `water`;
// console.log(drink);                              // easier way to put together an if/else statement

// console.log(`I like to drink ${age >= 18 ? `juice` : `water`}`);    // you can include expressions in conditional operators

// const year = 19
// year > 10 ? console.log(`you are old`) : console.log(`you are young`)
//..............................................................................................................................................................................................................................................

// Lecture: Coding Challenge #4

// const billA = 275;
// const tip = 50 <= billA <= 300 ? .15 * billA : .20 * billA;        // You can also write <50 && < 300
// console.log(tip)

// console.log(
//     `The bill was ${billA} , the tip was ${tip}, and the total value was ${billA + tip}`
// )
//..............................................................................................................................................................................................................................................
