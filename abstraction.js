/**
 * Abstraction
 * Abstraction is one step ahead of encapsulation. 
 * Abstraction is defined as showing only the essential things and hiding the inner implementation.
 */
class User {
  name;
  email;
  #password;
  constructor() {}

  #validateEmail(email) {
    // check email is valid or not.
    return true;
  }

  #validatePassword(password) {
    // check password is satisfying the minimum requirements or not.
    return true;
  }

  signUp(name, email, password) {
    let isValidated = false;
    isValidated = this.#validateEmail(email);
    isValidated = this.#validatePassword(password);

    if (isValidated) {
      this.name = name;
      this.email = email;
      this.#password = password;
      // add user in your db.
      console.log('User registered successfuly');
    } else {
      console.log('Please enter correct Details!!');
    }
  }

  login(email, password) {
    if (email === this.email && password === this.#password) {
      console.log('Login Successfully');
    } else {
      console.log('Authentication Failed!!');
    }
  }

  #isRegisteredUser(email) {
    // check user is registered or not.
    return true;
  }

  resetPassword(email, newPassword) {
    if (this.#isRegisteredUser(email)) {
        this.#password = newPassword;
        console.log('Operation performed successfully');
    }
    else {
      console.log('No account found!');
    }
  }
};

const pratik = new User();
pratik.signUp('Pratik Tandel', 'pt@gmail.com', 'pass@123'); // User registered successfuly

// pratik.#validateEmail('pt@gmail.com'); // Syntax Error.

pratik.login('pt@gmail.com', 'pass@123'); // Login Successfully
pratik.resetPassword('pt@gmail.com', ''); // Operation performed successfully

/**
 * In the above example, we have introduced some private methods. 
 * The methods are doing some work and they are not exposed to the outside of the class.
 * These methods are called by the publically available methods.
 * As a developer, I just need to give the details I received from the UI and call the responsible method.
 */