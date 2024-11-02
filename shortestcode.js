function numberToWords(num) {
    if (num < 1 || num > 9999) {
        return "Number out of range";
    }

    // Words for numbers 1 to 19
    const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", 
                         "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

    // Words for tens like 20, 30, 40, etc.
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    // Helper function to convert numbers below 1000
    function convertBelow1000(n) {
        if (n === 0) {
            return "";
        } else if (n < 20) {
            return belowTwenty[n];
        } else if (n < 100) {
            return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + belowTwenty[n % 10] : "");
        } else {
            return belowTwenty[Math.floor(n / 100)] + " Hundred" + (n % 100 !== 0 ? " " + convertBelow1000(n % 100) : "");
        }
    }

    let result = "";

    // Handle thousands place
    if (num >= 1000) {
        result += belowTwenty[Math.floor(num / 1000)] + " Thousand";
        num %= 1000;
        if (num !== 0) {
            result += " ";
        }
    }

    // Handle hundreds, tens, and units
    result += convertBelow1000(num);

    return result.trim();
}
let someNumber = numberToWords(9999);
console.log(someNumber);

