// Classes Constructors
class User {
  // constructor
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  // methods
  login() {
    console.log(`Welcome ${this.name}, you had logged in`);
    return this; // <--- return this, this made chaining method!
  }
  logout() {
    console.log(`We wisch you ${this.name} nice day, you had logged out`);
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this; // <--chaining
  }
}

var userTwo = new User('Yoshi@go.com', 'Yoshi');

var userOne = new User('Tomas@mail.com', 'Tomas');

//chaining methods
userOne.updateScore().updateScore().logout(); // <--chaining method
