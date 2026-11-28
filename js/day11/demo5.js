let arr = [20, 10, 30, 50, 40]

for (const indx in arr) {
    console.log(indx);    
}

console.log("===============");

for (const val of arr) {
    console.log(val);    
}

// arr.forEach((val, index, arr)=>{
//     console.log(index);    
// });

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach((val, index, arr)=>{
//     console.log(val, index, arr);
// });

//let arr = [1, 2, [10, 20], 30]
//console.log(arr);
//console.log(arr.flat());
