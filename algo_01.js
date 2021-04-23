// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Givens 
// - Only one valid answer exists 
// - nums will always be Array, and target will always be number 
// - 2 <= nums.length <= 1,000
// - -1,000,000,000 <= nums[i] <= 1,000,000,000 
// - -1,000,000,000 <= target <= 1,000,000,000 
// Examples
// Ex input: nums = [2,7,11,15], target = 9
// Ex output: [0,1]
// Ex input: nums = [3,2,4], target = 6
// Ex output: [1,2]
// Ex input: nums = [3,3], target = 6
// Ex output: [0,1]

const array1 = [1, 2, 7, 8, 11, 15];
const array = [-10, -5, -1, 1, 2, 3, 4, 5, 7, 9, 11, 13, 16];
const target1 = 9;
const target = 6;

const sum_o_nums = (array, target) => {
    const output = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            if (array[i] + array[j] === target ) {
                output.push([i, j]);
            }
        }
    }
    return output;
}

console.log("output is: ", sum_o_nums(array, target))