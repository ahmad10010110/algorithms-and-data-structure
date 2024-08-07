/** 
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring(*') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6]
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8|
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
**/

function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let end = 0;
  let seen = {};

  while (end < str.length) {
    let char = str[end];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, end - start + 1);
    seen[char] = end + 1;
    end++;
  }
  return longest;
}
