const massString = prompt("Enter the mass in KG: ");
const heightString = prompt("Enter the height (in meters): ");
const mass = parseFloat(massString);
const height = parseFloat(heightString);

if (isNaN(mass) || isNaN(height) || height <= 0) {
  console.log("Invalid input. Please enter valid numerical values for mass and height.");
} else {
  const BMI = mass / (height * height);
  console.log("Your BMI is: " + BMI.toFixed(2));
}
