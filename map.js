const products = [
    {
        name: "laptop", price: 30,
    },
    {
        name: "phone", price: 20
    }
];
const newProducts = products.map((product) => {
    return {
        name: product.name,
        price: product.price * 2
    }
});
console.log("*****",newProducts)

 ///////////////   for each 

const shopping = [
    { name: "bags", price: 100 },
    { name: "pocketbags", price: 200 }
];

shopping.forEach((item) => {
    console.log({ name: item.name, price: item.price * 2 });
});

////////////////////

const ram = [
    { name: "bags", price: 900 },
    { name: "pocketbags", price: 200 }
];
const result = ram.forEach((item) => {
    return { name: item.name, price: item.price * 2 }; // ❌ forEach कुछ return नहीं करता
});
console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",result); // Output: undefined


const m = [5, 5];
const n = m.forEach((num) => {
    return num * 2; 
});
console.log("{{{{{{{{{{{{{{{{{{{{{{{{",n); //  undefined

//////////////////////////////////////

const numbers = [1, 2, 3];
numbers.forEach((num) => {
    console.log("-------------------", num * 2);  // 2,4,6
});

//////////////////////////////
const kajal = [9, 2, 3];
const verma = kajal.map(num => num * 2);
console.log("!!!!!!!!!!!!!!!!!!!!!",verma); // Output: [ 18, 4, 6 ]


const jk = [1,2]
const kl = jk.forEach(num => num * 2)
console.log("vvvvvvvvvvvvvvvvv",kl) /// undefined

const a = [ 2,3]
a.forEach((num) =>{
    console.log("++++++++++++++++++", num * 2)
})



const k = [1,2,3,4,5,6]
k.forEach((num) =>{
    console.log(num)
})

const b = [2, 3, 4, 5, 6, 7, 8];
const r = b.map(num => num); // Returns the same array
console.log(r); // [2, 3, 4, 5, 6, 7, 8]

const j = [3,4]
const u = j.forEach(num => num)
console.log(u)   ///  undefined

/////////////////   ARRAY OF METHOD  



let arr = [1,2,3,4]
arr.pop()
console.log(arr)

const arr1 = ["kajal","verma","dolly"]
arr1.push("anjali")
console.log(arr1)

const arr2 = ["a","b","c","d","e","g"]
arr2.shift() /// left side se ek remove hoga
console.log(arr2) 

const arr3 = [5,6,7,8,9,1]
arr3.unshift(12) /// left side ek add hoga 
console.log(arr3)

const arr4 = ["ka","ram","krishna","balram"]
arr4.splice(1,2,"singh")
console.log(arr4)

const arr5 = ["kajal", "anjali", "shweta", "sheetal", "ashish"];
arr5.splice(2, 2); // Removes 2 elements starting from index 2
console.log(arr5); // ✅ Output: ["kajal", "anjali", "ashish"]

const arr6 = ["ram", "shyam", "akshay", "sheetal", "ashish"];
const slicedArr = arr6.slice(2, 4); // Extracts ["shweta", "sheetal"]
console.log(slicedArr); // ✅ Output: ["shweta", "sheetal"]
console.log(arr6); // ✅ Original array is unchanged

const arr7 = [2,3,4]
const mapArr = arr7.map(num => num * 3)
console.log(mapArr)

const arr8 = [8,9,2]
arr8.forEach(num => num *2)
console.log(arr8)

const arr9 = [8,9,2]
const forArr = arr9.forEach(num => num)
console.log(forArr)


let arr11 = [1, 2, 'love', 'kajal'];
let amn = arr11.filter((value) => {
    if (typeof(value) == 'string'){
        return true;
    } else {
        return false;
    }
});
console.log(amn);  


let arr12 = ['apple', 'banana', 'cherry', 'date'];
let longest = arr12.reduce((acc, value) => {
    return value.length > acc.length ? value : acc;
}, '');
console.log(longest);  // Output: 'banana'


let arr13 = ['apple', 'banana', 'apple', 'apple', 'banana'];
let count = arr13.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
}, {});
console.log(count);  // Output: { apple: 3, banana: 2 }


let arr14 = [1,2,3,4]
const sum = arr14.reduce((acc, num) => acc + num, 1);
console.log(sum)

var fruits = ["kkkk","vbnm","sdfghjk","dfghjkl","dfghj"]
fruits.splice(2,1,"dfghj")
console.log(fruits)


var fruits = ["kkkk","vbnm","sdfghjk","dfghjkl","dfghj"];
var x = fruits.toString();
console.log(fruits);
console.log(x);


var fruits = ["sdfghjk","vbnm","sdfghjk","dfghjkl","dfghj"];
var x = fruits.toString();
console.log(fruits);
console.log(x);