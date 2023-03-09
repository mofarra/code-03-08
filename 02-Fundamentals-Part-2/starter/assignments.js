//Lecture: Functions

('use strict');

// function describeCountry(country, population, capitalCity) {
//     const description = (`${country} has ${population} million people and its capital
//     city is ${capitalCity} `)
//     return description;
// }

// const descriptionTurkey = describeCountry(Turkey, 82, Istanbul)
// console.log(descriptionTurkey)

// const descriptionJordan = describeCountry(Jordan, 9, Amman)
// console.log(descriptionJordan)

// const descriptionCanada = describeCountry(Canada, 37, Toronto)
// console.log(descriptionCanada)
//.............................................................................................................................................................................................................................................

// Lecture: Function Declarations vs. Expressions

// function percentageofWorld1(population) {
//     return (population / 7900) * 100
// }

// const aPop = percentageofWorld1(150);
// const bPop = percentageofWorld1(188);
// const cPop = percentageofWorld1(190);

// console.log(bPop, aPop, cPop)

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100
// }

// const dPop = percentageOfWorld2(190);
// const ePop = percentageOfWorld2(178);
// const fPop = percentageOfWorld2(180);
//.............................................................................................................................................................................................................................................

//Lecture: Arrow Functions

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const popA = percentageOfWorld3(100);
// const popB = percentageOfWorld3(150);
// const popC = percentageOfWorld3(200);

// console.log(popA, popB, popC)
//.............................................................................................................................................................................................................................................

// Lecture: Functions Calling Other Functions

// function percentageofWorld1(population) {
//     return (population / 7900) * 100
// }

// function describePopulation(country, population) {
//     const percentage = percentageofWorld1(population)
//     const description = ` '${country} has ${population} million people,
// which is about ${percentage}% of the world.'`
//     return description;
// }

// console.log(describePopulation('greece', 1000))

//.............................................................................................................................................................................................................................................

// Lecture: Introduction to Arrays

// const populations = [100, 200, 300, 400]
// console.log(populations.length === 4)

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100
// }

// const percentages = [
//     percentageOfWorld1(100),
//     percentageOfWorld1(200),
//     percentageOfWorld1(300),
//     percentageOfWorld1(400),
// ]

// console.log(percentages)
//.............................................................................................................................................................................................................................................

// Lecture: Basic Array Operations (methods)

// const neighbours = ['Norway', 'Sweden', 'Russia'];
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes('Germany')) {
//     console.log('Probably not a central European country :D');
// }
// neighbours[neighbours.indexOf('Sweden')] = 'Republic of
//  Sweden';
// console.log(neighbours);

//.............................................................................................................................................................................................................................................

// // Lecture: Introduction to Objects

// const myCountry = {
//     country: `greece`,
//     capital: `athens`,
//     language: `greek`,
//     population: 120,
//     neighbours: [`jordan`, `egypt`],
// }
//.............................................................................................................................................................................................................................................

// Lecture: Dot vs. Bracket Notation

// const myCountry = {
//     country: `greece`,
//     capital: `athens`,
//     language: `greek`,
//     population: 120,
//     neighbours: [`jordan`, `egypt`],
// }

// console.log(`${myCountry.country} has ${myCountry.population} million
//      ${myCountry.language}-speaking people,  ${myCountry.neighbours.length}
//      neighbouring countries and a capital called ${myCountry.capital}`)


// console.log(myCountry.population + 2)
// console.log(myCountry['population'] - 2)
//.............................................................................................................................................................................................................................................

// Lecture: Object Methods

// const myCountry = {
//     country: 'Finland',
//     capital: 'Helsinki',
//     language: 'finnish',
//     population: 6,
//     neighbours: ['Norway', 'Sweden', 'Russia'],

//     describe: function () {
//         console.log(

//             `${this.country} has ${this.population} million
//     ${this.language}-speaking people,
//     ${this.neighbours.length} neighbouring countries and a
//     capital called ${this.capital}.`

//         );
//     },

//     checkIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//     }
// };
//.............................................................................................................................................................................................................................................

// Lecture: Iteration: The for loop

// for (let vote = 1; vote <= 50; vote++) {
//     console.log(`Voter number ${vote} is currently voting`)
// }
//.............................................................................................................................................................................................................................................

// Lecture: Looping Arrays, Breaking and Continuing

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100
// }

// const populations = [100, 200, 300, 400]

// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i])
//     console.log(perc)
// }
//.............................................................................................................................................................................................................................................

// Lecture: Looping Backwards and Loops in Loops

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ];

// for (let i = 0; i < listOfNeighbours.length; i++)
//     for (let y = 0; y < listOfNeighbours[i].length; y++)
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//.............................................................................................................................................................................................................................................

// Lecture: The While Loop

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100
// }

// const populations = [100, 200, 300, 400]

// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages3.push(perc);
//     i++;
// }
// console.log(percentages3);