// Task-1
function getArrayParams(...numbers) {
  let min = Math.min.apply(null, numbers);
  let max = Math.max.apply(null, numbers);
  let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
  let arifmeticMean = sum / numbers.length;

  return { min: min, max: max, avg: Number(parseFloat(arifmeticMean).toFixed(2)) };
}

// Task-2
function summElementsWorker(...elements) {
  let sum = elements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return elements.length !== 0 ? sum : 0;
}

function differenceMaxMinWorker(...elements) {
  let min = Math.min.apply(null, elements);
  let max = Math.max.apply(null, elements);

  return elements.length !== 0 ? max - min : 0;
}

function differenceEvenOddWorker(...elements) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i] % 2 == 0) {
      sumEvenElement += elements[i];
    } else {
      sumOddElement += elements[i];
    }
  }
  return elements.length !== 0 ? sumEvenElement - sumOddElement : 0;
}

function averageEvenElementsWorker(...elements) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] % 2 == 0) {
      sumEvenElement += elements[i];
      countEvenElement += 1;
    } 
  }
  return countEvenElement > 0 ? sumEvenElement / countEvenElement : 0;
}

// Task-3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    let resultElement = func(...arr);
    if (resultElement > maxWorkerResult) {
      maxWorkerResult = resultElement;
    }
  }
  return maxWorkerResult;
}
