const sum = (dataSet) => {
  return dataSet.reduce((a, b) => a + b, 0);
}

const median = (dataSet) => {
  const setLen = dataSet.length;
  let med = 0;

  const sortedDataSet = [...dataSet].sort((a, b) => a - b);

  if (setLen % 2 === 0) {
    med = (sortedDataSet[(setLen / 2) - 1] + sortedDataSet[setLen / 2]) / 2;
  } else {
    med = sortedDataSet[(setLen - 1) / 2];
  }

  return med;
}

const mean = (dataSet) => {
  const sum = dataSet.reduce(function(sum, value){
    return sum + value;
  }, 0);

  const mean = sum / dataSet.length;
  return mean;
}

const mode = (dataSet) => {
  let modes = [];
  let count = [];
  let i, number, maxIndex = 0;

  for (i = 0; i < dataSet.length; i += 1) {
    number = dataSet[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (i in count) {
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }
  }

  return modes;
}

const range = (dataSet) => {
  const sortedDataSet = [...dataSet].sort((a, b) => a - b);

  return [sortedDataSet[0], sortedDataSet[dataSet.length - 1]];
}

const stdDev = (dataSet) => {
  const avg = mean(dataSet);
  
  const squareDiffs = dataSet.map(function(val) {
    const diff = val - avg;
    const sqrDiff = diff * diff;
    return sqrDiff;
  });
  
  const avgSquareDiff = mean(squareDiffs);
  const stdDev = Math.sqrt(avgSquareDiff);

  return stdDev;
}

// Median Absolute Deviation
const mad = (dataSet) => {
  // get median
  const med = median(dataSet); 

  // get absolute deviations from the median
  const absoluteDeviations = dataSet.map(val => Math.abs(val - med));

  // get the median of the absolute deviations
  return median(absoluteDeviations);
}

// Winsorize to +-4MAD
const madWinsorize = (dataSet, madF) => {
  const med = median(dataSet);
  const dSMad = mad(dataSet);

  return dataSet.map(val => {
    if (Math.abs(val - med) > madF * dSMad) {
      if (val > med) return med + (madF * dSMad);
      if (val < med) return med - (madF * dSMad);
    }
    return val;
  });
}

const percentile = (dataSet, k) => {
  // sort dataSet ascending
  const sortedDataSet = [...dataSet].sort((a, b) => a - b);
  
  // determine index and percentile value
  let i = k * dataSet.length;
  let perc;

  if (i % 1 !== 0) perc = sortedDataSet[Math.ceil(i) - 1];
  else perc = (sortedDataSet[i - 1] + sortedDataSet[i]) / 2;
  return perc;
}

module.exports = {
  sum,
  median,
  mean,
  mode,
  range,
  stdDev,
  mad,
  madWinsorize,
  percentile,
};
