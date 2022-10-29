function condenseArray(nums) {
    let condensed = [];
    let secondSum = [];

    for (let i = 0; i < nums.length; i++) {
        condensed[i] = nums[i] + nums[i + 1];

        console.log(condensed[i]);

    }


}
condenseArray([
    5,
    0,
    4,
    1,
    2
]);
