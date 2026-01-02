// function TwoSum(nums, target) {
//     // =====================================================
//     // TEST CASE: [2,7,11,15] target=9
//     // i=0: complement=7? ❌ map={} → map={2:0}
//     // i=1: complement=2? ✅ map has 2! → return [0,1] ✓
//     // =====================================================

//     const numMap = new Map();  // 📍 Stores: {element of an array → its index}

//     for (let i = 0; i < nums.length; i++) {
//         // ┌─────────────────────────────────────────────┐
//         // │ STEP 1: Calculate "what I NEED"             │
//         // │ complement = target - nums[i]               │
//         // │ Example: nums[i]=2 → need 9-2=7              │
//         // └─────────────────────────────────────────────┘
//         const complement = target - nums[i];

//         // ┌─────────────────────────────────────────────┐
//         // │ STEP 2: "Have I SEEN this number before?"   │
//         // │ Check if map already has complement         │
//         // │ Visual:                                     │
//         // │ i=0: map={} → has(7)? ❌                    │
//         // │ i=1: map={2:0} → has(2)? ✅ → FOUND!        │
//         // └─────────────────────────────────────────────┘
//         if (numMap.has(complement)) {
//             // 🎯 PAIR FOUND!
//             // Return [index_of_first, index_of_second]
//             // Visual: [map.get(2), 1] = [0,1]
//             return [numMap.get(complement), i];
//         }

//         // ┌─────────────────────────────────────────────┐
//         // │ STEP 3: "REMEMBER this number for later"    │
//         // │ Store AFTER checking → handles duplicates   │
//         // │ Visual progression:                         │
//         // │ After i=0: map = {  2 → 0  }                │
//         // │ After i=1: map = {  2 → 0, 7 → 1} (not reached)
//         // └─────────────────────────────────────────────┘
//         numMap.set(nums[i], i);    // 🔄 Map grows: {seen → index}
//     }

//     // ┌─────────────────────────────────────────────┐
//     // │ NO PAIR FOUND → return empty array []       │
//     // │ Visual: [1,2,3] target=10 → loop ends here  │
//     // └─────────────────────────────────────────────┘
//     return [];
// }


// console.log(TwoSum([3, 3, 4, 5], 6)); // [0, 1] (duplication)
// console.log(TwoSum([-1, 2, 4, -3], 1)); // [0, 1] (negative values)
// console.log(TwoSum([], 5)); // [] (empty array)
// console.log(TwoSum([0, 4, 3, 0], 0)); // [0, 3] (solution exists with zeros)
// console.log(TwoSum([1, 2, 3, 4], 10)); // [] (no solution)
// console.log(TwoSum([1, 2, 3, 4, 5], 9)); // [3, 4] (normal case)

const arr = [1,2,3,5,8];
const target = 9;

// what we want is
// x + y = z
// x = arr[i] , y = arr[i] , z = integer

// let map = new Map();
// for(let i=0; i<arr.length; i++){
//     console.log("map:",map);
//     const y = target - arr[i];
//     console.log("Y:",y);
//     if(map.has(y)){
//         console.log("Found Indices:",[map.get(y),i]);
//         return [map.get(y),i]
//     }
//     map.set(arr[i],i);
// }

// let map = new Map();
// for(let i=0;i<arr.length;i++){
//    if(!map.has(arr[i])){
//     map.set(arr[i],i);
//    }
// }
// console.log("map:",map);
// for(let j=0; j<arr.length; j++){
//     let y = target - arr[j];
//     console.log("target-x:",target - arr[j]);
//     console.log("in map y is present?:",map.has(y));
//     if(map.has(y)){
//         console.log([map.get(y),j])
//         return [map.get(y),j];
//     }
// }

// if array is sorted
let left = 0;
let right = arr.length - 1;

while(left < right){
    let current_sum = arr[left] + arr[right];
    if(current_sum === target){
        console.log([left,right]);
        return;
    }else if(current_sum < target){
        left += 1;
    }else {
        right -= 1;
    }
    return [];
}

// Time Complexity: O(n)
// Space Complexity: O(1)