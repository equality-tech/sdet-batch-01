// call back function

// let  add = ( a, b) => a+b;

// let  sub = ( a, b) => a-b;

// let  mult = ( a, b) => a*b;

//fn -> callback 
function calculate(x, y, fn){
    console.log("i am inside of cal");    
    return fn(x, y);
}

console.log(calculate(10, 20, ( a, b) => a+b));
console.log(calculate(10, 20,( a, b) => a-b));
console.log(calculate(10, 20, ( a, b) => a*b));

// console.log(add(10, 20));

// console.log(sub(10, 20));

// console.log(mult(10, 20));
