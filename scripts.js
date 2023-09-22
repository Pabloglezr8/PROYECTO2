const convertirGrados = () => {
const celsius = parseFloat(document.getElementById("celsius").value);

const fahrenheit = (celsius * 9/5) + 32;

document.getElementById("fahrenheitResultado").textContent = fahrenheit.toFixed(2);

}