/** Definition of a Closure:

A closure is created when a function is defined inside another function, 
and the inner function has access to the outer function's variables and parameters.
The inner function "closes over" the environment in which it was created, 
retaining access to its parent scope even after the parent function has finished executing.

**/

function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Outputs: "I am from the outer function"

/** 
 * Usefulness of Closures:

Data Encapsulation: Closures allow for the encapsulation of variables within a function, 
providing a level of data privacy. The variables in the outer function are not directly
 accessible from outside, but the inner function has access to them.

Factory Functions: Closures are often used in the creation of factory functions. 
These functions generate and return other functions with specific behavior based on the 
environment in which they were created.

Callback Functions: Closures are commonly employed in callback functions. 
The inner function can reference variables from the outer function, allowing for more 
dynamic and flexible callback behavior.

Partial Application and Currying: Closures enable partial application and currying by 
allowing functions to be partially applied with specific arguments. This is useful in 
functional programming for creating more reusable and composable functions.

Maintaining State: Closures can be used to maintain state between function calls. 
The inner function can modify and retain the state of variables declared in the outer
 function across multiple invocations.

Event Handlers: Closures are frequently used in event handlers, where a function 
defined within another function responds to events and has access to the variables in the outer function.

 */
