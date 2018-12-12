# statJs - 1.0 #

📈 statJs is a growing collection of statistics formulas that are readily available and easy to use.

## Usage ##

Import StatJs methods into your project.
```
import { sum, mean } from 'statJs';
```

Pass in dataset as an array of numbers (along with other arguments if applicable).
```
sum([ 1, 2, 3 ]); // 6
percentile([ 1, 2, 3 ], .3); // 1
```

## Methods ##

### `sum(dataset)` ###
#### Arguments ####
    + dataset ~(Array)~: Array of numbers.
#### Returns ####
    + ~(Number)~
#### Example ####
```
sum([ 1, 2, 3 ]); // 6
```

### `median(dataset)` ###
##### Arguments #####
    + dataset ~(Array)~: Array of numbers.
#### Returns ####
    + ~(Number)~
#### Example ####
```
median([ 1, 2, 3 ]); // 2
```

### `mean(dataset)` ###
#### Arguments ####
    + dataset ~(Array)~: Array of numbers.
#### Returns ####
    + ~(Number)~
#### Example ####
```
mean([ 1, 2, 3 ]); // 2
```

### `mode(dataset)` ###
#### Arguments ####
    + dataset ~(Array)~: Array of numbers.
#### Returns ####
    + ~(Array)~: Array of modes.
#### Example ####
```
mode([ 1, 2, 3, 3 ]); // [3]
```

### `range(dataset)` ###
#### Arguments ####
    + dataset ~(Array)~: Array of numbers.
#### Returns ####
    + ~(Array)~: Array of 2 numbers representing the range ~[min, max]~
#### Example ####
```
mode([ 1, 2, 3 ]); // [1, 3]
```

### `stdDev(dataset)` ###
#### Arguments ####
    + dataset ~(Array)~: Array of numbers.
#### Returns ####
    + ~(Number)~
#### Example ####
```
stdDev([ 1, 2, 3 ]); // 0.816496580927726
```

### `mad(dataset)` ###
#### Arguments ####
    + dataset ~(Array)~: Array of numbers.
#### Returns ####
    + ~(Number)~
#### Example ####
```
mad([ 1, 2, 3 ]); // 1
```

### `madWinsorize(dataset, madF)` ###
#### Arguments ####
    + dataset ~(Array)~: Array of numbers.
    + madF ~()~: Median Absolute Deviation Factor.
#### Returns ####
    + ~(Number)~
#### Example ####
```
madWinsorize([ 1, 2, 3 ]); // [1, 2, 3]
```

### `percentile(dataset, k)` ###
#### Arguments ####
    + dataset ~(Array)~: Array of numbers.
    + k ~(Number)~: Percentile to use.
#### Returns ####
    + ~(Number)~
#### Example ####
```
percentile([1, 2, 3], .3); // 1
```
