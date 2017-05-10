// Kodilla task 11_4 

function Phone(brand, price, color, isOverRated) {
	this.brand = brand; 
	this.price = price;
	this.color = color;
 	this.isOverRated = isOverRated;
}

Phone.prototype.printInfo = function() {
 
	console.log("Phone brand is " + this.brand + ", color is " + this.color + ", for the price ... " + this.price + " pln.");
    
    if (brand = "iPhone" || "Apple") { // ;))
      this.isOverRated = true; 
    } 
}

var Samsung = new Phone("Galaxy", 2000, "blue", false);
var Sony = new Phone("Xperia", 2000, "black", false);
var Apple = new Phone("iPhone", 3000, "silver", false);

Sony.printInfo();
Samsung.printInfo();
Apple.printInfo();

if (this.isOverRated = true) {
	
	console.log("Did you know, that your " + this.brand + " is overrated ? ;))" );
}





















