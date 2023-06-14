function processNumber(obj) {
  var numbers = obj.numbers;
  var maxp = Math.max(...numbers);
  var sump = numbers.reduce ((acc,num) => acc + num, 0);
  
  const calc = {
    max: maxp,
    sum: sump,
  }
  return calc;
}

module.exports = processNumber;