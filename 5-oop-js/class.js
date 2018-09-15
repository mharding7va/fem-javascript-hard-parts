class User { 
    constructor(name, score) { 
        this.name = name,
        this.score = score
    }

    increment() { 
        this.score++;
        console.log(this.score);
    }

    login() { 
        console.log(this.name + " logged in with a score of " + this.score);        
    }
}

let user1 = new User("Jude", 18);

user1.login();
user1.increment();

user1.login();
user1.increment();

user1.login();
user1.increment();
