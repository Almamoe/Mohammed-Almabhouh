function duplicateNumbers1(numbers) {
    const counts = {};
    numbers.reduce((counts, num) => {
        counts[num] = counts[num]? counts[num] + 1 : 1;
        return counts;
    }, counts);

    const duplicates = {};
    for (const num in counts) {
        if (counts[num] > 1){
            duplicates[num] = counts [num];
        }
    }
    return duplicates;
}

console.log(duplicateNumbers1([1, 2, 3, 2, 4, 3, 5, 3])); // {2: 2, 3: 3}
console.log(duplicateNumbers1([1, 2, 3, 4, 5])); // {}