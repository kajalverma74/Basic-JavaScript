
function exampleVar() {
    var x = 19;
    if(true) {
        var x = 20;  // Re-declared within the same function scope
        console.log(x) // 20
    }
    console.log(x)  // 20 (same variable, not block-scoped)
}
exampleVar();


function verma(){
    let c = "anand";
    if(true){
        let d = "verma";
        console.log(d)

    }
    console.log(c)
}
verma()


function jj() {
    var c = 9;
    var c = 15; // ❌ Error: Identifier 'c' has already been declared
    console.log(c);
}
jj();



// function verma() {
//     let c = 9;
//     let c = 15; // ❌ Error: Identifier 'c' has already been declared
//     console.log(c);
// }
// verma();



function exampleConst() {
    const c = "kajal";
    if (true) {
        const c = "verma"; // ✅ Alag block ke andar alag variable
        console.log(c); // 15
    }
    console.log(c); // 9 (outer 'c' same hi rahega)
}
exampleConst();




const arr = [
    function add(a, b) {
        return a + b;
    },
    function sub(a, b) {
        return a - b;
    },
];

let sum = arr[1]; 
let ans1 = sum(7, 4); 
console.log(ans1);



{
    var age = 12
    console.log(age)
}
console.log(age); // 12 (Still accessible)

////  यह ब्लॉक स्कोप में क्यों चल रहा है?
// 👉 var ब्लॉक स्कोप को फ़ॉलो नहीं करता। यह फंक्शन-स्कोप या ग्लोबल-स्कोप में रहता है।

// इस केस में क्या हो रहा है?
// {} ब्लॉक के अंदर var age = 12; लिखा है।
// लेकिन ब्लॉक {} var का स्कोप नहीं बदलता।
// इसलिए age ब्लॉक के बाहर भी एक्सेस किया जा सकता है।

{
    let x = 20;
    const y = 30;
    console.log(x, y); // 20, 30
}
console.log(x); // ❌ Error: x is not defined
console.log(y); // ❌ Error: y is not defined
