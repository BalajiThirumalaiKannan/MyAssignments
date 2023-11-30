/*
Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/

let inputArr = [1, 2, 3, 4, 2, 5, 6, 1, 6];


function arrRemoveDuplicates() {
    
    for (let i = 0; i < inputArr.length; i++) {  
        
        for (let j = i+1; j < inputArr.length; j++) {
            
            if (inputArr[i] === inputArr[j]) {

               inputArr.splice(j,1);

            }
            
        }      

    }

    let resultArray = [...inputArr];

    console.log(resultArray);

}

arrRemoveDuplicates(inputArr);


