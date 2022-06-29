/**
 * Inheritance
 * When one class derived the properties and methods of another class it is called inheritance in OOP. 
 * The class that inherits the property is known as subclass or child class 
 * and the class whose properties are inherited is known as a superclass or parent class.
 */

 class User {
  #password;
  constructor(email, password) {
    this.email = email;
    this.#password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.#password) {
      console.log('Login Successfully');
    } else {
      console.log('Authentication Failed!!');
    }
  }

  resetPassword(newPassword) {
    this.#password = newPassword;
    console.log('Password Reset Successfully');
  }

  logout() {
    console.log('Logout Successfully');
  }
}

class Author extends User {
  #numOfPost;

  constructor(email, password) {
    super(email, password);
    this.#numOfPost = 0;
  }

  createPost(content) {
    // add content to your DB. :)
    this.#numOfPost++;
  }

  getNumOfPost() {
    return this.#numOfPost;
  }
}

class Admin extends User {
  constructor(email, password) {
    super(email, password);
  }

  removeUser(userId) {
    // remove this userId from your DB.
    console.log('User Removed successfully.');
  }
}

const pratik = new Author('pt@gmail.com', 'pass@123');
pratik.login('pt@gmail.com', 'pass@123');  // Login Successfully
pratik.createPost('Hello There!');
pratik.createPost('This is OOPS with JS');
console.log(pratik.getNumOfPost()); // 2

const json = new Admin('jason@gmail.com', 'pass@456');
json.login('jason@gmail.com', 'pass@456');  // Login Successfully
json.resetPassword('new-pass'); // Password Reset Successfully
json.login('jason@gmail.com', 'new-pass'); // Login Successfully
json.removeUser(12); // User Removed successfully.

/**
 * In the above example, the Author and Admin classes inherit the property of the User class using extends and super keywords.
 * The extends keyword is used to establish a parent-child relationship between two classes.
 * In the first case, the Author becomes sub-class and the User becomes parent class.
 * 
 * Sub-class has access to all the public and protected members of a superclass. 
 * In addition, It can have its own properties and methods. This is how we can achieve reusability through inheritance.
 * 
 * The super keyword is a special keyword. 
 * Calling super in the child's constructor invokes the parent constructor. 
 * That's how we are initialising the properties in the Author and Admin classes.
 */