/*Convert Integer to Words (1 to 9999)
Write a program to convert a number from 1 to 9999 to words.*/

let input = 1001;
let output = "";

// if (Math.trunc(input / 1000) == 1) {
//   output += "One Thousand ";
//   input %= 1000;
// }

switch (Math.trunc(input / 1000)) {
  case 1:
    output += "One Thousand ";
    input %= 1000;
    break;
  case 2:
    output += "Two Thousand ";
    input %= 1000;
    break;
  case 3:
    output += "Three Thousand ";
    input %= 1000;
    break;
  case 4:
    output += "Four Thousand ";
    input %= 1000;
    break;
}

if (Math.trunc(input / 1000) == 5) {
  output += "Five Thousand ";
  input %= 1000;
}
if (Math.trunc(input / 1000) == 6) {
  output += "Six Thousand ";
  input %= 1000;
}
if (Math.trunc(input / 1000) == 7) {
  output += "Seven Thousand ";
  input %= 1000;
}
if (Math.trunc(input / 1000) == 8) {
  output += "Eight Thousand ";
  input %= 1000;
}
if (Math.trunc(input / 1000) == 9) {
  output += "Nine Thousand ";
  input %= 1000;
}
if (Math.trunc(input / 100) == 1) {
  output += "One Hundred ";
  input %= 100;
}
if (Math.trunc(input / 100) == 2) {
  output += "Two Hundred ";
  input %= 100;
}
if (Math.trunc(input / 100) == 3) {
  output += "Three Hundred ";
  input %= 100;
}
if (Math.trunc(input / 100) == 4) {
  output += "Four Hundred ";
  input %= 100;
}
if (Math.trunc(input / 100) == 5) {
  output += "Five Hundred ";
  input %= 100;
}
if (Math.trunc(input / 100) == 6) {
  output += "Six Hundred ";
  input %= 100;
}
if (Math.trunc(input / 100) == 7) {
  output += "Seven Hundred ";
  input %= 100;
}
if (Math.trunc(input / 100) == 8) {
  output += "Eight Hundred ";
  input %= 100;
}
if (Math.trunc(input / 100) == 9) {
  output += "Nine Hundred ";
  input %= 100;
}
if (Math.trunc(input / 10) == 2) {
  output += "Twenty ";
  input %= 10;
}
if (Math.trunc(input / 10) == 3) {
  output += "Thirty ";
  input %= 10;
}
if (Math.trunc(input / 10) == 4) {
  output += "Forty ";
  input %= 10;
}
if (Math.trunc(input / 10) == 5) {
  output += "Fifty ";
  input %= 10;
}
if (Math.trunc(input / 10) == 6) {
  output += "Sixty ";
  input %= 10;
}
if (Math.trunc(input / 10) == 7) {
  output += "Seventy ";
  input %= 10;
}
if (Math.trunc(input / 10) == 8) {
  output += "Eighty ";
  input %= 10;
}
if (Math.trunc(input / 10) == 9) {
  output += "Ninety ";
  input %= 10;
}

switch (input) {
  case 1:
    output += "One";
    break;
  case 2:
    output += "Two";
    break;
  case 3:
    output += "Three";
    break;
  case 4:
    output += "Four";
    break;
  case 5:
    output += "Five";
    break;
  case 6:
    output += "Six";
    break;
  case 7:
    output += "Seven";
    break;
  case 8:
    output += "Eight";
    break;
  case 9:
    output += "Nine";
    break;
  case 10:
    output += "Ten";
    break;
  case 11:
    output += "Eleven";
    break;
  case 12:
    output += "Twelve";
    break;
  case 13:
    output += "Thirteen";
    break;
  case 14:
    output += "Fourteen";
    break;
  case 15:
    output += "Fifteen";
    break;
  case 16:
    output += "Sixteen";
    break;
  case 17:
    output += "Seventeen";
    break;
  case 18:
    output += "Eighteen";
    break;
  case 19:
    output += "Nineteen";
  // break;
}

console.log(output);
