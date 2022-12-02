function getFirstPart(firstNumber, lastNumber, operator) {
  operator = pickrandom('+', '-', 'x', '÷');
  firstNumber = pickrandom(1 to 9999);
  lastNumber = pickrandom(1 to 9999);
  
  while(true) {
    console.log(firstNumber + operator + lastNumber);
  }
}

getFirstPart(firstNumber, lastNumber, operator);
