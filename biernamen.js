"use strict"

class Beer {
    constructor(name, percentage, size, color) {
    this.name = name;
    this.percentage = percentage;
    this.size = size;
    this.color = color;
  }
}

let beers = new Beer ("Heineken", 5, 30, "gold")
let beerCollection = [];
beerCollection.push(beers);
beerCollection.push(new Beer("Amstel Radler", 2, 33, "lightyellow"));
beerCollection.push(new Beer("Liefmans", 4, 33, "red"));
beerCollection.push(new Beer("Oud Bruin", 2, 30, "Brown"));
beerCollection.push(new Beer("Guiness", 5, 48, "black"));


for (let beer of beerCollection){
  console.log(beer.name);

}
