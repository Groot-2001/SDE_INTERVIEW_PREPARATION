function TwoSum(nums, target) {
    // =====================================================
    // TEST CASE: [2,7,11,15] target=9
    // i=0: complement=7? ❌ map={} → map={2:0}
    // i=1: complement=2? ✅ map has 2! → return [0,1] ✓
    // =====================================================

    const numMap = new Map();  // 📍 Stores: {element of an array → its index}

    for (let i = 0; i < nums.length; i++) {
        // ┌─────────────────────────────────────────────┐
        // │ STEP 1: Calculate "what I NEED"             │
        // │ complement = target - nums[i]               │
        // │ Example: nums[i]=2 → need 9-2=7              │
        // └─────────────────────────────────────────────┘
        const complement = target - nums[i];

        // ┌─────────────────────────────────────────────┐
        // │ STEP 2: "Have I SEEN this number before?"   │
        // │ Check if map already has complement         │
        // │ Visual:                                     │
        // │ i=0: map={} → has(7)? ❌                    │
        // │ i=1: map={2:0} → has(2)? ✅ → FOUND!        │
        // └─────────────────────────────────────────────┘
        if (numMap.has(complement)) {
            // 🎯 PAIR FOUND!
            // Return [index_of_first, index_of_second]
            // Visual: [map.get(2), 1] = [0,1]
            return [numMap.get(complement), i];
        }

        // ┌─────────────────────────────────────────────┐
        // │ STEP 3: "REMEMBER this number for later"    │
        // │ Store AFTER checking → handles duplicates   │
        // │ Visual progression:                         │
        // │ After i=0: map = {  2 → 0  }                │
        // │ After i=1: map = {  2 → 0, 7 → 1} (not reached)
        // └─────────────────────────────────────────────┘
        numMap.set(nums[i], i);    // 🔄 Map grows: {seen → index}
    }

    // ┌─────────────────────────────────────────────┐
    // │ NO PAIR FOUND → return empty array []       │
    // │ Visual: [1,2,3] target=10 → loop ends here  │
    // └─────────────────────────────────────────────┘
    return [];
}


console.log(TwoSum([3, 3, 4, 5], 6)); // [0, 1] (duplication)
console.log(TwoSum([-1, 2, 4, -3], 1)); // [0, 1] (negative values)
console.log(TwoSum([], 5)); // [] (empty array)
console.log(TwoSum([0, 4, 3, 0], 0)); // [0, 3] (solution exists with zeros)
console.log(TwoSum([1, 2, 3, 4], 10)); // [] (no solution)
console.log(TwoSum([1, 2, 3, 4, 5], 9)); // [3, 4] (normal case)