let input = "dodddddddddd";
let output = "";

for (i = 0; i < input.length; i++) {
  // if (output.indexOf(input.charAt(i)) !== -1) {
  //   break;
  // }
  output += input.charAt(i) + " ";
  for (j = i + 1; j < input.length; j++) {
    if (input.charAt(i) == input.charAt(j)) {
      output += input.charAt(j) + " ";
      input = input.slice(0, j) + input.slice(j + 1);
      console.log(input);
    }
  }
}

// console.log(input.splice(2,1));
// console.log(input);

console.log(output);
