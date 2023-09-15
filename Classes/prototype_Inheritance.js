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

function Admin(...args) {
  User.apply(this, args);
  this.role = 'super admin';
}

/* copy methods from User.prototype */
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email;
  });
};

var userOne = new User('Tomas@mail.com', 'Tomas');
var userTwo = new User('Yoshi@go.com', 'Yoshi');
var admin = new Admin('admin@admin.com', 'AdminYoKo');

var users = [userOne, userTwo, admin];

// userOne.login();
// admin.login();
admin.deleteUser(users[1]);
// console.log(users);
