function greetings(message) {
    console.log("message is " + message);  
    
    //returning a function it self
    return function mywish(){
        return "i am retuning from a function";        
    }

}

let output = greetings("hellow, how are you");
let finalres = output(); //is calling the function
console.log(finalres);