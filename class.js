/**
 * Class
 * Class is a blueprint of a real-life entity.
 * It describes how the object will look like, what characteristics it holds and what kind of actions we can perform on it.
 * Class is just a template. You can't perform any actions on it.
 * We instantiate the object from a class. We can create many instances of a class.
 */
class User {
  #password;
  constructor(name, userName, password) {
    this.name = name;
    this.userName = userName;
    this.#password = password;
  }

  login(userName, password) {
    if (userName === this.userName && password === this.#password) {
      console.log('Login Successfully');
    } else {
      console.log('Authentication Failed!!');
    }
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }
};

const pratik = new User('Pratik Tandel', 'pratik_tandel', 'pass@123');
const js = new User('JavaScript', 'js', 'python:)');


pratik.login('pratik_tandel', 'password:)'); // Login Successfully
js.login('js', 'python:)'); // Login Successfully

console.log(pratik.name); // Pratik Tandel
console.log(pratik.password); // undefined
// console.log(nehal.#password); // Syntax Error

pratik.setPassword('pass@456');
pratik.login('pratik_tandel', 'pass@123'); // Authentication Failed!!
pratik.login('pratik_tandel', 'pass@456'); // Login Successfully


/**
 * Encapsulation
 * Encapsulation is defined as binding the data and methods into a single unit to protect it from outside access.
 * In the context of class, some properties are not directly accessed from outside of the class. You need to call the responsible method
 * for the properties.
 * 
 * In the above example, we already used encapsulation. We bind private property password with a public method setPassword()
 * You also have one getter method, which returns the current value of a private property.
 */