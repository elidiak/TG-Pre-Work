const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

//Another example of side effects, the array will change
changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

//Will remove the last element of the array
removeElement(concept);
console.log(concept);
