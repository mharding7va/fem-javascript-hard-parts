function userCreate(name, score) {
    let newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    // newUser.increment = function () {
    //     newUser.score++;
    // }
    return newUser;
};

let userFunctionStore = { 
    increment: function () { 
        this.score++;
        console.log(this.score);
    },
    login: function () {
        console.log(this.name + " is now logged in and has a score of " + this.score);
        
    }
}

let user1 = userCreate("Will", 3);
let user2 = userCreate("Tim", 5);

user1.increment();
user1.login();