const fib = num => {
    if (num < 0 || typeof num !== 'number') {
        throw new Error('The argument must contain a natural number')
    }
    let arr = [];
    for(let i = 0; i < num; i++) {
        if (i < 2) {
            arr.push(i);
        } else {
            arr.push(arr[i-1] + arr[i-2])
        }
    }
    return arr
};

module.exports = fib;
