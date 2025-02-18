class car{
    start (){
console.log("start");
    }
    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}
let fortuner = new car();
fortuner.setBrand("fortuner"); // Set the brand
console.log(fortuner.brandName);
//  fortuner.start();
//  fortuner.stop();
//  console.log(fortuner);
//  console.log(car.fortuner);
 
