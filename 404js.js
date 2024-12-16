function redirectBasedOnTime() {
    // Get the current hour and minute
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Convert to strings and sum the digits of hours and minutes
    const sum = getDigitSum(hours) + getDigitSum(minutes);

    // Check if the sum is even or odd
    return sum
}

// Function to calculate the sum of digits of a number
function getDigitSum(number) {
    return number
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

function link1(){
    const sum = redirectBasedOnTime();
    if (sum % 2 === 0) {
        window.location.href = "https://icyalmonde.github.io/composer/"; // Replace with your link for even sums
        } else {
        window.location.href = "https://youtu.be/dQw4w9WgXcQ"; // Replace with your link for odd sums
        }
}

function link2(){
    const sum = redirectBasedOnTime();
    if (sum % 2 === 0) {
        window.location.href = "https://youtu.be/dQw4w9WgXcQ"; // Replace with your link for even sums
        } else {
        window.location.href = "https://icyalmonde.github.io/composer/"; // Replace with your link for odd sums
        }
}