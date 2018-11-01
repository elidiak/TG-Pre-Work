const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

//Verbose syntax, looking through the array to find 'elephant', and recording
//the result in 'foundAnimal'
const foundAnimal = animals.findIndex( function(index) {
  return index === 'elephant';
});

//Strange code, but it works. If statement checks the condition.
const startsWithS = animals.findIndex( function(index) {
  if (index[0] === 's') {
    return index;
  }
});
