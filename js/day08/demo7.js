function greetMe(){
    console.log("hi, good morning");    
}

let bash = greetMe;

function wish(){
    bash();
    console.log("hi, how are you");
}

wish();