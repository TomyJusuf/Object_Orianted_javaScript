// Classes Constructors
class User {
  // constructor
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
    this.online = false;
  }
  // methods
  login() {
    console.log(`Welcome ${this.name}, you had logged in`);
    return this; /* <--- return this, this made chaining method!(Only inside class)
    if we dont use return this, channing will not working from inside class !! */
  }
  logout() {
    console.log(`We wisch you ${this.name} nice day, you had logged out`);
    // return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this; // <--chaining
  }
}

// inheritence - steal methods
class Admin extends User {
  deleteuser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

/* append on User prototype method called security, isOnline */
User.prototype.security = function () {
  return `${this.name} have secutiry clearance`;
};

User.prototype.isOnline = function () {
  this.online = true;
};

var userOne = new User('Tomas@mail.com', 'Tomas');
var userTwo = new User('Yoshi@go.com', 'Yoshi');
var admin = new Admin('admin@admin.com', 'AdminYoKo');

var users = [userOne, userTwo, admin];
// userOne.logout();
// userTwo.login();

/* chaining methods */
userOne.updateScore().updateScore().logout(); /* chaining method */

/* inheritence */
admin.deleteuser(userTwo);
// console.log(users);

/* prototype */
console.log(userTwo.security());

// console.log(userTwo);
// userTwo.login().updateScore().isOnline();
// console.log(userTwo);
