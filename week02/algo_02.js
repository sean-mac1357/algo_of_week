// 1.) Take in three integer inputs, representing the sides of a triangle, and return
// the triangle type (Scalene, Isosceles, Equilateral).
// 2.) Write a unit test to test each triangle type with the node library Jest (I promise this one is SUPER easy to learn)

function triangle(a, b, c) {
    if (a<=0 || b<=0 || c<=0)
        return "Sorry but those won't form a triangle"
    if (a==b && b==c && c==a)
        return "Equilateral";
    else if ((a==b) || (b==c) || (c==a))
        return "Isosceles";
    else if (a!=b && b!=c && c!=a)
        return "Scalene";
    else 
        return "Error"
}
module.exports = triangle;