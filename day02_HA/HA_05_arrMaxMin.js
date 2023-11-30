/*
Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1
*/

let nums = [34, 7, 21, 89, 54, 10, 91, 67];

let max = nums[0];
let min = nums[0];
let maxindex = 0;
let minindex = 0;

function arrMaxMin() {

    for (let i = 0; i < nums.length; i++) {
       
            if (nums[i] > max) {

                max = nums[i];
                maxindex = i;
                
            } else if (nums[i] < min) {
                 
                min = nums[i];
                minindex = i;
            }     
        
    }

    console.log("Max number is " +max+" and index position is " +maxindex);

    console.log("Min number is " +min+" and index position is " +minindex);
    
}

arrMaxMin(nums);