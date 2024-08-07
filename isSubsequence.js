/** 
Multiple Pointers - isSubsequence
Write a function called is Subsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true 
isSubsequence('sing', 'sting'); // true 
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)
Space Complexity - 0(1)

**/

function isSubsequence(subsequence, str) {
  let i = 0;
  let j = 0;
  while (i < subsequence.length && j < str.length) {
    if (subsequence[i] === str[j]) {
      i++;
    }
    j++;
  }
  return i === subsequence.length;
}
