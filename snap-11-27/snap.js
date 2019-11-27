// Sum this array using JavaScript reduce:

// [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811]

const arrayNum = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(arrayNum.reduce(reducer));

// Brent's solution

// const arrayNum = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811];
//
// let sum = arrayNum.reduce(function(accumulator, currentValue) {
// 	return accumulator + currentValue;
// });
//
// console.log("The sum of the array is " + sum);

// Turn this array into a string using JavaScript reduce.

// ["Deflector", "power", "at", "maximum.", "Energy", "discharge", "in", "six", "seconds.", "Warp", "reactor", "core", "primary", "coolant", "failure.", "Fluctuate", "phaser", "resonance", "frequencies.", "Resistance", "is", "futile.", "Recommend", "we", "adjust", "shield", "harmonics", "to", "the", "upper", "EM", "band", "when", "proceeding.", "These", "appear", "to", "be", "some", "kind", "of", "power-wave-guide", "conduits", "which", "allow", "them", "to", "work", "collectively", "as", "they", "perform", "ship", "functions.", "Increase", "deflector", "modulation", "to", "upper", "frequency", "band."]

const arrayWords = ["Deflector", "power", "at", "maximum.", "Energy", "discharge", "in", "six", "seconds.", "Warp", "reactor", "core", "primary", "coolant", "failure.", "Fluctuate", "phaser", "resonance", "frequencies.", "Resistance", "is", "futile.", "Recommend", "we", "adjust", "shield", "harmonics", "to", "the", "upper", "EM", "band", "when", "proceeding.", "These", "appear", "to", "be", "some", "kind", "of", "power-wave-guide", "conduits", "which", "allow", "them", "to", "work", "collectively", "as", "they", "perform", "ship", "functions.", "Increase", "deflector", "modulation", "to", "upper", "frequency", "band."]

// concatenate words together while removing commas
const newArrayWords = arrayWords.join('');

// remove period in the new string
const newString = newArrayWords.split('.').join('');

console.log(newString);


// Brent's solution

const wordArray = ["Deflector", "power", "at", "maximum.", "Energy", "discharge", "in", "six", "seconds.", "Warp", "reactor", "core", "primary", "coolant", "failure.", "Fluctuate", "phaser", "resonance", "frequencies.", "Resistance", "is", "futile.", "Recommend", "we", "adjust", "shield", "harmonics", "to", "the", "upper", "EM", "band", "when", "proceeding.", "These", "appear", "to", "be", "some", "kind", "of", "power-wave-guide", "conduits", "which", "allow", "them", "to", "work", "collectively", "as", "they", "perform", "ship", "functions.", "Increase", "deflector", "modulation", "to", "upper", "frequency", "band."]

const addWords = (text, currentValue) => text + ' ' + currentValue;

console.log(wordArray.reduce(addWords));

