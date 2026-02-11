const LogicPractice = () => {
  // Phase 1: Number Logic
  const evenOdd = 7 % 2 === 0 ? "Even" : "Odd";

  const sumOfDigits = 123
    .toString()
    .split("")
    .reduce((a, b) => a + Number(b), 0);

  const primeCheck = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Phase 2: String Logic
  const reverseString = "React".split("").reverse().join("");

  const vowelCount = "developer".match(/[aeiou]/gi)?.length || 0;

  const isPalindrome = (str) =>
    str === str.split("").reverse().join("");

  // Phase 3: Array Logic
  const largestNum = Math.max(2, 9, 4, 1);

  const uniqueArray = [...new Set([1, 2, 2, 3, 3])];

  const findMissing = (arr, n) =>
    (n * (n + 1)) / 2 - arr.reduce((a, b) => a + b, 0);

  // Phase 4: Object & Frequency
  const charFrequency = (str) => {
    const freq = {};
    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
  };

  const groupByRole = () => {
    const users = [
      { name: "A", role: "admin" },
      { name: "B", role: "user" },
    ];

    return users.reduce((acc, cur) => {
      acc[cur.role] = acc[cur.role] || [];
      acc[cur.role].push(cur);
      return acc;
    }, {});
  };

  const mostFrequent = (arr) => {
    const freq = {};
    let max = 0, res;

    arr.forEach(num => {
      freq[num] = (freq[num] || 0) + 1;
      if (freq[num] > max) {
        max = freq[num];
        res = num;
      }
    });

    return res;
  };

  // Phase 5: Mixed Logic
  const fizzBuzz = () => {
    const res = [];
    for (let i = 1; i <= 15; i++) {
      res.push(
        i % 15 === 0 ? "FizzBuzz" :
        i % 3 === 0 ? "Fizz" :
        i % 5 === 0 ? "Buzz" : i
      );
    }
    return res;
  };

  const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) return [i, j];
      }
    }
    return [];
  };

  const flattenArray = (arr) => arr.flat(Infinity);

  return (
    <div style={{ padding: "20px", lineHeight: "1.8" }}>
      <h2>Logic Practice – Single Page</h2>

      <h3>Even / Odd: {evenOdd}</h3>
      <h3>Sum of Digits: {sumOfDigits}</h3>
      <h3>Prime (7): {primeCheck(7) ? "Yes" : "No"}</h3>

      <h3>Reverse String: {reverseString}</h3>
      <h3>Vowel Count: {vowelCount}</h3>
      <h3>Palindrome (madam): {isPalindrome("madam") ? "Yes" : "No"}</h3>

      <h3>Largest Number: {largestNum}</h3>
      <h3>Unique Array: {uniqueArray.join(", ")}</h3>
      <h3>Missing Number: {findMissing([1, 2, 4, 5], 5)}</h3>

      <pre>Char Frequency: {JSON.stringify(charFrequency("hello"), null, 2)}</pre>
      <pre>Group By Role: {JSON.stringify(groupByRole(), null, 2)}</pre>
      <h3>Most Frequent: {mostFrequent([1, 2, 2, 3, 2])}</h3>

      <h3>FizzBuzz: {fizzBuzz().join(", ")}</h3>
      <h3>Two Sum: {twoSum([2, 7, 11, 15], 9).join(", ")}</h3>
      <h3>Flatten Array: {flattenArray([1, [2, [3, 4]]]).join(", ")}</h3>
    </div>
  );
};

export default LogicPractice;
