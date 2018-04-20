import statjs from './stat-functions';

const testDataSet = [3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9];

console.log('Data Set: ', testDataSet);
// Sorted
console.log('Sorted Data Set: ', [...testDataSet].sort((a, b) => a - b))

console.log('Median: ', statjs.median(testDataSet));
console.log('Mean: ', statjs.mean(testDataSet));
console.log('Standard Deviation: ', statjs.standardDeviation(testDataSet));
console.log('Median Absolute Deviation: ', statjs.mad(testDataSet));
console.log('Winsorized: ', statjs.mavWinsorize(testDataSet));
console.log('Sorted Winsorized: ', [...statjs.mavWinsorize(testDataSet)].sort((a, b) => a - b));
