// Best Practices for Writing Clean Code

function isValidUserInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new Error('Invalid input: must be a non-empty string.');
    }
    return true;
}

function processInput(input) {
    isValidUserInput(input);
    // Process the input...
    console.log('Processing input:', input);
}

// Example usage
try {
    processInput('Hello, Clean Code!');
} catch (error) {
    console.error(error.message);
}