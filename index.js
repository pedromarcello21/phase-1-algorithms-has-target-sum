function hasTargetSum(array, target) {
  // Write your algorithm here
  // given an array, goes through combinations of any two elements to see if sum of
  // them equals target

for(let i = 0; i<array.length;i++){
  for(let j = i+1;j<array.length; j++){
    if (array[i] + array[j] == target){
      return true
    }
  }}
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  takes first element of array
  for rest of elements if that element plus the first quals target, then true
*/

/*
  Add written explanation of your solution here
  for each element in an array, loop through the rest of the array.  This achieves
  looking over all combinations.  If the value from the outer loop and the value from the inner
  loop sums to the target, return true.  Don't return false within the inner loop
  because you want to go through all elements in outerloop.  return false outside of the innerloop to ensure this
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
