/*

// Values and Variables
let country = "Korea";
let continent = "Asian"
let population = 51;

console.log(country);
console.log(continent);
console.log(population);

// Data Types
let isIsland = false;
let language = 'Korean';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// Basic Operators
console.log(population / 2);

population++;
console.log(population);

console.log(population > 6);
console.log(population < 33);

const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

console.log(description1);


// Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;


// Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

// Type Conversion and Coercion
// 4
// 617
// 23
// false
// 1143

// Equality Operators: == vs. ===
const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

*/

// Logical Operators
const country = 'Korea';
const language = 'Korean';
const population = 51;
const island = false

if (language === 'English' && population < 50 && !island) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}


// The switch Statement
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}

// The Conditional (Ternary) Operator
population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);