// Anagram means a word or phrase formed by rearranging the letters of a different word or phrase.
// words are anagrams if they contain the same characters in the same frequency.
// For example, "listen" and "silent" are anagrams of each other.
// here l =1, i=1, s=1, t=1, e=1, n=1 in both words.
// hence they are anagrams.

function isAnagram(str1, str2) {
    // Edge case: If lengths differ, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }
    const charCountMap = new Map();
    // Count frequency of each character in str1
    for (let char of str1) {
        charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }
    // Decrease frequency based on str2
    for (let char of str2) {
        if (!charCountMap.has(char)) {
            return false; // char in str2 not found in str1
        }
        charCountMap.set(char, charCountMap.get(char) - 1);
        if (charCountMap.get(char) < 0) {
            return false; // More occurrences in str2 than in str1
        }
    }
    return true; // All character counts matched
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false