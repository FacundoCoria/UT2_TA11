function duplicates(nums) {
    const uniqueNums = new Set();
    const duplicates = new Set();

    nums.forEach(num => {
        if (uniqueNums.has(num)) {
            duplicates.add(num);
        } else {
            uniqueNums.add(num);
        }
    });

    console.log(duplicates.size);
}

duplicates([1, 2, 2, 3, 4, 4, 4, 5]);
