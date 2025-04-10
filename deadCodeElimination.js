/**
 * Dead Code Elimination Function
 * @param {string} code - The JavaScript source code
 * @returns {string} - The optimized JavaScript code with dead code removed
 */
function eliminateDeadCode(code) {
  // Split the code into lines for basic processing
  const lines = code.split("\n");

  // A set to track all used variables and functions
  const usedIdentifiers = new Set();

  // Step 1: Identify used identifiers
  lines.forEach((line) => {
    // Match function calls and variable usages
    const matches = line.match(/(\b[A-Za-z_][A-Za-z0-9_]*\b)\s*\(/g) || [];
    matches.forEach((match) => {
      const identifier = match.replace(/\s*\(/, ""); // Remove the parentheses
      usedIdentifiers.add(identifier);
    });

    // Match standalone variable references
    const variableMatches = line.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g) || [];
    variableMatches.forEach((variable) => {
      if (!["let", "const", "function", "=", "return"].includes(variable)) {
        usedIdentifiers.add(variable);
      }
    });
  });

  // Step 2: Remove unused variables and functions
  const optimizedLines = lines.filter((line) => {
    // Ignore lines without declarations
    if (
      !line.includes("let") &&
      !line.includes("const") &&
      !line.includes("function")
    ) {
      return true;
    }

    // Extract variable or function name
    const declarationMatch = line.match(
      /(?:let|const|function)\s+([A-Za-z_][A-Za-z0-9_]*)/
    );
    if (declarationMatch) {
      const declaredName = declarationMatch[1];
      return usedIdentifiers.has(declaredName);
    }

    return true; // Keep the line if it's not a declaration
  });

  // Return the optimized code
  return optimizedLines.join("\n");
}

// Example Code with Dead Code
const code = `
function usedFunction() {
    console.log("I am used");
}

function unusedFunction() {
    console.log("I am not used");
}

let unusedVar = 42;
let usedVar = 10;

console.log(usedVar);
usedFunction();
`;

// Eliminate Dead Code
const optimizedCode = eliminateDeadCode(code);

// Print the optimized code
console.log("Optimized Code:");
console.log(optimizedCode);
