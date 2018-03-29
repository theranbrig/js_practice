// Define a function named sum that takes two arguments
//    a (number)
//    b (number)
//
// Return the sum of these two arguments
const sum = (a, b) => a + b;

console.log(sum(3, 4));

// Define a function named product that takes two arguments
//    a (number)
//    b (number)
//
// Return the product of these two arguments
const product = (a, b) => a * b;

console.log(product(3, 4));

// Define a function named sumAndProduct that takes three arguments
//    x (number)
//    y (number)
//    z (number)
//
// Return the sum of the first two arguments multiplied by the third argument.
// For example, given 1, 2, and 5, then return 15.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping
const sumAndProduct = (x, y, z) => (x + y) * z;

console.log(sumAndProduct(1, 2, 5));

// Define a function named roundUp that takes one argument
//    decimal (number)
//
// Return the argument rounded up to the nearest integer
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
const roundUp = decimal => Math.ceil(decimal);

console.log(roundUp(2.345));

// Define a function named toFahrenheit that takes one argument
//    celsius (number)
//
// Return the argument converted to Fahrenheit rounded to the nearest integer.
// Use Google to find the formula.

const toFahrenheit = celsius => celsius * 1.8 + 32;

console.log(toFahrenheit(19));

// Define a function named areaOfCircle that takes one argument
//    radius (number)
//
// Return the area of a circle using that argument. Use Google to find the
// formula.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

const areaOfCircle = radius => Math.pow(radius, 2) * Math.PI;

console.log(areaOfCircle(3));

// Define a function named areaOfRing that takes two arguments
//    outerRadius (number)
//    innerRadius (number)
//
// Return the area of a circular ring using these arguments. Use Google to find
// the formula.

const areaOfRing = (outerRadius, innerRadius) => {
    let outerArea = Math.pow(outerRadius, 2) * Math.PI;
    let innerArea = Math.pow(innerRadius, 2) * Math.PI;
    return outerArea - innerArea;
};

console.log(areaOfRing(3, 2));

// Define a function named greet that takes 2 arguments
//    firstName (string)
//    lastName (string)
//
// Return a string in the format 'Hello, Kelly Rippa!' using these arguments
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_strings

const greet = (firstName, lastName) => `Hello ${firstName} ${lastName}!`;

console.log(greet("Theran", "Brigowatz"));
// Define a function named toSentence that takes four arguments
//    word1 (string)
//    word2 (string)
//    word3 (string)
//    oxfordComma (boolean)
//
// If oxfordComma is true,
//    Return a string in the format "word1, word2, and word3."
// If oxfordComma is false,
//    Return a string in the format "word1, word2 and word3."
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators

const oxfordComma = (word1, word2, word3, oxfordComma) => {
    if (oxfordComma === true) {
        return `${word1}, ${word2}, and ${word3}`;
    } else {
        return `${word1}, ${word2} and ${word3}`;
    }
};

console.log(oxfordComma("cows", "chickens", "sheep", true));

// Define a function named toRoman that takes one argument
//    arabic (number)
//
// If the argument is less than 1
//    Return null
// If the argument is greater than 10
//    Return null
// Otherwise
//    Return the argument converted to a roman numeral string
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_statement

const toRoman = arabic => {
    if (arabic < 1) {
        return null;
    } else if (arabic > 10) {
        return null;
    } else {
        switch (arabic) {
            case 1:
                return "I";
                break;
            case 2:
                return "II";
                break;
            case 3:
                return "III";
                break;
            case 4:
                return "IV";
                break;
            case 5:
                return "V";
                break;
            case 6:
                return "VI";
                break;
            case 7:
                return "VII";
                break;
            case 8:
                return "VIII";
                break;
            case 9:
                return "IX";
                break;
            case 10:
                return "X";
                break;
            default:
                break;
        }
    }
};

console.log(toRoman(5));

// Define a function toDolla that takes one argument
//    amount (number)
//
// Return the argument converted to a dollar currency string. For example, given
// 10, then return '$10.00'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

const toDolla = amount => `$${amount.toFixed(2)}`;

console.log(toDolla(8.543223));

// Define a function named percentage that takes two arguments
//    numerator (number)
//    denominator (number)
//
// Return the percentage of the first argument divided by the second. For
// example, given 1 and 4, then return '25.0%'.

const percentage = (numerator, denominator) => {
    var percent = (numerator / denominator * 100).toFixed(1);
    return `${percent}%`;
};

console.log(percentage(7, 23));

// Define a function named isStrictlyEqual that takes two arguments
//    value1 (anything)
//    value2 (anything)
//
// If the two arguments are both equal and have the same type
//    Return true
// Otherwise
//    Return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using
//
// See https://dorey.github.io/JavaScript-Equality-Table/

const isStrictlyEqual = (value1, value2) => {
    if (value1 === value2) {
        return true;
    } else {
        return false;
    }
};

console.log(isStrictlyEqual("5", 5));

// Define a function named isLooselyEqual that takes two arguments
//    value1 (anything)
//    value2 (anything)
//
// If the two arguments are both equal regardless of type
//    Return true
// Otherwise
//    Return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using

const isLooselyEqual = (value1, value2) => {
    if (value1 == value2) {
        return true;
    } else {
        return false;
    }
};

console.log(isLooselyEqual("5", 5));

// Define a function named remainder that takes two arguments
//    numerator (number)
//    denominator (number)
//
// Return the remainder of the first argument divided by the second. For
// example, given 4 and 3, then return 1.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

const remainder = (numerator, denominator) => numerator % denominator;

console.log(remainder(12, 7));

// Define a function named isEven that takes one argument
//    integer (number)
//
// If the number is even
//    Return true
// Otherwise
//    Return false
//
// Hint: What number will give you a remainder of 0 if the argument is even?

const isEven = integer => {
    if (integer % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isEven(10));

// Define a function named isOdd that takes one argument
//    integer (number)
//
// If the number is odd
//    Return true
// Otherwise
//    Return false

const isOdd = integer => {
    if (integer % 2 !== 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isOdd(10));

// Define a function named isVowel that takes one argument
//    letter (string)
//
// If the letter is a vowel
//    Return true
// Otherwise
//    Return false
//
// Treat 'y' as a consonant.

const isVowel = letter => {
    var checkLetter = letter.toUpperCase();
    switch (checkLetter) {
        case "A":
            return true;
            break;
        case "E":
            return true;
            break;
        case "I":
            return true;
            break;
        case "O":
            return true;
            break;
        case "U":
            return true;
            break;
        default:
            return false;
            break;
    }
};

console.log(isVowel("a"));

// Define a function named largestOfThree which takes three arguments
//    value1 (number)
//    value2 (number)
//    value3 (number)
//
// Return the largest argument by value
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

const largestOfThree = (value1, value2, value3) => {
    if (value1 > value2 && value1 > value3) {
        return value1;
    } else if (value2 > value1 && value2 > value3) {
        return value2;
    } else {
        return value3;
    }
};

console.log(largestOfThree(33000, 400, 5000));

// Define a function named longestOfThree which takes three arguments
//    value1 (string)
//    value2 (string)
//    value3 (string)
//
// Return the longest argument by length
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

const longestOfThree = (value1, value2, value3) => {
    if (value1.length > value2.length && value1.length > value3.length) {
        return value1;
    } else if (value2.length > value1.length && value2.length > value3.length) {
        return value2;
    } else {
        return value3;
    }
};

console.log(longestOfThree("cat", "kitty", "kitten"));

// Define a function named iceCreamPosition that takes two arguments
//    pieTemperature (string)
//    iceCreamFlavor (string)
//
// If iceCreamFlavor is 'cardamom'
//    Return 'not at all' immediately
// Otherwise
//    If pieTemperature is 'cold'
//      Return 'on top'
//    If pieTemperature is 'warm'
//      Return 'on the side'
// Otherwise
//    Return 'up to you'

const iceCreamPosition = (pieTemperature, iceCreamFlavor) => {
    if (iceCreamFlavor === "cardamom") {
        return "not at all";
    } else if (pieTemperature === "cold") {
        return "on top";
    } else if (pieTemperature === "warm") {
        return "on the side";
    } else {
        return "up to you";
    }
};

console.log(iceCreamPosition("warm", "chocolate"));

// Define a function named isLeapYear that takes one argument
//    year (number)
//
// If the argument is a leap year
//    Return true
// Otherwise
//    Return false
//
// See: https://en.wikipedia.org/wiki/Leap_year#Algorithm

const isLeapYear = year => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isLeapYear(1400));

// Define a function named shout that takes one argument
//    message (string)
//
// Return the same argument but all in uppercase letters. For example, given
// 'Shut the front door', then return 'SHUT THE FRONT DOOR'
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const shout = message => message.toUpperCase();

console.log(shout("shut the front door"));

// Define a function named whisper that takes one argument
//    message (string)
//
// Return the same argument but all in lowercase letters and prefixed by
// 'shhh... '. For example, given 'GOLF TIME', then return "shhh... golf time"
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const whisper = message => `shh... ${message.toLowerCase()}`;

console.log(whisper("GOLF TIME"));

// Define a function named stopAt that takes two arguments
//   source (string)
//   stop (string)
//
// Return the source all the way up to the position where stop begins. For
// example, given 'how now brown cow' and 'brown', then return 'how now'.
//
// Hint: This will require a combination of 3 different steps
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

const stopAt = (source, stop) => {
    let stringIndex = source.indexOf(stop);
    let newString = source.substring(0, stringIndex);
    let stringTrim = newString.trim();
    return stringTrim;
};

console.log(stopAt("how now brown cow", "brown"));

// Define a function named capitalize that takes one argument
//    message (string)
//
// Return the argument with the first letter capitalized. For example, given
// 'oh, you', then return 'Oh, you'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

const capitalize = message => {
    let first = message[0].toUpperCase();
    let length = message.length;
    let newString = first + message.slice(1, length);
    return newString;
};

console.log(capitalize("oh, you"));

// Define a function named leftPad5 that takes one argument
//    word (string)
//
// If the argument's length is less than 5
//    Return the argument but prefixed with spaces until it's 5 characters long
// If the argument's length is 5 or more characters
//    Return the argument

const leftPad5 = word => {
    return word.padStart(5);
};

console.log(leftPad5("hi"));

// Define a function named superPicky that takes one argument
//    value (anything)
//
// If the argument is a string,
//    Return 'Thanks! Got it.'
// Otherwise
//    Return 'I wanted a string, but all I got was a stinking TYPE'
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

const superPicky = value => {
    let enteredData = typeof value;
    if (enteredData === "string") {
        return "Thanks! Got it";
    } else {
        return `I wanted a string, but all I got was stinking ${enteredData}.`;
    }
};

console.log(superPicky(4));

// Define a function named calculateTaxRate that takes two arguments
//    salary (number from 1 to 74,900)
//    status (string that's either 'single' or 'joint')
//
// If the status is anything other than 'single' or 'joint'
//    Return a string that says 'Better call an accountant'
// If the salary is greater than 74,900
//    Return a string that says 'Better call an accountant'
// Otherwise
//    Return the correct tax rate as a string using the table from http://www.efile.com/tax-service/tax-calculator/tax-brackets/

const calculateTaxRate = (salary, status) => {
    if (salary > 74900) {
        return "Better call an accountant";
    }
    if (status === "single") {
        if (salary < 9375) {
            var taxRate = `$${salary * 0.1}`;
        } else if (salary < 37950) {
            taxRate = `$${salary * 0.15}`;
        } else {
            taxRate = `$${salary * 0.25}`;
        }
    } else if (status === "joint") {
        if (salary < 18650) {
            taxRate = `$${salary * 0.1}`;
        } else {
            taxRate = `$${salary * 0.15}`;
        }
    }
    return taxRate;
};
console.log(calculateTaxRate(30000, "joint"));
