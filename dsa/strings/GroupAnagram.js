const variationGroupAnagaram = (strs) =>{
    const map = {};
    for (let word of strs){
        let key = word.split('').sort().join('');
        if (!map[key]) map[key]=[];
        map[key].push(word);
    }
    return Object.values(map);
}

const GroupAnagram = (strs) => {
    const map = new Map();
    for (let word of strs){
        let key = word.split('').sort().join('');
        if(!map.has(key)){
            map.set(key,[]);
        }

        map.get(key).push(word);
    }

    return Array.from(map.values());
}

const isGroupAnagram = (strs) => {
    const map = new Map();
    for (let word of strs){
        let countArr = new Array(26).fill(0);

        for (let char of word){
            countArr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let key = countArr.join('#');

        if(!map.has(key)){
            map.set(key,[]);
        }

        map.get(key).push(word);
    }

    return Array.from(map.values());
}

console.log(GroupAnagram(["act","tac","bat","tab","mat"])); //[ [ 'act', 'tac' ], [ 'bat', 'tab' ], [ 'mat' ] ]
//Time Complexity: O(NKlogK) where N is number of words and K is max length of a word
// Space Complexity: O(NK)
console.log(isGroupAnagram(["act","tac","bat","tab","mat"])); //[ [ 'act', 'tac' ], [ 'bat', 'tab' ], [ 'mat' ] ]
// Time Complexity: O(NK) where N is number of words and K is max length of a word
// Space Complexity: O(NK)
console.log(variationGroupAnagaram(["act","tac","bat","tab","mat"])); //[ [ 'act', 'tac' ], [ 'bat', 'tab' ], [ 'mat' ] ]
