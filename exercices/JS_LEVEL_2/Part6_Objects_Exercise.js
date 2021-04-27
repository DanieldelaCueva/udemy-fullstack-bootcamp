// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
    return this.name.lenght();
  }
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.


///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  show: function(){
    alert(`Name is ${this.name}, Job is ${this.job}, Age is ${this.age}`);
  }
}

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.



///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function(){
    nameArray = this.name.split(" ");
    return nameArray[nameArray.length - 1];
  }
}

// Add a method called lastName that prints
// out the employee's last name to the console.

// You will o need to figure out how to split a string tan array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
