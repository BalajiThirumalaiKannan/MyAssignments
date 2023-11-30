/*
Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 */

/*
/\s/g
/ is the Regular Expression delimiter. It marks the beginning and end of a pattern
\s matches all space characters: '\t', '\n', '\r', '\f', ' ', and a number of others
g means that the regex should match the string globally, so that str.replace will replace all occurrences of the pattern.
*/



str1 = 'hello';
str2 = 'world';

isAnagram();


function isAnagram() {
    
 // Removes spaces and convert into the lowercase letter

        str1 = str1.replace(/\s/g,'').toLowerCase();
        str2 = str2.replace(/\s/g,'').toLowerCase();

       // console.log(str1, str2);

// Split, Sort & Join the string 

        str1 = str1.split('').sort().join('');
        str2 = str2.split('').sort().join('');

        //console.log(str1, str2);

// check is Anagaram 

        if (str1 === str2) {

            console.log("Entered words are Anagram")

        } else{
            
            console.log("Entered words are not Anagram")
        }

}

