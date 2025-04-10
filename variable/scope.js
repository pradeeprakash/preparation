/* 

 scope ?
 Global Scope:

 */

let globalVar = 42;

function myFunction() {
  console.log(globalVar); // Accessing the globalVar from within a function
}

myFunction(); // Output: 42

// Local Scope:

function outerFunction() {
  let outerVar = "I am local to outerFunction";

  function innerFunction() {
    let innerVar = "I am local to innerFunction";
    console.log(outerVar); // Accessing outerVar from innerFunction
  }

  innerFunction();
  // console.log(innerVar); // This will result in an error because innerVar is not defined in the outer scope
}

outerFunction();

/* 

Block Scope
  Variables declared with let and const inside a block (e.g., within an if statement or for loop) have block scope.
  They are only accessible within that block.
  Block scope variables do not "leak" into the surrounding code.

*/

if (true) {
  let blockVar = "I am local to this block";
  console.log(blockVar); // Accessing blockVar within the block
}

// console.log(blockVar); // This will result in an error because blockVar is not defined outside the block
