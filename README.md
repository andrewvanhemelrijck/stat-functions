# 📈 stat-functions
A collection of common statistics formulas.

---
## Install
```javascript
npm i stat-functions
yarn add stat-functions
```

---
## Usage
Import stat-functions methods into your project.
```javascript
import { sum, mean } from 'stat-functions';
```

Pass in dataset as an array of numbers (along with other arguments if applicable).
```javascript
sum([ 1, 2, 3 ]); // 6
percentile([ 1, 2, 3 ], .3); // 1
```

---
## Available Methods
+ ## sum(dataset)
+ ## median(dataset)
+ ## mean(dataset)
+ ## mode(dataset)
+ ## range(dataset)
+ ## stdDev(dataset)
+ ## mad(dataset)
+ ## madWinsorize(dataset, madF)
+ ## percentile(dataset, k)
