/**
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Examples:
areThereDuplicates(1, 2, 3) // false areThereDuplicates(1, 2, 2) // true areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
**/

function areThereDuplicates(...args) {
  // Create a frequency counter object
  const frequencyCounter = {};

  // Iterate through the arguments
  for (let arg of args) {
    // If the argument exists in the frequency counter, return true
    if (frequencyCounter[arg]) {
      return true;
    }
    // Otherwise, add the argument to the frequency counter
    frequencyCounter[arg] = 1;
  }

  // If no duplicates found, return false
  return false;
}
