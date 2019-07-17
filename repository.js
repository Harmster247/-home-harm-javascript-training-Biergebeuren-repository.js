"use strict"

class Repository {
    constructor() {
      this.beers = [];
    }

    save() {
      this.beers.push(biernamen);
    }

    findAll() {
      return this.beers;
    }
  }
