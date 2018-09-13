function outer() {
    let counter = 0;

    function incrementCounter() {  
        console.log(counter++);
    }

    return incrementCounter;
}

let myNewFunction = outer();

myNewFunction();
myNewFunction();
myNewFunction();
myNewFunction();


let anotherNewFunction = outer();

anotherNewFunction();
anotherNewFunction();

myNewFunction();
