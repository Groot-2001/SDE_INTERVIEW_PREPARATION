// leetcode link: https://leetcode.com/problems/contains-duplicate/description/

//  Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation:
// All elements are distinct.

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const bruteForce = function(arr){
   arr.sort((a,b)=>a -b); //O(nLogn)
   for(let i=0; i<arr.length; i++){ //O(n)
     if(arr[i] == arr[i+1]){
        return true;
     }
   }
   return false;
}

const hasDuplicates = function(nums){
    return nums.length !== new Set(nums).size;
}

const containsDuplicate = function(nums) {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            return true;
        }
        map.set(nums[i]);
    }

    return false;
};

console.log(bruteForce([1,1,1,3,3,4,3,2,4,2])); //true
console.log(bruteForce([1,2,3,4])); // false
console.log(bruteForce([1,2,3,1])); // true
// Time Complexity: O(n) + O(nlogn) => O(nlogn)
// Space Complexity: O(1)

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); //true
// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(hasDuplicates([1,2,3,1])); // true
console.log(hasDuplicates([1,2,3,4])); // false
console.log(hasDuplicates([1,1,1,3,3,4,3,2,4,2])); //true