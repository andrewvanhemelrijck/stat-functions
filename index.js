const {
  median,
  mean,
  mode,
  percentile,
  range,
  stdDev,
  mad,
  mavWinsorize,
} = require('./statJs');

const testDataSet = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9 ];
const medianTest = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9, 9 ];
const modeTest = [ 3, 5, 4, 4, 1, 1, 2, 3 ];
const winsorTest = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9, 999, 9999999, -99999 ];
const percentileTest = [ 43, 54, 56, 61, 62, 66, 68, 69, 69, 70, 71, 72, 77, 78, 79, 85, 87, 88, 89, 93, 95, 96, 98, 99, 99 ];
const percentileTest2 = [ 3, 23, 78, 67, 3, 34, 23, 94, 90, 9 ];

console.log('Data Set: ', testDataSet);
// Sorted
console.log('Sorted Data Set: ', [...testDataSet].sort((a, b) => a - b))

console.log('Median: ', median(winsorTest));
console.log('Mean: ', mean(testDataSet));
console.log('Mode: ', mode(testDataSet));
console.log('Percentile: ', percentile(testDataSet, .05));
console.log('Range: ', range(testDataSet));
console.log('Standard Deviation: ', stdDev(testDataSet));
console.log('Median Absolute Deviation: ', mad(winsorTest));
console.log('Winsorized: ', mavWinsorize(winsorTest));//testDataSet));
console.log('Sorted Winsorized: ', [...mavWinsorize(winsorTest)].sort((a, b) => a - b));
