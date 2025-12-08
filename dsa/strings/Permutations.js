function getAllPermutations(str){
    console.log(`Str: ${str}`);
    if(str.length === 0) return [''];

    let permutations = [];

    for (let i=0; i < str.length; i++){
        let fixedChar = str[i];
        let remainingChars = str.slice(0, i) + str.slice(i + 1);
        console.log(`Fixed Char: ${fixedChar}, Remaining Permutation: ${remainingChars}`);

        let remainingPermutations = getAllPermutations(remainingChars);

        for (let perm of remainingPermutations){
            permutations.push(fixedChar + perm);
        }
    }
    return permutations;
}

// Example usage:
let inputStr = "abc";
let result = getAllPermutations(inputStr);
console.log(`All permutations of "${inputStr}":`, result);

