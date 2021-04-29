const { expect } = require('@jest/globals');
const triangle = require('./algo_02');

test('finds Equilateral', () => {
    expect(triangle(10, 10, 10)).toMatch("Equilateral");
});
test('finds Isosceles', () => {
    expect(triangle(10, 15, 10)).toMatch("Isosceles");
});
test('finds Scalene', () => {
    expect(triangle(10, 15, 20)).toMatch("Scalene");
});
test('finds non-triangle numbers', () => {
    expect(triangle(0, 10, 15)).toMatch("Sorry but those won't form a triangle")
});