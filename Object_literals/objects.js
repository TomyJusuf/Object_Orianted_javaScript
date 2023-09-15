//object literals
var userOne = {
  email: 'tomas@gmail.com',
  name: 'Tomas',
  login() {
    console.log(this.email + ' has logged in');
  },
  logout() {
    console.log(this.email + ' has logged out');
  },
};

//updating properties
userOne.login();
console.log(userOne.name);
userOne.logout();

userOne.name = 'Yoshi';
console.log(userOne.name);
console.log(userOne['email']);

userOne['name'] = 'Mario';
console.log(userOne.name);

// add property
userOne.age = 25;
console.log(userOne);
