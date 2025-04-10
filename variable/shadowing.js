// What is variable shadowing ?
// Variable shadowing occurs in programming when a variable declared in a more localized scope
let x = 10; // Global variable

function shadowingExample() {
  let x = 5; // Local variable, shadowing the global 'x'
  console.log(x); // This will print the local 'x' with the value 5
}

shadowingExample();
console.log(x); // This will print the global 'x' with the value 10
