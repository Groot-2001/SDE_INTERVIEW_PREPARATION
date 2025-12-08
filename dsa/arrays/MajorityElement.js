// leetcode link: https://leetcode.com/problems/majority-element/

// brute force approach
var brutMajorityElement = function(nums) {
    let n = nums.length;

    for (let i=0; i<n; i++){
        let freq=0;
        for(let j=0; j<n; j++){
            if (nums[i]===nums[j]){
                freq++;
            }
        }

        if(freq > n/2){
            return nums[i];
        }
    }
};

// sorting approach
var sortMajorityElement = function(nums) {
    nums.sort((a,b) => a-b);
    return nums[Math.floor(nums.length/2)];
}


// optimized approach using HashMap
var majorityElement = function(nums) {
    let n = nums.length;
    let freqMap = new Map();

    for (let i=0; i<n; i++){
        freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
        if (freqMap.get(nums[i]) > n/2){
            return nums[i];
        }
    }
}

// moores voting algorithm
var majorityElementMoore = function(nums) {
    let count = 0;
    let candidate = 0;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
};

// Example usage:
console.log(brutMajorityElement([3,2,3])); // Output: 3
// Time Complexity: O(n^2)
// Space Complexity: O(1)
console.log(majorityElement([2,2,1,1,1,2,2,2])); // Output: 2
// Time Complexity: O(n)
// Space Complexity: O(n)
console.log(sortMajorityElement([3,2,3])); // Output: 3
// Time Complexity : O(n log n)
// Space Complexity: O(1)
console.log(majorityElementMoore([3,2,3])); // Output: 3
// Time Complexity: O(n)
// Space Complexity: O(1)