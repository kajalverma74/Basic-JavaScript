//  let heading = document.getElementsByClassName("heading");
// console.dir(heading);

// let head = document.getElementById("head");
// console.dir(head);

// let firstEL = document.querySelector(".myclass")
// console.dir(firstEL);

// let firstEL = document.querySelectorAll(".myclass")
// console.dir(firstEL);

// let firstEL = document.querySelector("#myid")
// console.dir(firstEL);

// let div = document.querySelector("div")
// console.dir(div);

// let h2 = document.querySelector("h2")
// console.dir(h2.innerText);
// h2.innerText =  h2.innerText + "from apna college";

// let divs = document.querySelectorAll("div")
// divs[0].innerText = "new uni"
// divs[1].innerText = "new uni"
// divs[2].innerText = "new uni"
// console.log(divs[1]);

// let divs = document.querySelectorAll("div")
// let idx = 1;
// for (div of divs){
//     div.innerText = `kajal ${idx}`
//     idx++
// }

// attribute

// let div = document.querySelector("div")
// console.log(div);
// let id = div.getAttribute("id")
// console.log(id);
// let name = div.getAttribute("name")
// console.log(id);

// let para1 = document.querySelector("p")
// console.log(para.getAttribute("class"));

// setattribut

// let para = document.querySelector("p")
// console.log(para.setAttribute("class", "newClass"));

// div.style.background = "green" 
// div.style.fontStyle = "italic"
// div.style.fontSize = "34px"
// div.innerText = "kajal"

// insert element

//  let newbtn = document.createElement("button");
//  newbtn.innerText = "click me";
//  console.log(newbtn);

//  let div = document.querySelector("div");
// let p = document.querySelector("p");
// p.after(newbtn) // paragrapgh ke baad button create hoga 
//  div.append(newbtn)
//  div.prepend(newbtn)
//  div.before(newbtn)
//  div.after(newbtn)

// let newHeading = document.createElement("h1")
// newHeading.innerHTML = "I am  kajal ";
// document.querySelector("body").append(newHeading);

// let para = document.querySelector("p")
// para.remove();
// newHeading.remove();

let newbtn = document.createElement("button")
newbtn.innerHTML = "kajal"
newbtn.style.color = "white"
newbtn.style.backgroundColor ="red"
newbtn.style.borderRadius = "6px"
newbtn.style.width = "100px"
document.querySelector("body").append(newbtn)

let para = document.querySelector("p");
para.myclass.add("newclass")

// let btn1 = document.querySelector("#btn1")
// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

