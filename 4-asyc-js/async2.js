
function display(data) {
    console.log(data.post);
}

$.get("http://twitter.com/willsen/tweet/1", display);

console.log("Me first!");
