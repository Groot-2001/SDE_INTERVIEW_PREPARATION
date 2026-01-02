// Anagram means a word or phrase formed by rearranging the letters of a different word or phrase.
// words are anagrams if they contain the same characters in the same frequency.
// For example, "listen" and "silent" are anagrams of each other.
// here l =1, i=1, s=1, t=1, e=1, n=1 in both words.
// hence they are anagrams.

// function isAnagram(str1, str2) {
//     // Edge case: If lengths differ, they can't be anagrams
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const charCountMap = new Map();
//     // Count frequency of each character in str1
//     for (let char of str1) {
//         charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
//     }
//     // Decrease frequency based on str2
//     for (let char of str2) {
//         if (!charCountMap.has(char)) {
//             return false; // char in str2 not found in str1
//         }
//         charCountMap.set(char, charCountMap.get(char) - 1);
//         if (charCountMap.get(char) < 0) {
//             return false; // More occurrences in str2 than in str1
//         }
//     }
//     return true; // All character counts matched
// }

// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world"));   // false

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function permutations(str){
    let result = [];

    function generate(charArray, fixed_position){
        if(fixed_position === charArray.length - 1){
            result.push(charArray.join(''));
            return;
        }

        for(let i=fixed_position; i< charArray.length; i++){
            swap(charArray, i, fixed_position);
            generate(charArray, fixed_position + 1);
            swap(charArray, i, fixed_position);
        }
    }

    generate(str.split(''), 0);
    return result;
}

const isValidAnagram = function(s,t){

    if(s.length !== t.length) return false;

    let freq = {};

    for(let ch of s){
        freq[ch] = (freq[ch]||0)+1;
    }

    console.log("frequencyA:",freq);

    for(let ch of t){
        if(!freq[ch]) return false;
        freq[ch]--;
    }
    console.log("frequencyB:",freq);

    return true;

}

console.log(isValidAnagram("racecar","carrace")); //true
console.log(isValidAnagram("jar","jam")); //false

console.log(permutations("abc")); // ["abc", "acb", "bac", "bca", "cab", "cba"]
// console.log(permutations("ab"));  // ["ab", "ba"]
// console.log(permutations("a"));   // ["a"]
// Time Complexity: O(n)
// Space Complexity: O(n)