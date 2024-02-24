// Function to calculate and display day, month, and year
function calculateAndDisplayDate() {
    const dayCount = 366; 
    const referenceDate = new Date('2024-01-20');
    const targetDate = new Date(referenceDate);
    targetDate.setDate(referenceDate.getDate() + dayCount);
    const day = targetDate.getDate();
    const month = targetDate.getMonth() + 1; // Months are zero-based, so add 1
    const year = targetDate.getFullYear();
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
}
calculateAndDisplayDate();
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

var numberToCheck = 31;
var result = isEvenOrOdd(numberToCheck);
console.log("The number " + numberToCheck + " is " + result + ".");