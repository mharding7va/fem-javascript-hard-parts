function User(name, score) {
    this.name = name;
    this.score = score;
}

User.prototype.increment = function () {
    this.score++;
    console.log(this.score);
    
}

User.prototype.login = function () {
    console.log(this.name + " you are now logged in with a score of " + this.score);
}

let user1 = new User("Mike", 58);

user1.increment();
user1.login();
console.log(user1);
