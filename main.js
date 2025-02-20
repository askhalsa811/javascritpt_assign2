// Main entry point for the Node.js application

import { greet, celsiusToFahrenheit, circleArea, isPrime } from './utils.js';

// Call the functions from utils.js

greet("John", "Doe", "Example University");

const celsiusTemp = 25;
const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp}°F`);

const radius = 5;
const area = circleArea(radius);
console.log(`The area of a circle with radius ${radius} is ${area}`);

const primeNumber = 17;
const notPrimeNumber = 20;
console.log(`${primeNumber} is prime: ${isPrime(primeNumber)}`);
console.log(`${notPrimeNumber} is prime: ${isPrime(notPrimeNumber)}`);
