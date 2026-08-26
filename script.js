let celsius;

while (true) {
  let input = prompt("Enter the temperature in degrees Celsius:");

  celsius = Number(input);

  if (input !== null && input.trim() !== "" && !isNaN(celsius)) {
    break;
  }

  alert("Error: Please enter a valid number.");
}

let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9) / 5 + 32;

document.getElementById("kelvin").textContent = "°K: " + kelvin;

document.getElementById("fahrenheit").textContent = "°F: " + fahrenheit;
