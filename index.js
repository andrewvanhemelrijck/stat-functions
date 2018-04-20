import statjs from './statJs';

const testDataSet = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9 ];
const medianTest = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9, 9 ];
const modeTest = [ 3, 5, 4, 4, 1, 1, 2, 3 ];
const winsorTest = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9, 999, 9999999, -99999 ];
const percentileTest = [ 43, 54, 56, 61, 62, 66, 68, 69, 69, 70, 71, 72, 77, 78, 79, 85, 87, 88, 89, 93, 95, 96, 98, 99, 99 ];
const percentileTest2 = [ 3, 23, 78, 67, 3, 34, 23, 94, 90, 9 ];

console.log('Data Set: ', testDataSet);
// Sorted
console.log('Sorted Data Set: ', [...testDataSet].sort((a, b) => a - b))

console.log('Median: ', statjs.median(winsorTest));
console.log('Mean: ', statjs.mean(testDataSet));
console.log('Mode: ', statjs.mode(testDataSet));
console.log('Percentile: ', statjs.percentile(testDataSet, .05));
console.log('Range: ', statjs.range(testDataSet));
console.log('Standard Deviation: ', statjs.stdDev(testDataSet));
console.log('Median Absolute Deviation: ', statjs.mad(winsorTest));
console.log('Winsorized: ', statjs.mavWinsorize(winsorTest));//testDataSet));
console.log('Sorted Winsorized: ', [...statjs.mavWinsorize(winsorTest)].sort((a, b) => a - b));
