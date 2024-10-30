/* Unit Test 1:

"Multiplication" this function returns the product of two values.
Happy Path - Input the function with 3 and 5 expecting 15
Happy Path - Input the function with 3 and 5 expecting a number
UnHappy Path - Input the function with 3 and 5 and not expect 20. 
UnHappy Path - Input the function with a 3 and 5 and not expect a negative integer.
UnHappy Path - Input the function with a "letter" and number and expect an error */

const multiplication = (x, y) => {
  return x * y;
};

/* Unit Test 2:

"concatOdds" this function takes two arrays as inputs and returns a single array containing odd values.
Happy Path - Input the function with [3, 2, 1], [9, 1, 1, 1, 4, 15, -1] arrays and return odds [3, 1, 9, 15, -1].
UnHappy Path - Input the function with [3, 2, 1], [9, 1, 1, 1, 4, 15, -1] arrays and return evens [2, 4].
UnHappy Path - Input the function with [3, 2, 1], [9, 1, 1, 1, 4, 15, -1] arrays and return all integers [3, 2, 1], [9, 1, 1, 1, 4, 15, -1]. 
UnHappy Path - Input the function with [3, 2, 1], [9, 1, 1, 1, 4, 15, -1] arrays and return [-1]*/

const concatOdds = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);
  const odd = [];

  for (let num of newArr) {
    if (num % 2 !== 0 && odd.indexOf(num) === -1) {
      odd.push(num);
    }
  }
  return odd;
};

const arr1 = [3, 2, 1];
const arr2 = [9, 1, 1, 1, 4, 15, -1];

console.log(concatOdds(arr1, arr2));

// function concatOdds(arr1, arr2) {
//   const newArr = arr1.concat(arr2);
//   const newArr2 = newArr.filter((num, i) => {
//     if (num % 2 === 0) return false;
//     if (newArr.indexOf(num) !== i) return false;
//     return true;
//   });
//   return newArr2;
// }

/* Functional Test 1:


user hits checkout button
The user can sign in, create an account, or continue as guest
if they are signed in, takes them to checkout page, to pay now

if they are not signed in, give them the option to either create an account or continue as guest

if they want to create an account, click create an account link
create account, email/password information entered, email verification
sign them in, return to checkout cart, enter personal information, save information to account, pay now

if they want to continue as guest, enter information asked, hit pay now

if nothing is in cart, there is nothing to checkout
redirect to homepage with a click here to continue browsing



*/

module.exports = { multiplication, concatOdds };
