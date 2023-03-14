

// trying to access the function and variable before even initialized

getName();
console.log(x)
var x=7

function getName(){
    console.log("something old, something new")
}

// getName();
// console.log(x);