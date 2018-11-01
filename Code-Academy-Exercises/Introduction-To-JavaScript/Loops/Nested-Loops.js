// Write your code below

let bobsFollowers = ['Joe', 'Ben' , 'George','Timothy'];
let tinasFollowers = ['Joe', 'Ben', 'Alex'];
let mutualFollowers = [];

//This works, although it is inefficent.
//Faster to compare two user ids, for example
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j <tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
