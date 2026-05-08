const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const registeredHomes = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  // save() {
  //  registeredHomes.push(this)
  //   const homeDataPath = path.join(rootDir, "data", "homes.json");
  //   fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
  //     console.log("File Writing Concluded", error);
  //   });
  // }
  
  // yhan wo data retrieve ni kr ra
  // static fetchAll(callback) {
  
  //    return registeredHomes;

  // }

  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
}

// ab server kill krke bhi start krenge to bhi mere same home dikhenge