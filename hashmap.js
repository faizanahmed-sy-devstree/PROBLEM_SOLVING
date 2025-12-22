// ===============================
// hashmap.js
// Extremely easy tasks for strings + hashmaps
// ===============================

// Task 1: Count characters in a string
// js doc
/**
 * Count how many times each character appears in the string
 */
function task1(str = "hello") {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (map.has(char)) {
      const value = map.get(char) ?? 0;
      map.set(char, value + 1);
    } else {
      map.set(char, 1);
    }
  }

  return map;
}

console.log("Task 1:", task1());

// Task 2: Check if a character exists
// js doc
/**
 * Check if the given character exists in the string
 */
function task2(str = "javascript", char = "a") {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], true);
  }

  if (map.has(char)) {
    return true;
  }
  return false;
}

console.log("Task 2:", task2());

// Task 3: Count words in a string
// js doc
/**
 * Count how many times each word appears
 */
function task3(str = "hi hello hi faizan") {
  const map = new Map();
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  return map;
}

console.log("Task 3:", task3());

// Task 4: Find first non-repeating character
// js doc
/**
 * Return the first character that appears only once
 */
function task4(str = "aabbcdd") {}

console.log("Task 4:", task4());

// Task 5: Check if two strings are anagrams
// js doc
/**
 * Check if both strings contain same characters
 */
function task5(str1 = "listen", str2 = "silent") {}

console.log("Task 5:", task5());

// Task 6: Count vowels using hashmap
// js doc
/**
 * Count how many times each vowel appears
 */
function task6(str = "education") {}

console.log("Task 6:", task6());

// Task 7: Find character with maximum frequency
// js doc
/**
 * Return the character that appears most times
 */
function task7(str = "aaabbc") {}

console.log("Task 7:", task7());

// Task 8: Remove duplicate characters
// js doc
/**
 * Remove duplicate characters from string
 */
function task8(str = "programming") {}

console.log("Task 8:", task8());

// Task 9: Check if string has all unique characters
// js doc
/**
 * Return true if all characters are unique
 */
function task9(str = "abcd") {}

console.log("Task 9:", task9());

// Task 10: Convert string to character frequency array
// js doc
/**
 * Convert string into array of { char, count }
 */
function task10(str = "banana") {}

console.log("Task 10:", task10());
