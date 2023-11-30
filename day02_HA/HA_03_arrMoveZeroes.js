/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]

*/


// Get input array
// Use for loop & if condition check array element value is equal to zero and remove element using splice
// Use another for loop to add zeroes at the end of array


let nums = [0,1,0,3,12];

function moveZeroes(){

    let addZeroes = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i]==0) {
        nums.splice(i,1);
        i--;
        addZeroes++;
    }
}
    for (let j = 0; j < addZeroes; j++) {
        nums.push(0);
        
    }
console.log(nums);

}

moveZeroes(nums);