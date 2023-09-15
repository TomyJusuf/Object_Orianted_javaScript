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
  }
  logout() {
    console.log(`We wisch you ${this.name} nice day, you had logged out`);
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

var userTwo = new User('Yoshi@go.com', 'Yoshi');
var admin = new Admin('admin@admin.com', 'AdminYoKo');
var userOne = new User('Tomas@mail.com', 'Tomas');

var users = [userOne, userTwo, admin];

// inheritence
admin.deleteuser(userTwo);
console.log(users);
