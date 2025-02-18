
// const uri = "https://api.github.com/users/kajalverma74";

// (async function getData() {
//   let response = await fetch(uri);
//   let data = await response.json();
  
//   // console.log("Your Information")
//   // let str = `Id is : ${data.id}\nName is: ${data.name}\nUsername is ${data.login}`
//   // console.log(str)
//   console.log(data)
// })();


// const url = "http://localhost:3001/idli";

// (async function getData() {
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data);

// })();

function myFunction(){
        console.log("Kajal")
}
myFunction()

///////////////////////////

function myDisplay(){
        var name = "raj"
        var surname = "verma"
        function myName(){
                console.log(name,surname)
                console.log(surname)
        }
        myName()
}
myDisplay()

////////////////////
 ///////// CALLBACK //
 
function greet(name, callback){
        console.log("Hello, " + name);
        callback()
}
function sayGoodbye(){
        console.log("GoodBye")
}
greet("kajal", sayGoodbye)

///////////////////////
