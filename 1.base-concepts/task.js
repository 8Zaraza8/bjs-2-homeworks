"use strict"
function solveEquation(a, b, c) {
  let roots = [];
  let discriminant = b**2 - 4 * a * c;

  if (discriminant === 0) {
      roots.push(-b / (2 * a));
  } else if (discriminant > 0) {
      roots.push((-b + Math.sqrt(discriminant)) / (2 * a));
      roots.push((-b - Math.sqrt(discriminant)) / (2 * a));
  } else {
      roots = [];
  }
  
  return roots;
}

solveEquation(1, -2, 1)
solveEquation(3, 5, 2)
solveEquation(2, -1, 1)


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let sumLoad = amount - contribution;
  let percentageFraction = (percent / 100) / 12;
  let monthlyPayment = sumLoad * (percentageFraction + (percentageFraction / (((1 + percentageFraction)** countMonths) - 1)));

  let totalAmount = Math.round(monthlyPayment * countMonths * 100) / 100;
  return totalAmount;
}

calculateTotalMortgage(10, 0, 50000, 12);
calculateTotalMortgage(10, 1000, 50000, 12);
calculateTotalMortgage(10, 0, 20000, 24);
calculateTotalMortgage(10, 1000, 20000, 24);
calculateTotalMortgage(10, 20000, 20000, 24);
calculateTotalMortgage(10, 0, 10000, 36);
calculateTotalMortgage(15, 0, 10000, 36);
