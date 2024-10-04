export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validate the input types
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Assign the attributes to their underscore-prefixed versions
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  // getter
  get length() {
    return this._length;
  }

  // setter
  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new Error('Length must be a number');
    }
  }

  // getter
  get students() {
    return this._students;
  }

  // setter
  set students(newStudents) {
    if (Array.isArray(newStudents) || newStudents.every((student) => typeof student === 'string')) {
      this._students = newStudents;
    } else {
      throw new Error('Students must be an array with at least one student');
    }
  }
}
