// https://calculator.swiftutors.com/escape-velocity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const escapeVelocityRadio = document.getElementById('escapeVelocityRadio');
const massofthePlanetRadio = document.getElementById('massofthePlanetRadio');
const radiusofthePlanetRadio = document.getElementById('radiusofthePlanetRadio');

let escapeVelocity;
const G = 6.6726e-11;
let massofthePlanet = v1;
let radiusofthePlanet = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

escapeVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(M) Mass of the Planet (kg)';
  variable2.textContent = '(R) Radius of the Planet (m)';
  massofthePlanet = v1;
  radiusofthePlanet = v2;
  result.textContent = '';
});

massofthePlanetRadio.addEventListener('click', function() {
  variable1.textContent = '(Vescape) Escape Velocity (m/s)';
  variable2.textContent = '(R) Radius of the Planet (m)';
  escapeVelocity = v1;
  radiusofthePlanet = v2;
  result.textContent = '';
});

radiusofthePlanetRadio.addEventListener('click', function() {
  variable1.textContent = '(Vescape) Escape Velocity (m/s)';
  variable2.textContent = '(M) Mass of the Planet (kg)';
  escapeVelocity = v1;
  massofthePlanet = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(escapeVelocityRadio.checked)
    result.textContent = `Escape Velocity = ${computeEscapeVelocity()} m/s`;

  else if(massofthePlanetRadio.checked)
    result.textContent = `Mass of the Planet = ${computeMassofthePlanet().toFixed(2)} kg`;

  else if(radiusofthePlanetRadio.checked)
    result.textContent = `Radius of the Planet = ${computeRadiusofthePlanet().toFixed(2)} m`;
})

// calculation

function computeEscapeVelocity() {
  return Math.sqrt((2 * G * Number(massofthePlanet.value)) / Number(radiusofthePlanet.value));
}

function computeMassofthePlanet() {
  return Math.pow(Number(escapeVelocity.value), 2) * Number(radiusofthePlanet.value) / (2 * G);
}

function computeRadiusofthePlanet() {
  return (2 * G * Number(massofthePlanet.value)) / Math.pow(Number(escapeVelocity.value), 2);
}