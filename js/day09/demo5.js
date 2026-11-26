
function greetme(name, fn) {
    fn(name);
}



// greetme("basher",  function (name) { 
//     console.log("hello gm " + name) 
// })

// greetme("basher",   (name) => { 
//     console.log("hello gm " + name) 
// })


//  test('should display the correct page title',  () => {

//   });

//fn => is callback function
// let  test =  (methodName, callback) => {
//     console.log(methodName + " method started");
//     callback();
//     console.log("i am after call back");    
// }

// test("login to app", ()=>{
//     console.log("application launched");
//     console.log("login success");
//     console.log("logout");
// });

//  test('should display the correct page title', async ({ page }) => {
    
//   });

function greetme(fn){
    console.log("hellow");
    fn();
    console.log("good bye");    
}

// greetme(()=>{
//     console.log("basheer");
// })

greetme(function(){
    console.log("basheer");
});