# 📈 jStats
---
A collection of common statistics formulas.

## Usage
---
Import jStats methods into your project.
```javascript
import { sum, mean } from 'jStats';
```

Pass in dataset as an array of numbers (along with other arguments if applicable).
```javascript
sum([ 1, 2, 3 ]); // 6
percentile([ 1, 2, 3 ], .3); // 1
```

## Available Methods
---
## sum(dataset)
## median(dataset)
## mean(dataset)
## mode(dataset)
## range(dataset)
## stdDev(dataset)
## mad(dataset)
## madWinsorize(dataset, madF)
## percentile(dataset, k)
