const increment = (number) => {
  const newArray = [];
  // For each index beginning by the last one...
  for (let i = number.length - 1; i >= 0; i--) {
    // If index !== 9
    if (number[i] < 9) {
      number[i]++;
      return number;
    } else {
      // Index === 9, previous index !== 9
      // Index => 0, previous index++
      if (number[i - 1] !== 9) {
        number[i] = 0;
        number[i - 1]++;
        return number;
      } else {
        // Index === 9 && previous index === 9
        // Index => 0, previous index => 0, previous index++
        number[i] = 0;
        number[i - 1] = 0;
        number[i - 2]++;
        // Maybe define a loop for previous indexes..
        return number;
      }
    }
  }
};

console.log(increment([3, 2, 0, 9, 9]));
