const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
//removes 'orange juice'
groceryList.shift();
//console.log(groceryList);
//Adds 'popcorn' to the front
groceryList.unshift('popcorn');
//console.log(groceryList);

//Big long mean code line
//slice format
//console.log(groceryList.slice(1,4));

//Hasn't changed
//console.log(groceryList);

//Checking an array for a specific item
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
