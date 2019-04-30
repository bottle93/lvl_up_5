const fib = require('./script');

test('should return an empty array', function () {
    expect(fib(0)).toEqual([])
});

test('should return an array with the length of a given number', function () {
    expect(fib(10)).toHaveLength(10)
});

test('should return the numerical sequence of fibonacci code', function () {
    expect(fib(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
});

test('should throw an error if the number is negative', function () {
    expect(() => {fib(-2)}).toThrow('The argument must contain a natural number')
});

test('should throw an  error if the argument is not a number', function () {
    expect(() => {fib(true)}).toThrow('The argument must contain a natural number')
})
