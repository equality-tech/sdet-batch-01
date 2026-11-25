function add(a, b) {
    return a + b;
}

function average(a, b, add) {
    return add(a, b) / 2;
}

let res = average(10, 20, add);
console.log(res);

// let res = add(10, 20);
// console.log(res);