// [Algo] Increment a custom Number type
// Your mission is to write an increment function that adds 1 to the input Array<number> and returns the incremented Array<number>.

const increment = (number) => {
  const newArray = [];
  let allNineCount = 0;

  // Questionning each index beginning by the last one...
  for (let i = number.length - 1; i >= 0; i--) {
    
      // 1. If index < 9, just increment it
      if (number[i] < 9) {

        number[i]++;
        return number; 

      } else {
          // Switch '9' to '0'
          allNineCount++;
          number[i] = 0;
          newArray.push(number[i]);

          // 2. If all indexes are '=== 9'
          // Then push a new first '1' index at start of array
          if (allNineCount === number.length){
            newArray.unshift(1);
          // 3. If all indexes are '=== 9' except [0]
          // Then push a new last '0' index at the end of array
          } else if (allNineCount === number.length - 1 && number[0] !== 9){
            newArray.push(0);
          }
      }         
  }

  if (newArray.length > 0) {return newArray}

};


console.log(increment([3, 2, 0, 8, 9]));
console.log(increment([3, 2, 0, 9, 9]));
console.log(increment([4, 9, 9, 9, 9]));
console.log(increment([9, 5, 9]));
console.log(increment([9, 9]));
console.log(increment([1]));
