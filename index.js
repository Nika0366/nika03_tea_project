// Helper function to calculate the square of a number
function square(num) {
    return num * num;
  }
  
  // Helper function to check if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Helper function to find the maximum of two numbers
  function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  // Usage example
  let num1 = 5;
  let num2 = 8;
  console.log(`The square of ${num1} is ${square(num1)}`);
  console.log(`Is ${num2} even? ${isEven(num2)}`);
  console.log(`The maximum of ${num1} and ${num2} is ${max(num1, num2)}`);
  