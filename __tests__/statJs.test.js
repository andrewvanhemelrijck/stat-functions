import statJs from '../statJs';

const testDataSet = [3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9];
const testDataSet2 = [3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9, 9];

describe('statJs', () => {
  test('median should return correct median', () => {
    expect(statJs.median(testDataSet)).toBe(72.5);
    expect(statJs.median(testDataSet2)).toBe(67);
  });

  test('mean should return correct mean', () => {
    expect(statJs.mean(testDataSet)).toBe(86.14285714285714);
  });

  test('standard deviation should return correct standard deviation', () => {
    expect(statJs.stdDev(testDataSet)).toBe(94.81776291004395);
  });

  test('mad should return correct median absolute deviation', () => {
    expect(statJs.mad(testDataSet)).toBe(44);
    expect(statJs.mad(testDataSet2)).toBe(44);
  });

  test('mavWinsorize should return correctly Winsorized data set', () => {
    expect(statJs.mavWinsorize(testDataSet)).toEqual([ 3, 234, 23, 78, 248.5, 98, 67, 3, 34, 23, 94, 94, 90, 9 ]);
  });
});
