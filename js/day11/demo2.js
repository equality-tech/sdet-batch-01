function sub(a, b) {
}

function sub(a, b = 0, c = 0) {
}

function add() {
    //console.log(arguments);

    console.log(typeof arguments);
        
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }

    console.log("=====================");

}

// function add(a, b, c){
//     console.log(a+b+c);    
// }

add(1);
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4);
add(10, 20, 30, 4, 5);