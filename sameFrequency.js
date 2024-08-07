/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:
sameFrequency (182, 281) // true 
sameFrequency (34,14) // false 
sameFrequency (3589578, 5879385) // true 
sameFrequency (22,222) // false
**/

function sameFrequency(num0, num1) {
  frequency0 = [0,0,0,0,0,0,0,0,0,0];
  frequency1 = [0,0,0,0,0,0,0,0,0,0];
  strNum0 = num0.toString();
  strNum1 = num1.toString();
  
  for (let i = 0; i < strNum0.length ; i++) {
    frequency0[Number(strNum0[i])]++;
  }
  for (i = 0; i < strNum1.length ; i++) {
    frequency1[Number(strNum1[i])]++;
  }
  for (i = 0; i < frequency0.length; i++) {
    if (frequency0[i] != frequency1[i]) return false;
  }
  return true;
}