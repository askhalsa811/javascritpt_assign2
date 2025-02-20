// Utility functions for the Node.js application

// Function 1: Concatenate and print text
export function greet(firstName, lastName, schoolName) {
  console.log(`Welcome ${firstName} ${lastName} to ${schoolName}!`);
}

// Function 2: Convert Celsius to Fahrenheit
export function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function 3: Calculate the area of a circle
export function circleArea(radius) {
  return Math.PI * radius * radius;
}

// Function 4: Advanced function - Check if a number is prime
export function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
