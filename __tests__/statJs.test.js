const statJs = require('../statJs');

const testDataSet = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9 ];
const medianTest = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9, 9 ];
const modeTest = [ 3, 5, 4, 4, 1, 1, 2, 3 ];
const winsorTest = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9, 999, 9999999, -99999 ];
const percentileTest = [ 43, 54, 56, 61, 62, 66, 68, 69, 69, 70, 71, 72, 77, 78, 79, 85, 87, 88, 89, 93, 95, 96, 98, 99, 99 ];
const percentileTest2 = [ 3, 23, 78, 67, 3, 34, 23, 94, 90, 9 ];

describe('statJs', () => {
  test('.sum() should return correct sum', () => {
    expect(statJs.sum(testDataSet)).toBe(1206);
  });

  test('.median() should return correct median', () => {
    expect(statJs.median(testDataSet)).toBe(72.5);
    expect(statJs.median(medianTest)).toBe(67);
  });

  test('.mean() should return correct mean', () => {
    expect(statJs.mean(testDataSet)).toBe(86.14285714285714);
  });

  test('.mode() should return correct mode array', () => {
    expect(statJs.mode(modeTest)).toEqual([ 1, 3, 4 ]);
  });

  test('.range() should return correct range array', () => {
    expect(statJs.range(testDataSet)).toEqual([ 3, 356 ]);
  });

  test('.stdDev() should return correct standard deviation', () => {
    expect(statJs.stdDev(testDataSet)).toBe(94.81776291004395);
  });

  test('.mad() should return correct median absolute deviation', () => {
    expect(statJs.mad(testDataSet)).toBe(44);
    expect(statJs.mad(medianTest)).toBe(44);
  });

  test('.madWinsorize() should return correctly Winsorized data set', () => {
    expect(statJs.madWinsorize(testDataSet)).toEqual([ 3, 234, 23, 78, 248.5, 98, 67, 3, 34, 23, 94, 94, 90, 9 ], 4);
    expect(statJs.madWinsorize(winsorTest)).toEqual([ 3, 234, 23, 78, 298, 98, 67, 3, 34, 23, 94, 94, 90, 9, 298, 298, -142 ], 4);
  });

  test('.percentile() should return correct percentile value', () => {
    expect(statJs.percentile(percentileTest, .9)).toBe(98);
    expect(statJs.percentile(testDataSet, .05)).toBe(3);
    expect(statJs.percentile(testDataSet, .9)).toBe(234);
    expect(statJs.percentile(percentileTest2, .1)).toBe(3);
  });
});
