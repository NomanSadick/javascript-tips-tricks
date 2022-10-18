// Remove duplicate array from an array
// short cut way
const names = [1, 3, 7, 1, 9, 3, 44, 55, 7, 27, 9, 55];
console.log([...new Set(names)]);