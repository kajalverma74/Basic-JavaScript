
// Closures 


// function outerFunction(){
//     let userName = "kajal";

//     function innnerFunction(){
//         console.log(`userName is : ${userName}`)
//     }
//     innnerFunction()
// }

// outerFunction()





///  Without Promise (Synchronous Code)//
// Yeh galat tareeka hai kyunki yeh wait nahi karega, direct next line execute ho jayegi.


// function orderPizza(){
//     console.log("pizza ordered....")
//     setTimeout(() => {
//         return "Pizza is ready!";

//     }, 2000);
// }

// let pizza = orderPizza();
// console.log(pizza)

// ****************************************

// Using Promises (Right Way)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function orderMomos() {
    return new Promise((resolve, reject) => {
        console.log("momos orderes......")
        setTimeout(() => {
            let isAvailable = true;
            if (isAvailable) {
                resolve("momos is ready");
            }
            else {
                reject(" sorry , cheese out of stock")
            }
        }, 3000)
    }
    )
}
orderMomos()
    .then(momos => console.log(momos))
    .catch(error => console.log(error));

//////////////////////////////////////////////////////////

function fetchUserData(userdId) {
    return new Promise((resolve, reject) => {
        console.log(`fetching data for user : ${userdId}...`);

        setTimeout(() => {
            let userFound = true;
            if (userFound) {
                resolve({
                    userdId: userdId,
                    name: "kajal",
                    age: 20,
                    location: "indore"
                });
            }
            else {
                reject("user not found ")
            }
        }, 2000);
    })
}
fetchUserData(11).then(fetchUserData => {
    console.log("user Data ", fetchUserData)
}).catch(error => {
    console.log(error)
})


///////////////////////// **************************

function fetchUserReviews(productId) {
    return new Promise((resolve, reject) => {
        console.log(`feteching reviews for product: ${productId}`)
        setTimeout(() => {
            let userReviews = true;
            if (userReviews) {
                resolve([
                    { reviewId: 1, review: "Great product!" },

                ])
            }
            else {
                reject("userReviews is not found")
            }
        }, 1000);

    })
}
fetchUserReviews(12).then(fetchUserReviews => {
    console.log("User Data:", fetchUserReviews);
})
    .catch(error => {
        console.log(error)
    })


//////////////////////////////********************** */

function locationName() {
    return new Promise((resolve, reject) => {
        console.log(" search location ")
        setTimeout(() => {
            let location = true
            if (location) {
                resolve({
                    name: "pune",
                    address: "103"
                })
            }
            else {
                reject("location is not found")
            }
        }, 6000);
    })
}
locationName().then(location => {
    console.log("location is ", location)
})
    .catch(error => {
        console.log(error)
    })



// AWAIT AND ASYNC  ***************************

function orderPizza() {
    return new Promise((resolve, reject) => {
        console.log("Pizza ordered...");
        setTimeout(() => {
            let isAvailable = true;

            if (isAvailable) {
                resolve("🍕 Pizza is ready!");
            } else {
                reject("❌ Sorry, cheese out of stock!");
            }
        }, 2000);
    });
}

//   orderPizza().then(pizza =>{
//     console.log("dfghjkl",pizza)
//   }).catch(error =>{
//     console.log(error)
//   })

async function getPizza() {
    try {
        console.log("Pizza ordered.......");

        let pizza = await orderPizza();

        console.log("*******************", pizza);
    } catch (error) {
        console.log(error);
    }
}

getPizza();

/////////////////// *****************************

async function myDisplay() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve("with the help !!");
    });
    console.log(await myPromise);
}

myDisplay();

//////////////////// ************************


async function myPromise() {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Crafting an example")
        }, 2000);
    })
    console.log(await myPromise)
}
myPromise()

///////////////////////////////

async function getUserData(userId) {
    return `User data for ID: ${userId}`;
}

getUserData(1).then(data => console.log(data));

/////////////////////////////////////

async function getName(locationNames) {
    return ` user locationnames is :${locationNames}`

}

getName("noida").then(data => console.log(data))

//////////////////// ************************

async function searchLocation(locationNames) {
    let myLocation = new Promise((resolve, reject) => {
        console.log(`search location: ${locationNames}`);
        setTimeout(() => {
            let locationFound = true;
            if (locationFound) {
                resolve({
                    name: "delhi",
                    address: "bhopal",
                    state: "madhyapradesh"
                });

            }
            else {
                reject("Location not found!");
            }
        }, 9000);
    });
    console.log("location is ", await myLocation);
}

searchLocation("someLocationName");

///////////////////////////////////////

function searchUserData() {
    return new Promise((resolve, reject) => {
        console.log("search location")
        let searchFound = true;
        if (searchFound) {
            resolve({
                name: "mumbai",
                state: "maharashta",
                room: 1234
            })
        }
        else {
            reject("not location")
        }
    })
}

async function getSearchLocation() {
    try {
        console.log("seacrh loaction ............")
        let seacrh = await searchUserData();
        console.log("#########", seacrh)

    }
    catch (error) {
        console.log(error)
    }
}
getSearchLocation()



///////////////////////////////////

function fullNames() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let names = true
            if (names) {
                resolve({
                    firstName: "kajal",
                    lastName: "verma"
                })
            }
            else {
                reject("Names not found");

            }
        }, 6000);
    })
}

fullNames().then(name => {
    console.log("my self ........", name)
}).catch(error => {
    console.log(error)
})

// async function getFullName() {
//     try {
//         let names = await fullNames(); // Wait for promise to resolve
//         console.log("My self ........", names);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getFullName();


// async function getData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
// }

// getData();



async function postData() {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // Valid POST endpoint for testing

    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log('Response Status:', response.status); // Log status for better debugging
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error('Error:', error);
    }
}
postData();

////////////////////////////////////////////////////


function myAddress(nameId = 1) {
    return new Promise((resolve, reject) => {
        console.log("search my name", nameId)
        setTimeout(() => {
            let name = true
            if (name) {
                resolve({
                    name: "kajal",
                    surname: "verma"
                })
            }
            else {
                reject("name is not found")
            }
        }, 2000);
    })
}
async function getSearchName() {
    let name = await myAddress()
    console.log(">>>>>>>>>>******>>>>>>>>>>>>", name)

}
getSearchName()


// without arrow function

function myAddress(nameId = 1) {
    return new Promise(function (resolve, reject) {
        console.log("search my name", nameId);
        
        setTimeout(function () {
            let name = true;
            if (name) {
                resolve({
                    name: "kajal",
                    surname: "verma"
                });
            } else {
                reject("name is not found");
            }
        }, 2000);
    });
}

async function getSearchName() {
    try {
        let name = await myAddress();
        console.log(">>>>>>>>>>******>>>>>>>>>>>>", name);
    } catch (error) {
        console.log(error);
    }
}

getSearchName();
