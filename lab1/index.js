/*Oleksii Bilko, problem 1 (leetcode, Easy)

Task:
Given an array of integers nums and an integer target, r
eturn indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let number = [];

    for(let i = 0; i < nums.length - 1; i++)
    {
        for(let j = i + 1; j < nums.length; j++)
        {
            if(nums[i] + nums[j] === target)
            {
                number.push(i, j);
                return number;
            }
        }
    }
};

console.log('Problem 1');
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]
console.log('\n');


/*Oleksii Bilko, problem 2 (leetcode, Medium)

Task:
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"*/

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    if (s.length < 2) return s;

    let max = '';

    for (let i = 0; i < s.length; i++) {
        let left = getStr(i, i, s);
        let right = getStr(i, i + 1, s);
        let currMax = left.length >= right.length ? left : right;
        max = currMax.length > max.length ? currMax : max;
    }
    
    return max;
};
  
function getStr(left, right, str) {
    let curr = '';

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      curr = str.substring(left, right + 1);
      left -= 1;
      right += 1;
    }
    
    return curr;
};

console.log('Problem 2');
console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
console.log('\n');


/* Hushchin Dmytro, problem 3 (leetcode, Medium)

Task:
Given an integer array nums, find the subarray 
with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let prev = 0;
    let max = -Infinity;
  
    for (let i = 0; i < nums.length; i++) {
      // Compare previous contiguous sum with current number
      prev = Math.max(prev + nums[i], nums[i]);
      // Check if the current prev is the greatest sum 
      max = Math.max(max, prev);
    }
    return max;
}

console.log('Problem 3');
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5,4,-1,7,8])); // 23
console.log('\n');
