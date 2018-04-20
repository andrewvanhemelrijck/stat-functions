
class StatJs {
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
}

export default new StatJs

// /**
//   Percentile is in here somewhere
// **/
//   // sort dataSet by dataValue
//   let winsorizedData = dataSet.sort((a, b) => Number(a[dataValue]) - Number(b[dataValue]))
  
//   // determine percentile tail values
//   const kTails = (100 - percentile) / 2
  
//   // determine bottom and top percentile 'cut-off' value of dataset
//   let bottomKVal
//   const bottomK = (kTails / 100) * dataSet.length
//   if (bottomK % 1 !== 0) bottomKVal = winsorizedData[Math.ceil(bottomK) - 1][dataValue]
//   else bottomKVal = (winsorizedData[bottomK - 1][dataValue] + winsorizedData[bottomK][dataValue]) / 2
//   log(bottomK)
//   log(bottomKVal)
  
//   let topKVal
//   const topK = ((100 - kTails) / 100) * dataSet.length
//   if (topK % 1 !== 0) topKVal = winsorizedData[Math.ceil(topK) - 1][dataValue]
//   else topKVal = (winsorizedData[topK - 1][dataValue] + winsorizedData[topK][dataValue]) / 2
//   log(topK)
//   log(topKVal)

// /**
//   Some more ideas
// **/
// function mode(numbers) {
//   // as result can be bimodal or multi-modal,
//   // the returned result is provided as an array
//   // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
//   var modes = [], count = [], i, number, maxIndex = 0;

//   for (i = 0; i < numbers.length; i += 1) {
//       number = numbers[i];
//       count[number] = (count[number] || 0) + 1;
//       if (count[number] > maxIndex) {
//           maxIndex = count[number];
//       }
//   }

//   for (i in count)
//       if (count.hasOwnProperty(i)) {
//           if (count[i] === maxIndex) {
//               modes.push(Number(i));
//           }
//       }

//   return modes;
// }
 
// /**
//  * The "range" of a list a numbers is the difference between the largest and
//  * smallest values.
//  *
//  * For example, the "range" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 5].
//  *
//  * @param {Array} numbers An array of numbers.
//  * @return {Array} The range of the specified numbers.
//  */
// function range(numbers) {
//     numbers.sort();
//     return [numbers[0], numbers[numbers.length - 1]];
// }
