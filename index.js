import statjs from './statJs';

const testDataSet = [3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9];
const testDataSet2 = [3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9, 9];

console.log('Data Set: ', testDataSet);
// Sorted
console.log('Sorted Data Set: ', [...testDataSet].sort((a, b) => a - b))

console.log('Median: ', statjs.median(testDataSet2));
console.log('Mean: ', statjs.mean(testDataSet));
console.log('Standard Deviation: ', statjs.stdDev(testDataSet));
console.log('Median Absolute Deviation: ', statjs.mad(testDataSet));
console.log('Winsorized: ', statjs.mavWinsorize(testDataSet));
console.log('Sorted Winsorized: ', [...statjs.mavWinsorize(testDataSet)].sort((a, b) => a - b));
