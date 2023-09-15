function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}
User.prototype.login = function () {
  this.online = true;
  console.log(this.email, 'has logged in');
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, 'has logged out');
};

var userOne = new User('Tomas@mail.com', 'Tomas');
var userTwo = new User('Yoshi@go.com', 'Yoshi');

console.log(userOne);
userTwo.logout();

/*
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

Bouth doing same job

class User {
  // constructor
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
    this.online = false;
  }

*/
