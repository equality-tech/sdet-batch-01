function outer(){
    console.log("i am outer function");    
    inner();
    function inner(){
        console.log("i am inner function");            
    }
}

outer();