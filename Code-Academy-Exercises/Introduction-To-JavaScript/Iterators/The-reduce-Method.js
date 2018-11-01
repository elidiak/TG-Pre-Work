const newNumbers = [1, 3, 5, 7];
/*
const numbers = [1, 2, 4, 10]
const summedNumbers = numbers.reduce ( function (accumulator, currentValue) {
	return accumulator + currentValue;
});
console.log(summedNumbers) //output: 17
*/

//Same idea as sample above. Accumulator stores the value from last
//run, with currentValue receiving newNumbers[index] with index being the
//current location in the array.
const newSum = newNumbers.reduce ( function (accumulator, currentValue) {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);//This value is the second argument for the function at line 13

console.log('newSum is: ' + newSum);
