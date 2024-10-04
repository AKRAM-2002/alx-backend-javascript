export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Method to return the size when cast to Number
  valueOf() {
    return this._size; // Return the size
  }

  // Method to return the location when cast to String
  toString() {
    return this._location; // Return the location
  }
}
