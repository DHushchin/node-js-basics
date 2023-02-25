/*Oleksii Bilko, problem 1 (leetcode, Easy)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

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
var twoSum = function(nums, target) {
    var number = [];
    for(let i=0; i<nums.length - 1; i++)
    {
        for(let j = i+1; j<nums.length; j++)
        {
            if(nums[i]+nums[j]==target)
            {
                number.push(i, j);
                return number;
            }
        }
    }
};

/*Oleksii Bilko, problem 2 (leetcode, Medium)

Longest Palindromic Substring

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
var longestPalindrome = function(s) {
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
  
    while (left >= 0 && right < str.length && s[left] === str[right]) {
      curr = s.substring(left, right + 1);
      left -= 1;
      right += 1;
    }
    
    return curr;
};

