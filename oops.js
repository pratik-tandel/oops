/**
 * Object-Oriented Programming(OOP) is a programming paradigm based on the concepts of Objects.
 * That means everything that we achieve in OOP language is through objects here object defines the real-world entities like Student
 */

/**
 * Object
 * Objects are like real-life entities. They have their properties and methods.
 * Consider a car as an object. The car has so many characteristics like colour, company name, modal name and price, etc.
 *  On a car, we can perform actions like start, break, and stop. Here characteristics of a car are properties, and actions are methods.
 */

const user = {
  name: 'Pratik Tandel',
  userName: 'pratik_tandel',
  password: 'pass@123',
  login: function (userName, password) {
    if (userName === this.userName && password === this.password) {
      console.log('Login Successfully');
    } else {
      console.log('Authentication Failed!!');
    }
  }
};


user.login('pratik', 'tandel'); // Authentication Failed!!
user.login('pratik_tandel', 'pass@123'); // Login Successfully