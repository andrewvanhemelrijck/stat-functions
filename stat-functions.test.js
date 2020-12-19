const statFunctions = require('./stat-functions');

const testDataSet = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9 ];
const winsorTest = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9, 999, 9999999, -99999 ];
const medianTest = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9, 9 ];
const modeTest = [ 3, 5, 4, 4, 1, 1, 2, 3 ];
const modeTest2 = [ 100, 229, 234, 234, 11, 1, 3 ];
const modeTest3 = [ 100, 229, 234, 11, 1, 3 ];
const percentileTest = [ 43, 54, 56, 61, 62, 66, 68, 69, 69, 70, 71, 72, 77, 78, 79, 85, 87, 88, 89, 93, 95, 96, 98, 99, 99 ];
const percentileTest2 = [ 3, 23, 78, 67, 3, 34, 23, 94, 90, 9 ];
const percentileTest3 = [ 100, 55, 64, 11, 85, 73, 51, 60, 29, 53, 63, 32, 91, 67, 41, 80, 6, 97, 39, 99, 68, 92, 15, 94, 12, 23, 40, 5, 88, 35, 46, 17, 48, 59, 16, 24, 79, 58, 89, 66, 70, 56, 9, 27, 77, 83, 86, 61, 22, 1 ];

// validation test sets
const emptySet = [];
const nanSet = [ 0, 1, 'not a number' ];

describe('statFunctions', () => {
  // sum
  test('.sum() should return correct sum', () => {
    expect(statFunctions.sum(testDataSet)).toBe(1206);
  });
  test('.sum() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.sum(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.sum() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.sum(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // mean
  test('.mean() should return correct mean', () => {
    expect(statFunctions.mean(testDataSet)).toBe(86.14285714285714);
  });
  test('.mean() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.mean(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.mean() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.mean(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // median
  test('.median() should return correct median', () => {
    expect(statFunctions.median(testDataSet)).toBe(72.5);
    expect(statFunctions.median(medianTest)).toBe(67);
  });
  test('.median() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.median(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.median() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.median(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // mode
  test('.mode() should return correct mode array', () => {
    expect(statFunctions.mode(modeTest)).toEqual([ 1, 3, 4 ]);
    expect(statFunctions.mode(modeTest2)).toEqual([ 234 ]);
    expect(statFunctions.mode(modeTest3)).toEqual([]);
  });
  test('.mode() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.mode(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.mode() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.mode(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // range
  test('.range() should return correct range array', () => {
    expect(statFunctions.range(testDataSet)).toEqual([ 3, 356 ]);
  });
  test('.range() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.range(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.range() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.range(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // stdDev
  test('.stdDev() should return correct standard deviation', () => {
    expect(statFunctions.stdDev(testDataSet)).toBe(94.81776291004395);
  });
  test('.stdDev() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.stdDev(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.stdDev() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.stdDev(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // percentile
  test('.percentile() should return correct percentile value', () => {
    expect(statFunctions.percentile(percentileTest, .9)).toBe(98);
    expect(statFunctions.percentile(testDataSet, .05)).toBe(3);
    expect(statFunctions.percentile(testDataSet, .9)).toBe(234);
    expect(statFunctions.percentile(percentileTest2, .1)).toBe(3);
  });
  test('.percentile() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.percentile(emptySet, .9);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.percentile() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.percentile(nanSet, .9);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });
  test('.percentile() should throw error on empty k value', () => {
    const testEmptyK = () => statFunctions.percentile(percentileTest);
    expect(testEmptyK).toThrowError(new TypeError('You must provide a k value for the percentile function.'));
    expect(testEmptyK).toThrowErrorMatchingSnapshot();
  });
  test('.percentile() should throw error on non-number k value', () => {
    const testNanK = () => statFunctions.percentile(percentileTest, 'not a number');
    expect(testNanK).toThrowError(new TypeError('K value must be a number.'));
    expect(testNanK).toThrowErrorMatchingSnapshot();
  });
  test('.percentile() should throw error on k value less than 0 or greater than 1', () => {
    const testKLessThanZero = () => statFunctions.percentile(percentileTest, -.1);
    expect(testKLessThanZero).toThrowError(new TypeError('K value must be a decimal value greater than 0 and less than 1.'));
    expect(testKLessThanZero).toThrowErrorMatchingSnapshot();

    const testKGreaterThanZero = () => statFunctions.percentile(percentileTest, 1.5);
    expect(testKGreaterThanZero).toThrowError(new TypeError('K value must be a decimal value greater than 0 and less than 1.'));
    expect(testKGreaterThanZero).toThrowErrorMatchingSnapshot();
  });

  // nTile
  test('.nTile() should return correct nTile value', () => {
    expect(statFunctions.nTile([1, 2, 3, 4], 4)).toEqual([1.5, 2.5, 3.5]);
    expect(statFunctions.nTile(percentileTest, 4)).toEqual([68, 77, 89]);
    expect(statFunctions.nTile(percentileTest2, 4)).toEqual([9, 28.5, 78]);
    expect(statFunctions.nTile(percentileTest3, 10)).toEqual([ 11.5, 22.5, 35, 47, 57, 64, 71.5, 84, 91.5 ]);
  });
  test('.nTile() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.nTile(emptySet, 4);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.nTile() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.nTile(nanSet, 4);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });
  test('.nTile() should throw error on empty q value', () => {
    const testEmptyQ = () => statFunctions.nTile(percentileTest);
    expect(testEmptyQ).toThrowError(new TypeError('You must provide a q value for the nTile function.'));
    expect(testEmptyQ).toThrowErrorMatchingSnapshot();
  });
  test('.nTile() should throw error on non-number q value', () => {
    const testNanQ = () => statFunctions.nTile(percentileTest, 'not a number');
    expect(testNanQ).toThrowError(new TypeError('Q value must be a number.'));
    expect(testNanQ).toThrowErrorMatchingSnapshot();
  });
  test('.nTile() should throw error on q value less than 0', () => {
    const testQLessThanZero = () => statFunctions.nTile(percentileTest, -1);
    expect(testQLessThanZero).toThrowError(new TypeError('Q value must be greater than 0.'));
    expect(testQLessThanZero).toThrowErrorMatchingSnapshot();
  });
  test('.nTile() should throw error on non-integer q value', () => {
    const testNonIntQ = () => statFunctions.nTile(percentileTest, .1);
    expect(testNonIntQ).toThrowError(new TypeError('Q value must be an integer.'));
    expect(testNonIntQ).toThrowErrorMatchingSnapshot();
  });

  // MAD
  test('.mad() should return correct median absolute deviation', () => {
    expect(statFunctions.mad(testDataSet)).toBe(44);
    expect(statFunctions.mad(medianTest)).toBe(44);
  });
  test('.mad() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.mad(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.mad() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.mad(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // madWinsorize
  test('.madWinsorize() should return correctly Winsorized data set', () => {
    expect(statFunctions.madWinsorize(testDataSet, 4)).toEqual([ 3, 234, 23, 78, 248.5, 98, 67, 3, 34, 23, 94, 94, 90, 9 ]);
    expect(statFunctions.madWinsorize(winsorTest, 4)).toEqual([ 3, 234, 23, 78, 298, 98, 67, 3, 34, 23, 94, 94, 90, 9, 298, 298, -142 ]);
  });
  test('.madWinsorize() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.madWinsorize(emptySet, 4);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.madWinsorize() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.madWinsorize(nanSet, 4);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });
  test('.madWinsorize() should throw error on empty MAD factor value', () => {
    const testEmptyMadF = () => statFunctions.madWinsorize(winsorTest);
    expect(testEmptyMadF).toThrowError(new TypeError('You must provide a MAD factor value for the madWinsorize function.'));
    expect(testEmptyMadF).toThrowErrorMatchingSnapshot();
  });
  test('.madWinsorize() should throw error on non-number MAD factor value', () => {
    const testNanMadF = () => statFunctions.madWinsorize(winsorTest, 'not a number');
    expect(testNanMadF).toThrowError(new TypeError('MAD factor value must be a number.'));
    expect(testNanMadF).toThrowErrorMatchingSnapshot();
  });
});
