function sumArray(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
      return 0;
    }
  
    // Initialize sum
    let sum = 0;
  
    // Loop through the array and add each number to the sum
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      // Check if the current element is a number
      if (typeof number === 'number' && !isNaN(number)) {
        sum += number;
      }
    }
  
    return sum;
  }
  

  numbers = [1, 2, 3, 4, 5,-9,10];
  const result = sumArray(numbers);
  console.log(result);

  document.getElementById('myh1').innerHTML = result