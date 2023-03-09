
// //Lecture: Values and Variables
// const country = 'America';
// const continent = 'North America';
// let population = '230';

// console.log(country);
// console.log(continent);
// console.log(population);
//..............................................................................................................................................................................................................................................

// // Lecture: Data Types
// const isIsland = (true)
// const language = 'English'

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
//..............................................................................................................................................................................................................................................

// // Lecture: let, const and var
// // (This assignment asked me to change things from prev assignments, and i edited them in those lines instead of putting thos lines in this assignment)

// // Lecture: Basic Operators
// console.log(population / 2);
// population++ // Must first increment the value of population with population++ before logging it (what we do in the next line)
// console.log(population++)
// console.log(population > 6)
// console.log(population < 33)
// const countryDescription1 = country + ' ' + "is in" + ' ' + continent + ' ' + ", and its" + ' ' + population + ' ' + "million people speak" + ' ' + language;
// console.log(countryDescription1);
//..............................................................................................................................................................................................................................................

// // Lecture: Strings and Template Literals
// const countryDescription2 = (`${country} is in ${continent}, and its ${population} million people speak ${language}`)
// console.log(countryDescription2)
//..............................................................................................................................................................................................................................................

// // Lecture: Taking Decisions: if / else Statements
// if (population > 33) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${population - 33}above average`)
// };
//..............................................................................................................................................................................................................................................

// Lecture: Type Conversion and Coercion
// console.log('9' - '5'); // 4
// console.log('19' - '13' + '17'); // 617
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57); // False
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
//..............................................................................................................................................................................................................................................

//Lecture: Equality Operators: == vs. ===
// const numNeighbors = Number(prompt`How many neighnour countries does your country have?`)

// if (numNeighbors === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbors > 1) {
//     console.log(`More than 1 border`)
// } else {
//     console.log(`No Borders`)
// }
//..............................................................................................................................................................................................................................................

// const country = 'America';
// const population = 230;
// const isIsland = true
// const language = 'English'

// if (language === `English` && population < 50 && !isIsland) {         //You must put === sign here or else it will assume youre saying pop = the rest of the line
//     console.log(`You should live in ${country}!`)
// } else {
//     console.log(`${country} does not fit your criteria!`)
// }
//..............................................................................................................................................................................................................................................

//Lecture: The switch Statement

// const language = `Arabic`

// switch (language) {
//     case (`Chinese or Mandarin`):
//         console.log(`most number of speakers`)
//         break;
//     case (`Spanish`):
//         console.log(`2nd place in number of native speaker`)
//         break;
//     case (`English`):
//         console.log(`3rd place`)
//         break;
//     case (`hindi`):
//         console.log(`Number 4`)
//         break;
//     case (`Arabic`):
//         console.log(`5th most spoken language`)
//         break;
//     default:
//         console.log(`great language too`)
// }
//..............................................................................................................................................................................................................................................

//LECTURE: The Conditional (Ternary) Operator
// const population = '230';
// const country = 'America';

// population > 33 ? console.log(`${country}'s population is above average`) :
//     console.log(`${country}'s population is below average`);

// console.log(
//     `${country}'s population is ${population > 33 ? 'above' : 'below'} average`,      // look at the difference between this one (solution) and the one i wrote
// );
//..............................................................................................................................................................................................................................................

