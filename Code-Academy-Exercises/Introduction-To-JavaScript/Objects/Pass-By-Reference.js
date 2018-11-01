let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

/*
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'
*/

// Write your code below
//step 1
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
};

//step 2
let remotelyDisable = obj => {
  obj.disabled = true;
}

//call the functions
greenEnergy(spaceship);
remotelyDisable(spaceship);
//console log both new values
console.log(spaceship);
