class human {
    age = 12;  /// public
    #wt = 13; /// private 
    ht = 34;

    walking(){
        var age = 18
        console.log("i am walking !",this.#wt)
        console.log("my age is !", age )
    }

    running(){
        const myName = "kajal"
        console.log("my name is !",myName)
    }
}
let obj1 = new human()  /// create a new object 
console.log(obj1.age)

obj1.walking();
obj1.running() 

 /  constructor
class person{
    monkey;
    name;
    surname
    constructor(friend, firstName, surName ){
        this.monkey = friend,
        this.name = firstName,
        this.surname = surName
    }

    // getMyName(){
    //     console.log("Heloo kajal")
    // }
}
let obj = new person("anajli","kajal","verma")
console.log(obj.monkey)
console.log(obj.surname)
console.log(obj.name)
// obj.getMyName()


/// default values in function

function sayName(name = "kajal"){
    console.log("my first name :",name )
}

sayName() // kyoki mene yaha koi value pass nhi ki hun agr karti to sayname ka chalta fucntion 


function sayVerma(first = "verma", lastName = first.toUpperCase()){
    console.log("------------",first," ", lastName)
}
sayVerma()


function kajal(value = { age: 12, wt: 12 }) {
    console.log(".................", value);
}
kajal();

function ram(value = ["kajal","anjali"]){
    console.log("------------------",value)
}
ram()

class getMyProfile{
    name="kajal";
    age=13

    wellDone(){
        var name = "ashish"
        console.log("my name is!",name)
    }
}

let profile = new getMyProfile()
console.log(profile.age)
console.log(profile.name)
profile.wellDone()