
class StatJs {
  sum(dataSet) {
    return dataSet.reduce((a, b) => a + b, 0);
  }

  median(dataSet) {
    const setLen = dataSet.length;
    let median = 0;

    const sortedDataSet = [...dataSet].sort((a, b) => a - b);

    if (setLen % 2 === 0) {
      median = (sortedDataSet[(setLen / 2) - 1] + sortedDataSet[setLen / 2]) / 2;
    } else {
      median = sortedDataSet[(setLen - 1) / 2];
    }

    return median;
  }

  mean(dataSet) {
    const sum = dataSet.reduce(function(sum, value){
      return sum + value;
    }, 0);

    const mean = sum / dataSet.length;
    return mean;
  }

  mode(dataSet) {
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

  range(dataSet) {
    const sortedDataSet = [...dataSet].sort((a, b) => a - b);

    return [sortedDataSet[0], sortedDataSet[dataSet.length - 1]];
  }

  stdDev (dataSet) {
    const avg = this.mean(dataSet);
    
    const squareDiffs = dataSet.map(function(val) {
      const diff = val - avg;
      const sqrDiff = diff * diff;
      return sqrDiff;
    });
    
    const avgSquareDiff = this.mean(squareDiffs);
    const stdDev = Math.sqrt(avgSquareDiff);

    return stdDev;
  }

  // Median Absolute Deviation
  mad(dataSet) {
    // get median
    const med = this.median(dataSet); 

    // get absolute deviations from the median
    const absoluteDeviations = dataSet.map(val => Math.abs(val - med));

    // get the median of the absolute deviations
    return this.median(absoluteDeviations);
  }

  // Winsorize to +-4MAD
  mavWinsorize(dataSet) {
    const med = this.median(dataSet);
    const dSMad = this.mad(dataSet);

    return dataSet.map(val => {
      if (Math.abs(val - med) > 4 * dSMad) {
        if (val > med) return med + (4 * dSMad);
        if (val < med) return med - (4 * dSMad);
      }
      return val;
    });
  }

  percentile(dataSet, k) {
    // sort dataSet ascending
    const sortedDataSet = [...dataSet].sort((a, b) => a - b);
    
    // determine index and percentile value
    let i = k * dataSet.length;
    let percentile;

    if (i % 1 !== 0) percentile = sortedDataSet[Math.ceil(i) - 1];
    else percentile = (sortedDataSet[i - 1] + sortedDataSet[i]) / 2;
    return percentile;
  }
}

module.exports = new StatJs;
