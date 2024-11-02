const input = "abc";
let output = "";

for (i = 0; i < input.length; i++) {
  for (j = i + 1; j <= input.length; j++) {
    output += input.slice(i, j) + " ";
  }
}

console.log(output);
