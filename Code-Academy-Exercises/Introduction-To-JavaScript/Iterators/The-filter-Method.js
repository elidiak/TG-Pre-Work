const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
//smallNumbers is a new array. It contains the randomNumbers
//but only the ones < 250.
const smallNumbers = randomNumbers.filter(function(number) {
  if (number < 250) {
    return true;
  } else {
    return false;
  }
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(function(word) {
  if (word.length > 7 ) {
    return true;
  } else {
    return false;
  }
});
