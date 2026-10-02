function countVowels(str) {
    let count = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript"));  // 3
console.log(countVowels("ChatGPT"));     // 1

function countVowels(str) {
    let count = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Education")); // 5


function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}




console.log(isPrime(7));   // true
console.log(isPrime(10));  // false



function getFact(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

function isStrongNumber(n) {
    let original = n;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum += getFact(digit);
        n = Math.floor(n / 10);
    }

    return sum === original
        ? "Strong Number"
        : "Not Strong Number";
}

