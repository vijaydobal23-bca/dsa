//
function calculateFinalAmount(amount) {
    if (amount >= 0 && amount <= 5000) {
        return amount;
    } else if (amount <= 7000) {
        return amount - (amount * 5 / 100);
    } else if (amount <= 9000) {
        return amount - (amount * 10 / 100);
    } else {
        return amount - (amount * 20 / 100);
    }
}




function greatestOfThree(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (b >= c) {
            return b;
        } else {
            return c;
        }
    }
}

console.log(greatestOfThree(10, 20, 30)); // 30
console.log(greatestOfThree(50, 20, 30)); // 50
console.log(greatestOfThree(10, 40, 30)); // 40



function greatestOfThree(a, b, c) {
    return (a >= b)
        ? (a >= c ? a : c)
        : (b >= c ? b : c);
}

console.log(greatestOfThree(10, 20, 30)); // 30
console.log(greatestOfThree(50, 20, 30)); // 50
console.log(greatestOfThree(10, 40, 30)); // 40


console.log(Math.max(10,55,20))



