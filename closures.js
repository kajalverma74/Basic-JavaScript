// closures  Lexical Environment Ka Structure:

let globalVar = 'i am kajal'
function outerFunction() {
    let outerVar = "my surname is verma"
    function innnerFunction() {
        let innnerVar = 'i am good girl'
        console.log(globalVar)
        console.log(outerVar)
        console.log(innnerVar)

    }
    innnerFunction()
}
outerFunction();


for (i = 1; i<=4; i++){
    if (i == 3)
        continue;
    else
    console.log(i)
}

///////////////////////////
for (i = 0; i<=8; i++){
    if( i == 7)
        continue;
    else
    console.log(i)
}

// 1️⃣ Function With return

function add(a,b){
    return a + b
}
let ans = add(5,3)
console.log(ans)

///   2️⃣ Function Without return

function greet(name) {
    console.log("Hello, " + name + "!");
}
let output = greet("Kajal");
console.log(output); // Output: Hello, Kajal! and `undefined`

// 1️⃣ Calling a Function Without Parameters
function greet() {
    console.log("Hello, Kajal!");
}
greet();

///  2️⃣ Calling a Function With Parameters

function add(a, b) {
    return a + b;
}
let result = add(5, 3); // Function call with arguments 5 and 3
console.log(result); // Output: 8
console.log(add(7,8))

// 3️⃣ Calling a Function Using a Variable

let multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 2)); // Output: 8




function getMyName(firstName, lastName){
    let fullname = firstName + lastName
    return fullname;
}
let kajal = getMyName(3, 3) /// 6
console.log(kajal)

// function expression example
let getAdd = function(a,b){
    return a + b;
}
console.log(getAdd(3,4))

///// arrow function 
let verma = localName => {
    console.log("Hello, " + localName + "!");
};
verma("Kajal"); // Output: Hello, Kajal!

//////////////////

let n = function location(name){
    console.log(name)
}
n("indore")

////

function loaction(name){
    console.log(name)
}
loaction("bhopal")

/////////
function location(name) {
    return name;
}
let b = location("Bhopal"); 
console.log(b); // Output: Bhopal


function g() {
    let a = "doll"; // Define a variable
    return a;  // Return the value of 'a'
}
// let h = g()
// console.log(h);  // Call the function and print the returned value
console.log(g())


function l(name){
    return name 
}
console.log(l("lakallllalala"))


// function in array 

const arr = [
    function add(a, b) {
        return a + b;
    },
    function sub(a, b) {
        return a - b;
    },
];

let sum = arr[1]; 
let ans1 = sum(2, 4); 
console.log(ans1);
