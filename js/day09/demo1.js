// immediatly invoked function expression or IIF
(function greeting(){
    console.log("hello good morning");    
})();

(function greeting(name){
    console.log("hello good morning " + name);    
})("basheer");

const res = (function greeting(name){
    return "hello good morning " + name;    
})("basheer");

console.log(res);

//greeting();