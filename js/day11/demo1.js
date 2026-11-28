
function add1(a, b){
    return a+b;
}

let add2 = (a, b) => {
    return a+b;
};

let add3 = (a, b) => a + b;

let func1 = (a, b)=>{
    if(a>b){
        return true;
    }else{
        return false;
    }
}

function calculate(a, b, callback){
    console.log("before calling callback function");    
    let res = callback(a, b);
    console.log("result of calling call back function " + res);
    console.log("after calling back funciton");
}

calculate(10, 20, add1);
calculate(10, 20, add2);
calculate(10, 20, add3);