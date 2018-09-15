// different ways to create an object and adds properties and methods

// user 1
let user1 = {
    name: "Will",
    score: 3,

    increment: function () {
        user1.score++;
    }
};

user1.increment(); // make user1 score 4


// user 2
let user2 = {};
user2.name = "Ted";
user2.score = 6;

user2.increment = function () {
        user1.score++;
};

user2.increment(); // make user1 score 7


//user 3
let user3 = Object.create(null);

user3.name = "Ted";
user3.score = 6;

user3.increment = function () {
    user1.score++;
};

user3.increment(); // make user1 score 7

// generate object using a function

function userCreate(name, score) {
    let newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {
        newUser.score++;
    }
    return newUser;
};

let user1 = userCreate("Will", 3);
let user2 = userCreate("Tim", 5);
user1.increment();
user2.increment();

