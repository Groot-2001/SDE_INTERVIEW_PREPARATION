// leetcode link: https://leetcode.com/problems/repeat-and-missing-number-array/

// brute force approach
var brutRepeatMissingNumber = function(nums) {
    let n = nums.length;
    let repeat, missing;
    for (let i=1; i<=n; i++){
        let freq=0;
        for(let j=0; j<n; j++){
            if (nums[j]===i){
                freq++;
            }
        }

        if(freq === 0){
            missing = i;
        } else if (freq > 1){
            repeat = i;
        }
    }
    return [repeat, missing];
}

// optimized approach using HashMap
var repeatMissingNumber = function(nums) {
    let n = nums.length;
    let freqMap = new Map();
    let repeat, missing;
    for (let i=0; i<n; i++){
        freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
    }
    for (let i=1; i<=n; i++){
        if (!freqMap.has(i)){
            missing = i;
        } else if (freqMap.get(i) > 1){
            repeat = i;
        }
    }
    return [repeat, missing];
}

// Example usage:
console.log(brutRepeatMissingNumber([3,1,3])); // Output: [3,2]
// Time Complexity: O(n^2)
// Space Complexity: O(1)
console.log(repeatMissingNumber([1,2,2,4])); // Output: [2,3]
// Time Complexity: O(n)
// Space Complexity: O(n)
