for (let i = 1; i <= 10; i = i + 1) {
    if (i == 6 || i == 9) {
        //break;
        continue;
    }
    console.log("i = " + i);
}

console.log("i am after for loop");