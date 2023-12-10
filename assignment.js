function primeNumber(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= number ** 0.5; i++) {
        if (number % 1 === 0) {
            return false;
        }
    }

    return true;
}

const userInput = 9;
const result = primeNumber(userInput);

if (result) {
    console.log(`${userInput} is a prime number`)
} else {
    console.log(`${userInput} is not a prime number`)
}