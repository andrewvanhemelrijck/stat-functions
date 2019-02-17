// /////////////////////////////////////////////////////////////////////
// Sum
// /////////////////////////////////////////////////////////////////////
const sum = dataSet => dataSet.reduce((a, b) => a + b, 0);

// /////////////////////////////////////////////////////////////////////
// Mean
// /////////////////////////////////////////////////////////////////////
const mean = dataSet => sum(dataSet) / dataSet.length;

// /////////////////////////////////////////////////////////////////////
// Median
// /////////////////////////////////////////////////////////////////////
const median = (dataSet) => {
  const setLen = dataSet.length;
  const sortedDataSet = [...dataSet].sort((a, b) => a - b);

  if (setLen % 2 === 0) return (sortedDataSet[(setLen / 2) - 1] + sortedDataSet[setLen / 2]) / 2;
  return sortedDataSet[(setLen - 1) / 2];
};

// /////////////////////////////////////////////////////////////////////
// Mode
// /////////////////////////////////////////////////////////////////////
const mode = (dataSet) => {
  const counts = [];
  const modes = [];
  let maxIndex = 0;

  for (let i = 0; i < dataSet.length; i++) {
    const number = dataSet[i];
    counts[number] = (counts[number] || 0) + 1;
    if (counts[number] > maxIndex) {
      maxIndex = counts[number];
    }
  }

  if (maxIndex === 1) return [];

  counts.forEach((c, i) => {
    if (c === maxIndex) modes.push(i);
  });
  return modes;
};

// /////////////////////////////////////////////////////////////////////
// Range
// /////////////////////////////////////////////////////////////////////
const range = (dataSet) => {
  const sortedDataSet = [...dataSet].sort((a, b) => a - b);

  return [sortedDataSet[0], sortedDataSet[dataSet.length - 1]];
};

// /////////////////////////////////////////////////////////////////////
// Standard Deviation
// /////////////////////////////////////////////////////////////////////
const stdDev = (dataSet) => {
  const avg = mean(dataSet);

  const squareDiffs = dataSet.map((val) => {
    const diff = val - avg;
    const sqrDiff = diff * diff;
    return sqrDiff;
  });

  const avgSquareDiff = mean(squareDiffs);
  const output = Math.sqrt(avgSquareDiff);

  return output;
};

// /////////////////////////////////////////////////////////////////////
// Percentile
// /////////////////////////////////////////////////////////////////////
const percentile = (dataSet, k) => {
  // sort dataSet ascending
  const sortedDataSet = [...dataSet].sort((a, b) => a - b);

  if (sortedDataSet.length === 0) return 0;
  // if (typeof k !== 'number') throw new TypeError('k must be a number');
  if (k <= 0) return sortedDataSet[0];
  if (k >= 1) return sortedDataSet[sortedDataSet.length - 1];

  // determine index and percentile value
  const i = k * dataSet.length;
  let perc;

  if (i % 1 !== 0) perc = sortedDataSet[Math.ceil(i) - 1];
  else perc = (sortedDataSet[i - 1] + sortedDataSet[i]) / 2;
  return perc;
};

// /////////////////////////////////////////////////////////////////////
// Median Absolute Deviation
// /////////////////////////////////////////////////////////////////////
const mad = (dataSet) => {
  // get median
  const med = median(dataSet);

  // get absolute deviations from the median
  const absoluteDeviations = dataSet.map(val => Math.abs(val - med));

  // get the median of the absolute deviations
  return median(absoluteDeviations);
};

// /////////////////////////////////////////////////////////////////////
// Winsorize
// /////////////////////////////////////////////////////////////////////
const madWinsorize = (dataSet, madF) => {
  const med = median(dataSet);
  const dSMad = mad(dataSet);

  return dataSet.map((val) => {
    if (Math.abs(val - med) > madF * dSMad) {
      if (val > med) return med + (madF * dSMad);
      if (val < med) return med - (madF * dSMad);
    }
    return val;
  });
};

module.exports = {
  mad,
  madWinsorize,
  mean,
  median,
  mode,
  percentile,
  range,
  stdDev,
  sum,
};
