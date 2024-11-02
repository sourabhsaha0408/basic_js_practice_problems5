let input = 9999;
let output = "";
let a;
let b ='';

if(a==1){
    b += 'One '
}
if(a==2){
    b += 'Two '
}
if(a==3){
    b += 'Three '
}
if(a==4){
    b += 'Four '
}
if(a==5){
    b += 'Five '
}
if(a==6){
    b += 'Six '
}
if(a==7){
    b += 'seven '
}
if(a==8){
    b += 'Eight '
}
if(a==9){
    b += 'Nine '
}

if(Math.trunc(input/1000)>0 ){
    a = Math.trunc(input/1000);
    output= output + b + 'Thousand ';
    input %= 1000;
}

if(Math.trunc(input/100)>0 ){
    a = Math.trunc(input/100);
    output= output + b + 'Hundred';
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