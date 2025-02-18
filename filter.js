const b = [2, 3, 4, 5, 6, 7, 8];
const result = b.filter(num => num); // Returns all elements
console.log(result); // [2, 3, 4, 5, 6, 7, 8]


const a = [2, 3, 4, 5, 6, 7, 8];
const m = a.filter(num => num % 2 === 0)
console.log(m)  // [2, 4, 6, 8]



//  ✅ Example 1: Sum of All Elements  reduce

const c = [1,2,3,4,5]
const sum = c.reduce((acc, num) => acc + num, 1);
console.log(sum) // 15 + 1 = 16

const d = [2,3]
const product = d.reduce((acc,num) => acc * num, 3);
console.log(product) // 2*3*3 = 18