function createHashMapPollyfill() {
    // Simple HashMap Pollyfill using JavaScript Object
    const _data = {};

    return {
        has(key) {
            // const safeKey = key === null ? '__NULL__': key.toString();
            return key in _data;
        },

        get(key){
            // const safeKey = key === null ? '__NULL__': key.toString();
            return _data[key];
        },
        set (key, val){
            // const safeKey = key === null ? '__NULL__': key.toString();
            _data[key] = val;
        },
        clear(){
            Object.keys(_data).forEach(key => delete _data[key]);
        },

        getSize(){
            return Object.keys(_data).length;
        }
    }
}



function TwoSum(nums, target) {
    // ❌ Native Map (ES6+ only)
    // const numMap = new Map();

    // ✅ Polyfill works everywhere
    const numMap = createHashMapPollyfill();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(nums[i], i);
    }
    return [];
}

// Test it!
console.log(TwoSum([2,7,11,15], 9)); // [0,1] ✅ Works perfectly
