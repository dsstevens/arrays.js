var friends = ["Cory" , "Joseph" ,"Katie" , "Peggy"];
/* This method will remove the last element, 
return the element in the console output, and also remove the element
from the array 
Index positions: Cory = 0, Joseph = 1, Katie = 2, Peggy = 3 
*/
friends.pop();
console.log(friends);

var monthlyUtilities = [32, 78, 50, 65]
/* This method will remove the first element,
change the length of the array, and return the removed element 
in the console output
Index positions: 32 = 0, 78 = 1, 50 = 2, 65 = 3 
*/
monthlyUtilities.shift();
console.log(monthlyUtilities);

var sunny = [true, false, true, false]
/* This method will add the element(s) in paratheses after '.push'
to the end of the array and return the new value of the array
Index positions: true = 0, false = 1, true = 2, false = 3
 */
sunny.push(false);
console.log(sunny);
