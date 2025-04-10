function jsonStringify(value) {
  // Handle primitive values (null, boolean, number, string)
  if (value === null) return "null";
  if (typeof value === "boolean" || typeof value === "number")
    return String(value);
  if (typeof value === "string") return `"${value}"`;

  // Handle Arrays
  if (Array.isArray(value)) {
    const elements = value.map((el) => jsonStringify(el) || "null");
    return `[${elements.join(",")}]`;
  }

  // Handle Objects
  if (typeof value === "object") {
    const keys = Object.keys(value);
    const keyValuePairs = keys
      .map((key) => {
        const val = jsonStringify(value[key]);
        return val !== undefined ? `"${key}":${val}` : undefined;
      })
      .filter((pair) => pair !== undefined);

    return `{${keyValuePairs.join(",")}}`;
  }

  // Return undefined for unsupported types (functions, symbols, etc.)
  return undefined;
}

// Example Usage
const obj = {
  name: "Pradeep",
  age: 26,
  isDeveloper: true,
  hobbies: ["Coding", "Reading"],
  address: { city: "Bengaluru", country: "India" },
  nullValue: null,
};

console.log(jsonStringify(obj)); // Should produce the same result as JSON.stringify(obj)
console.log(JSON.stringify(obj)); // Built-in JSON.stringify for comparison
