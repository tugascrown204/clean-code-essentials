// Sample Code Snippets for various clean coding techniques

// Function to Calculate Factorial
function factorial(n) {
    if (n < 0) throw new Error('Negative numbers not allowed.');
    return n === 0 ? 1 : n * factorial(n - 1);
}

// Function to Filter Odd Numbers
function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}

// Example usage
console.log(factorial(5)); // 120
console.log(filterOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]