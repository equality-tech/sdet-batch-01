
function ageCheck(age){
    if(age >=18 ){
        return "major";
    }else{
        return "minor";
    }
}

console.log(ageCheck(17));
console.log(ageCheck(20));

let result = ageCheck("50");
console.log("result is " + result);

