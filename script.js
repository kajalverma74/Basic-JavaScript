// let str = "kajal";
// // str =str.toUpperCase();
// let str1 = "verma";
// console.log(str.concat(str1));
// console.log(str.toUpperCase());

// let fullName = prompt("enter your fullname without spaces");
// let username ="@" + fullName +fullName.length;
// console.log(username);
// let heroes = ["kajal", "verma"];
// console.log(heroes[0]);
// let marks = [91,23,23,34,34,];
// console.log(marks.length);
// console.log(typeof marks);
// console.log(marks[0] = 66);
// console.log(marks);

//looping over in Array//

// print all elements in array //

// let heroes = ["kajal", "verma", "anand", "raj"];
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }

//  for(let hero of heroes){
//     console.log(hero.toUpperCase());
//  }

//  let marks = [ 85 ,97 ,44,37,76,60];
//  let sum = 0;
//   for( let val of marks){
//     sum = sum + val
//     // console.log(val);
//   }
//   let avg = sum / marks.length;
//    console.log(avg);

// let items = [250, 645, 300, 900, 50];
// for(let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
//  console.log(items);

// let fooditems = ["onion","apple","banana"]
// let item = [250,645,300,900,50]

// console.log(fooditems.pop());
// fooditems.push("chips","burger","paneer")
// console.log(fooditems.push("potato"));
// console.log(fooditems.pop());
// console.log(item.toString());
// console.log(item);

// let marvels_heroes = ["thor","spiderman","ironman"]
// let dcHeroes = ["superman","kajal"]
// let heroes = marvels_heroes.concat(dcHeroes);
// console.log(heroes);
//  console.log(marvels_heroes.unshift("raj"));
//  console.log(marvels_heroes); // [ 'raj', 'thor', 'spiderman', 'ironman' ]
// console.log(marvels_heroes.shift("verma")); //thor
// console.log(marvels_heroes); // [ 'spiderman', 'ironman' ]

// let marvels_heroes = ["thor","spiderman","ironman"]
// console.log(marvels_heroes.slice(1,3)); // [ 'spiderman', 'ironman' ]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.splice(2, 2, 101, 204)); // Logs: [3, 4]
// console.log(arr); // Logs: [1, 2, 101, 204, 5, 6, 7, 8, 9]
// console.log(arr.splice(2,1,101));
// console.log(arr);

// console.log(arr.splice(6,3)); // delete elememnt 6 index pr 3 element del [ 7, 8, 9 ]
// console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

// let com =["v","k","j","l"]
// console.log(com.splice(2,0,"b")); // replace method
// console.log(com); //[ 'v', 'k', 'b', 'j', 'l' ]

//// FUNCTION //

// function sum(a,b){
//      let s = a + b;
//     return s
// }
// console.log(sum(2,3));

// const mul = (a, b) => {
//     return a * b;
// };

// console.log(mul(2,3)); // 6

// function myfun(name) {
//     console.log("Hello, " + name);
// }

// myfun("Kajal")

// let myfun = (name) => {
//     console.log("Hello, " + name);
// };

// myfun("Kajal");

// function countVowels(str) {
//     let count = 0;
//     for (const char of str.toLowerCase()) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }

// const result = countVowels("Kajal");
// console.log(result); // 2

// function countVowels(str) {
//   let count = 0;
//   for (const char of str.toLowerCase()) {
//     // Convert string to lowercase to handle uppercase vowels
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowels("kajal");


// let arr1 = [1,2,3,4,3,2]
// arr.forEach(function printValues(val){
// console.log(val);
// });

// let arr = [1,2,3,4,5,]
// arr .forEach((val, index) =>{
//     console.log(`Value: ${val}, Index: ${index}`);
// })

// let arr1 = [ 2,3,4,5]
// arr.forEach((num) =>{
//     console.log(num*2);
// });

// let arr = [2, 3, 4, 5];
// let calcSquare = (num) => {
//     console.log(num * num);  // This calculates the square of the number
// }

// arr.forEach(calcSquare);


// let arr = [2,3,4]
// let squares = arr.map(num => num *num); // new array create in map method 
// console.log(squares); // [ 4, 9, 16 ]

// let numbers = [1, 2, 3, 4, 5];
// let doubledEvens = numbers
//     .map(num => num * 2)  // [2, 4, 6, 8, 10]
//     .filter(num => num % 4 === 0);  // [4, 8]

// console.log(doubledEvens);  // Output: [4, 8]

// let numbers = [1, 2, 3, 4, 5];
//  let evenArr = numbers.filter((num) =>{
//    return num % 2 === 0
//  })

//  console.log(evenArr);

// let arr = [ 2,3]
// let Output = arr.reduce((prev,curr) => {
//     return prev > curr ? prev : curr ;
// });
// console.log(Output);


// let marks = [ 89,34,26,98]
//  let toppers = marks.filter((val) => {
//     return val  > 34 ;
// })
// console.log(toppers);

// function findLargestNumber(arr) {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// const array = [1, 2, 3, 4, 5];
// const largestNumber = findLargestNumber(array);
// console.log("The largest number in the array is:", largestNumber);


const books = {
    "author": "No Name",
    "title": "Wonderful Journey",
    "publishedDate": "17-03-2019",
    "country": "German",
    "city": "Berlin",
    "publisher": "Publisher Name",
    "chapters": [
        {
            "id": 1,
            "title": "Journey Begin",
            "pages": [
                {
                    "id": 1,
                    "picture": "City_Building.png",
                    "content": "Something else...",
                    "footnote": "Something important..."
                },
                {
                    "id": 2,
                    "picture": "City_Building.png",
                    "content": "Something else...",
                    "footnote": "Something important..."
                }
            ]
        }
    ]
}

// const userBooks = books.chapters.map(chapter => {
//     return {
//         ...chapter,
//         pages: chapter.pages.filter(page => page.id)
//     };
// });

// console.log(userBooks);
// console.log(books.chapters[0].pages);
books.chapters.forEach(chapters =>{
    console.log(chapters.pages);
})
