/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

*/

// .trim - to remove white spaces at the beginning & end of string
// .split(" ") - to delimit based on single space


let s = "   fly me   to   the moon  ";  

function getLenghtOfLastWord() {
 
   let  wordArr = s.trim().split(" "); 
   console.log(wordArr);
   let lastWord = wordArr.length-1;
   let lenLastWord = wordArr[lastWord].length;

   console.log("Length of last word is "+lenLastWord);
    
}

getLenghtOfLastWord(s);