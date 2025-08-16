# 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 11.01 Array.reduce Method

## 📖 Overview
The `reduce()` method executes a reducer function on each element of the array, resulting in a **single return value**. It is one of the most powerful array methods for performing aggregation, summarization, and complex transformations.

---

## 🧠 Step 1: Theoretical Exploration

### Syntax
```javascript
array.reduce(function(accumulator, currentValue, index, array) {
  // return updated accumulator
}, initialValue);
```

- **accumulator** → the running total or aggregated result so far.
- **currentValue** → the current element being processed.
- **index** (optional) → the current index.
- **array** (optional) → the full array being processed.
- **initialValue** (optional but recommended) → starting point for the accumulator.

### Example: Sum of Numbers
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

### Key Points
- Returns a single value (number, string, object, array, etc.).
- Does not mutate the original array.
- Initial value is recommended to prevent errors and ensure type consistency.

---

## 🧪 Step 2: Inquiry & Application

**1. Concept Check**  
- `reduce()` accumulates results into a single value, unlike `map()` (returns new array) or `filter()` (returns subset array).

**2. Accumulator Awareness**  
- The accumulator carries the result from previous iterations and is updated each time.

**3. Initial Value Check**  
- If omitted, the first array element is used as the accumulator, and iteration starts from the second element.

**4. Debugging Insight**
```javascript
const numbers = [1, 2, 3];
const result = numbers.reduce((acc, num) => acc + num);
console.log(result); // 6
```

**5. Advanced Use Case**  
- Beyond sums, `reduce()` can group items, build objects, flatten arrays, or count occurrences.

**💻 Real-World Simulation Task**  
Summarize expenses by category:
```javascript
const expenses = [
  { category: 'Food', amount: 25 },
  { category: 'Transport', amount: 15 },
  { category: 'Food', amount: 10 },
  { category: 'Utilities', amount: 50 }
];

function summarizeExpenses(expenses) {
  return expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});
}

console.log(summarizeExpenses(expenses));
// { Food: 35, Transport: 15, Utilities: 50 }
```

---

## 📝 Step 3: Assessment & Feedback

**Quick Quiz**
1. `reduce()` returns → **B: A single accumulated value**  
2. Does it modify the array? → **B: No**  
3. If no initialValue → **B: First element is accumulator, loop starts at second**  
4. Example:  
```javascript
const nums = [10, 20, 30];
const sum = nums.reduce((acc, num) => acc + num, 5);
console.log(sum); // 65
```
5. Best scenario → **C: Summing values or building aggregated object**  

---

## 🪞 Step 4: Reflection & Journal

1. **Most intuitive part:** Seeing how `reduce()` produces a single value from multiple elements.  
2. **Least intuitive part:** Applying `reduce()` to real-world data structures like grouped objects.  
3. **Real-world scenario:** Summing sales across a week to calculate total revenue.  
4. **Beginner explanation:**  
   "`reduce()` loops through an array, combines each element with an accumulator, and returns one final value. The logic for combining is provided by you in the callback."

---

## 🧩 Step 5: Exercises

**1. Sum of Numbers**
```javascript
const numbers = [5, 10, 15];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 30
```

**2. Multiply All**
```javascript
const nums = [2, 3, 4];
const product = nums.reduce((acc, num) => acc * num);
console.log(product); // 24
```

**3. Find Maximum**
```javascript
const values = [7, 12, 3, 21, 9];
const maximum = values.reduce((acc, val) => acc > val ? acc : val);
console.log(maximum); // 21
```

**4. Word Count**
```javascript
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const counts = words.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log(counts); // { apple: 3, banana: 2, orange: 1 }
```

**5. Group by Category**
```javascript
const items = [
  { name: 'Shirt', category: 'Clothing' },
  { name: 'Apple', category: 'Food' },
  { name: 'Pants', category: 'Clothing' },
  { name: 'Bread', category: 'Food' }
];

const group = items.reduce((acc, item) => {
  (acc[item.category] ??= []).push(item.name);
  return acc;
}, {});

console.log(group);
// { Clothing: ['Shirt', 'Pants'], Food: ['Apple', 'Bread'] }
```

---

## 🎫 Step 7: Exit Ticket Questions

1. **What does `reduce()` return after processing the whole array?**  
   → A single value.  

2. **Why is providing an `initialValue` recommended?**  
   → It ensures a defined starting accumulator, prevents errors on empty arrays, and enforces the correct type.  

3. **If omitted, what happens?**  
   → The first element becomes the accumulator, iteration starts at the second element.  

4. **Real-world use case:**  
   → Calculating the total weekly sales from daily sales amounts.  

5. **Code Insight**  
```javascript
const arr = [2, 3, 4];
const res = arr.reduce((acc, n) => acc * n, 1);
console.log(res); // 24
```
Because the accumulator starts at `1`, and multiplies each element sequentially.

---

## 📚 References
- [MDN Web Docs: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- *Eloquent JavaScript* by Marijn Haverbeke
- [You Don’t Know JS](https://github.com/getify/You-Dont-Know-JS)
