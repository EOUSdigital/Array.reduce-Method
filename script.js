//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 11.01 Array.reduce Method

//! MDN: The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

//TODO 🔍  Step 1: Theoretical Exploration

//* 1. 📘 What Is reduce()?
//  The `reduce()` method executes a reducer callback function on each element of the array, accumulating the result into a single return value.

// Syntax:

// array.reduce(function(accumulator, currentValue, index, array) {
//     //  return updated accumulator
// }, initialValue);

//  • accumulator → The value that results from the previous iteration (or the initialValue in the first call).
//  • currentValue → The current element being processed.
//  • index (optional) → The index of the current element.
//  • array (optional) → The original array.
//  • initialValue (optional but recommended) → The starting value for the accumulator.

//* 2. 🧠 How It Works
//  Think of `reduce()` as a way to boil down an array into a single value:
//  • The first argument in the callback is the accumulator.
//  • The second is the currentValue.
//  • Whatever you return from the callback becomes the accumulator for the next iteration.
//  • After going through the whole array, `reduce()` returns the final accumulator.

//* 3. 🛠 Example: Sum of Numbers

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

//* 4. ⚠️ Important Considerations
//  • Always provide an initialValue to avoid unexpected behavior, especially with empty arrays.
//  • reduce() is very flexible — you can use it to sum values, flatten arrays, count occurrences, group data, and more.
//  • If no initialValue is provided, the first element is used as the accumulator, and iteration starts from the second element.

//* 5. ✅ When to Use reduce()
//  • Summing numbers.
//  • Combining values into a single object or string.
//  • Flattening arrays.
//  • Grouping data by a property.
//  • Counting occurrences.


//TODO  🧪 Step 2: Inquiry & Application — Array.reduce()

//* 🧭 Guided Inquiry

//? 1. Concept Check
//  • What makes `reduce()` different from methods like `map()` or `filter()` in terms of its return value?
//! Answer: The main difference between `reduce()` and methods like `map()` or `filter()` is that  `reduce()` executes a reducer callback function on each element of the array, accumulating the result into a single return value.

//  ‼️ Feedback:
//  ✅ Exactly right!
//  • map() → always returns a new array (same length).
//  • filter() → returns a new array with fewer (or equal) elements.
//  • reduce() → returns one single value (number, string, object, etc.), because it accumulates everything.

//? 2. Accumulator Awareness
//  • Why is the accumulator parameter so important in `reduce()`? What role does it play?
//! Answer: The accumulator parameter is important in `reduce()` because it provides the value that results from the previous iteration (or the initialValue in the first call).

//  ‼️ Feedback:
//  ✅ Perfect — spot on!
//  • The accumulator is the "running total" (not just for numbers, but any structure) that carries over between iterations. It’s what allows reduce() to “remember” and build toward the final result.

//? 3. Initial Value Check
//  • What happens if you do not provide an initialValue in `reduce()`? Can this cause problems?
//! Answer: If I do not provide an initialValue, the first element is used as the accumulator, and iteration starts from the second element.

//  ‼️ Feedback:
//  ✅ Exactly — and yes, this can cause problems:
//  • If the array is empty, calling reduce() without an initialValue throws an error.
//  • It can also lead to unexpected results if the first element isn’t the right type for accumulation.
//  That’s why providing an explicit initialValue is considered a best practice.

//? 4. Debugging Insight
//  • What will the following log?

const numbers2 = [1, 2, 3];
const result = numbers2.reduce((acc, num) => acc + num);
console.log(result);

//? Why?
//! Answer: The result is 6 after going through the whole array, because `reduce()` will return the final accumulator.

//  ‼️ Feedback:
//  ✅ Correct!
//  Here’s the breakdown:
//  • Since no initialValue was provided, the first element (1) becomes the accumulator.
//  • Iteration starts at the second element (2).
//      • Step 1: 1 + 2 = 3 → accumulator = 3.
//      • Step 2: 3 + 3 = 6 → accumulator = 6.
//  • Final result = 6.

//? 5. Advanced Use Case
//  • Beyond simple sums, how might `reduce()` be useful for transforming an array into an object or more complex structure?
//! Answer: The `reduce()` method is highly versatile and can be used to transform an array into various complex data structures, including objects, by accumulating the array elements into a single, aggregated value.

//  ‼️ Feedback:
//  ✅ Exactly — very well put!
//  • Grouping by property (like categories in expenses).
//  • latter arrays ([[1,2],[3,4]] → [1,2,3,4]).

//* ⚙️ Real-World Simulation Task

//? Scenario:
//  You are building an expense tracker app. Each expense has a category and an amount.

const expenses = [
    { category: 'Food', amount: 25 },
    { category: 'Transport', amount: 15 },
    { category: 'Food', amount: 10 },
    { category: 'Utilities', amount: 50 }
];

//? Your Task:
//  Write a function summarizeExpenses(expenses) that:
//  1. Uses reduce() to create an object where the keys are categories (Food, Transport, Utilities, etc.).
//  2. The values are the total amounts spent in each category.
//  3. Returns this summary object.

//? Expected Output:

// {
//     Food: 35,
//     Transport: 15,
//     Utilities: 50
// };

//! Solution:

function summarizeExpenses(expenses) {
    const summary = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});
    return summary;
}

console.log(summarizeExpenses(expenses));

//  ‼️ Feedback:
//  ✅ Excellent solution! You nailed the real-world use case for reduce().
//  Here’s why your code works perfectly:
//  • Initial value: {} ensures we start with an empty object.
//  • Accumulator (acc): collects totals per category.
//  • Logic: (acc[expense.category] || 0) checks if the category exists; if not, start at 0.
//  • Accumulation: Adds the current expense.amount to the running total for that category.
//  • Return: Each iteration returns the updated acc, which becomes the accumulator for the next round.


//TODO  ✅ Step 3: Assessment & Feedback — `Array.reduce()`

//* 🎯 Quick Quiz (5 Questions)

//? 1. What does `reduce()` return after executing its callback on every element?

//  A. Always an array
//  B. A single accumulated value
//  C. An object only
//  D. Nothing unless an initialValue is provided

//! Answer: B

//? 2. Does `reduce()` modify the original array?

//  A. Yes
//  B. No

//! Answer: B

//? 3. What happens if no `initialValue` is given to `reduce()`?

//  A. It throws an error always
//  B. The first element is used as the accumulator, iteration starts from the second
//  C. The array is cleared before reduction
//  D. It always returns `undefined`

//! Answer: B

//? 4.** What will this log?

const nums2 = [10, 20, 30];
const sum2 = nums2.reduce((acc, num) => acc + num, 5);
console.log(sum2);

//  A. 60
//  B. 65
//  C. 70
//  D. Error

//! Answer: B

//? 5. Which scenario is best suited for `reduce()`?

//  A. Converting an array of numbers to their squares
//  B. Filtering out odd numbers
//  C. Summing values or building an aggregated object
//  D. Iterating through each element for logging

//! Answer: C

//* ✅ Answer Review

//? 1. B — A single accumulated value
//  Correct. reduce() always returns one value, not necessarily an array.

//? 2. B — No
//  Correct. reduce() does not mutate the original array; it builds and returns a new value.

//? 3. B — The first element is used as the accumulator, iteration starts from the second
//  Exactly right. That’s why it’s safer to always provide an initialValue.

//? 4. B — 65
//  Computation:
//  • Start with initialValue = 5.
//  • 5 + 10 = 15.
//  • 15 + 20 = 35.
//  • 35 + 30 = 65. ✅

//? 5. C — Summing values or building an aggregated object
//  Correct. That’s exactly the type of task `reduce()` is designed for.

//* 📊 Summary:
//  You have shown strong understanding of how `reduce()` works, including accumulators, initial values, and real-world use cases.


//TODO  🪞 Step 4: Reflection & Journal — Array.reduce()

//* Answer these prompts in your own words to reinforce your learning:

//? 1. What part of the `reduce()` method felt most intuitive to you?
//  (Example: Using it to sum numbers felt very natural.)
//! Answer: The most intuitive part was to understand how `reduce()` returns after executing its callback on every element.

//  ‼️ Feedback: ✅ Nice — yes, the core intuition of reduce() is that after looping through the entire array, you’re left with one final value from all those iterations. That’s its biggest difference compared to methods like map() or filter().

//? 2. What part was least intuitive or required extra effort to understand?
//  (Example: Remembering to provide an initialValue and why it’s important.)
//! Answer: The least intuitive part was to understand the real-world application of `reduce()` and how I can use this method to build an aggregated object.

//  ‼️ Feedback: ✅ That’s a very common hurdle — many learners first think of reduce() only for sums. But once you see it building objects, groups, or even nested structures, it really clicks as a powerful tool.

//? 3. Can you think of a real or hypothetical scenario where `reduce()` would be the most appropriate choice over other array methods?
//  (Example: Building an object that groups expenses by category in a finance app.)
//! Answer: A scenario where `reduce()` is the most appropriate choice over other array methods is when I need to process an array to produce a single cumulative result, rather than a new array or a subset. This is what makes `reduce()` distinct from `map()` and `filter()`, which always return arrays.

//  ‼️ Feedback: ✅ Excellent — that’s exactly the distinction. reduce() shines when the end goal is a single result (like a sum, average, object, string, or nested structure), while map() and filter() always produce arrays.

//? 4. If you were explaining `reduce()` to a beginner in 2–3 sentences, how would you describe it?
//  (Example: "reduce() goes through an array and combines all the elements into one single value. You decide how they are combined using a callback function. It can be used for sums, building objects, or other aggregations.")
//! Answer: The `reduce()` method in JavaScript takes an array and processes each element with a function to combine them into a single value, like adding up all numbers in an array. You provide a function that tells `reduce()` how to integrate each value with the previous result. The final single value (like a sum, product, or merged object) is returned after checking every element.

//  ‼️ Feedback: ✅ Perfect explanation — clear, concise, and beginner-friendly. You showed both the mechanics (iterating + combining) and the purpose (producing one final value).


//TODO  🧩 Step 5: Exercises — `Array.reduce()`

//* We’ll start simple and build up gradually.

//? Exercise 1: Sum of Numbers

const numbers3 = [5, 10, 15];

// Use `reduce()` to calculate the sum of all numbers.

//! Solution:

const sum3 = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum3);

//  ‼️ Feedback:
//  ✅ Perfect — your Solution 1 is correct!
//  • You gave reduce() an initialValue of 0, which is best practice.
//  • The callback adds each number to the accumulator.
//  • The final result is the sum of all numbers.

//? Exercise 2: Multiply All

const nums = [2, 3, 4];

// Use `reduce()` to calculate the product (2 * 3 * 4 = 24).

//! Solution:

const product = nums.reduce((acc, num) => acc * num);
console.log(product);

//  ‼️ Feedback:
//  ✅ Spot on! Your Solution 2 works perfectly.
//  • Since you didn’t provide an initialValue, the first element (2) is used as the accumulator.
//  • Then:
//      • Step 1: 2 * 3 = 6
//      • Step 2: 6 * 4 = 24
//  • Final result = 24 🎉

//? Exercise 3: Find Maximum

const values = [7, 12, 3, 21, 9];

// Use `reduce()` to find the maximum number in the array.

//! Solution:

const maximum = values.reduce((acc, val) => acc > val ? acc : val)
console.log(maximum);

//  ‼️ Feedback:
//  ✅ Excellent — your Solution 3 is correct and clean.
//  Here’s why it works:
//  • The reducer compares the current accumulator (acc) with the current value (val).
//  • It always returns the larger of the two.
//  • After the loop finishes, the accumulator holds the maximum value.

//? Exercise 4: Word Count

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Use `reduce()` to build an object that counts how many times each word appears.

//! Solution:

const counts = words.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});
console.log(counts);

//  ‼️ Feedback:
//  ✅ Brilliant — your Solution 4 is absolutely correct!
//  Here’s the breakdown:
//  • Start with an empty object {} as the initial accumulator.
//  • For each word:
//      • If it already exists in acc, increment its count.
//      • Otherwise, initialize it at 1.
//  • Return the updated object each iteration.

//? Exercise 5: Group by Category

const items = [
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Apple', category: 'Food' },
    { name: 'Pants', category: 'Clothing' },
    { name: 'Bread', category: 'Food' }
];

// Use `reduce()` to group items by category into an object like:

// {
//     Clothing: ['Shirt', 'Pants'],
//     Food: ['Apple', 'Bread']
// };

//! Solution:

const group = items.reduce((acc, items) => {
    acc[items.category] = (acc[items.category] || 0) + items.name;
    return acc;
}, {});
console.log(group);

//  ‼️ Feedback:

//* Great instinct—there are two small issues:

//? 1. You named the reducer parameter `items`, which shadows the outer `items` array. Use `item` (singular) or destructure.
//? 2. You’re adding strings to `0` with `+`. You want an **array per category** and then `.push(name)`.

//* Here’s a clean fix:

const group2 = items.reduce((acc, { name, category }) => {
  (acc[category] ??= []).push(name); // create array if missing, then push
    return acc;
}, {});

console.log(group2);

// Expected:
// { Clothing: ['Shirt', 'Pants'], Food: ['Apple', 'Bread'] }

//* If you prefer without `??=`:

const group3 = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item.name);
    return acc;
}, {});

console.log(group3);


//TODO 🧩 Step 6: Project Integration — Order Summary Aggregator

//* 🖼️ Scenario
//  You are building the backend logic for a small shop’s checkout page. The UI needs a compact summary built from raw cart items.


//TODO 📝 Step 7: Exit Ticket — Array.reduce().

//* Answer briefly (one line each is fine):
//? 1. What does `reduce()` return after processing the whole array?
//! Answer: After processing the whole array, the result for the `reduce()` method is a single value.

//  ‼️ Feedback:
//  ✅ Your Answer: After processing the whole array, the result for the reduce() method is a single value.
//  💡 Correct! That’s the key difference from map() or filter().

//? 2. Why is providing an initialValue to `reduce()` generally recommended?
//! Answer: It is recommended to provide an initialValue because it will be used as a starting value for the accumulator.

//  ‼️ Feedback:
//  ✅ Correct! Nicely put — and to add: giving an initialValue also prevents errors on empty arrays and ensures the accumulator has the right type.

//? 3. If you omit initialValue, what becomes the initial accumulator and where does iteration start?
//! Answer: If I omit to provide an initialValue, the first element becomes the initial accumulator, and iteration starts from the second element.

//  ‼️ Feedback:
//  ✅ Exactly right! That’s the precise behavior — which is why it can sometimes lead to surprises if the first element isn’t the right type.

//? 4. Name one real-world task where `reduce()` is a better fit than `map()` or `filter()`.
//! Answer: A real-world task where reduce() is clearly a better fit than map() or filter() is calculating the total sum of values in a list. For example, if you have a list of daily sales amounts and want to know the total sales for the week, reduce() is the ideal tool because it accumulates all values into a single result—something neither map() (which produces a new list) nor filter() (which selects a subset of items) are designed to do.

//  ‼️ Feedback:
//  ✅ Excellent example — sales totals are a classic real-world use case where reduce() shines. You explained clearly why map() and filter() wouldn’t be the right tools.

//? 5. Given this code, what is the result and why?

const arr = [2, 3, 4];
const res = arr.reduce((acc, n) => acc * n, 1);

//! Answer: The result is 24 because it correctly uses the reduce() method to calculate the product of all elements in the array, 1 * 2 * 3 * 4 = 24. The accumulator (acc) starts at 1 (the initial value). The function multiplies each element by the accumulator as it iterates through the array.

//  ‼️ Feedback:
//  ✅ Perfectly explained!
//  • With initialValue = 1, the accumulator starts at 1.
//  • Iterations:
//      • 1 * 2 = 2
//      • 2 * 3 = 6
//      • 6 * 4 = 24
//  • Final result = 24.
