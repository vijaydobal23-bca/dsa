//palindrome string
var str = "naman";
var isPalindrome = true;

var i = 0;
var j = str.length-1;

while(i<j){
  if(str[i]!=str[j]){
    isPalindrome = false;
    break;
  }
  i++;
  j--
}

if(isPalindrome){
  console.log("palindrome");
}else{
  console.log("not a palindrome");
}


var str = "madAM";
var isPalindrome = str.split("").reverse().join("")==str?"palindrome":"not palindrome";
console.log(isPalindrome);


//toggle alphabet case 
function toggleCase(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "a" && str[i] <= "z") {
            ans += str[i].toUpperCase();
        } else if (str[i] >= "A" && str[i] <= "Z") {
            ans += str[i].toLowerCase();
        } else {
            ans += str[i];
        }
    }

    return ans;
}

//count string with prefix 
function countPrefixMatch(words, pref) {
    let num = 0;
    words.forEach((str) => {
        if (str.startsWith(pref)) {
            num++;
        }
    })

    return num;
}


function countPrefixMatch2(words, pref) {
    let num = 0;
    let plen = pref.length - 1;

    words.forEach((str) => {
        let isMatched = true;
        let i = plen;

        while (i >= 0) {
            if (str[i] !== pref[i]) {
                isMatched = false;
                break;
            }
            i--;
        }

        if (isMatched) {
            num++;
        }
    });

    return num;
}

var ans = countPrefixMatch2(
    ["pay", "attention", "practice", "attend"],
    "at"
);

console.log(ans); 


//anagram sting
function isAnagram(s1, s2) {
    s1 = s1.split("").sort().join("");
    s2 = s2.split("").sort().join("");
    

    for (let i = 0; i < s1.length; i++) {
        if(s1[i] != s2[i]){
            return false;
            break;
        }
    }

    return true;
}

function isAnagram2(s1 ,s2){
    if(s1.length != s2.length){
        return false;
    }

    
    for(let i = 0;i<s1.length;i++){
        if(!s1.includes(s2[i])){
            return false;
        }    
    }

    return true;
}





//count max number of words inside a santance
function maxWordsFound(sentences) {
    let max = 0;

    sentences.forEach((line) => {
        let count = 1; // first word

        for (let i = 0; i < line.length; i++) {
            if (line[i] === " ") {
                count++;
            }
        }

        max = Math.max(max, count);
    });

    return max;
}

//count asterisc
function countAsterisks(s) {
    let count = 0;
    let insideBars = false;

    for (let i = 0; i < s.length; i++) {

        if (s[i] === "|") {
            insideBars = !insideBars;
        }

        else if (s[i] === "*" && !insideBars) {
            count++;
        }
    }

    return count;
}

//count persentage of a letter

function percentageLetter(s, letter) {
    let n = s.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
      if (s[i] === letter) {
        count++;
      }
    }

    return Math.floor((count * 100) / n);
  }


  //check all a apperars before b
  function checkString(s) {
  let bIdx = s.indexOf("b");

  // No 'b' exists, so the string is valid
  if (bIdx === -1) {
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a" && i > bIdx) {
      return false;
    }
  }

  return true;
}


//strong password2 
function strongPasswordCheckerII(password) {
    const options = "!@#$%^&*()-+";

    let isLowercase = false;
    let isUppercase = false;
    let isDigit = false;
    let isSpecial = false;

    // Password must be at least 8 characters long
    if (password.length < 8) {
      return false;
    }

    for (let i = 0; i < password.length; i++) {

      // No two adjacent characters should be the same
      if (i > 0 && password[i] === password[i - 1]) {
        return false;
      }

      if (password[i] >= "a" && password[i] <= "z") {
        isLowercase = true;
      }

      if (password[i] >= "A" && password[i] <= "Z") {
        isUppercase = true;
      }

      if (password[i] >= "0" && password[i] <= "9") {
        isDigit = true;
      }

      if (options.includes(password[i])) {
        isSpecial = true;
      }
    }

    return isLowercase && isUppercase && isDigit && isSpecial;
  }


  //gratest english letter in uppercase and lowercase
  function greatestLetter(s) {
  let greatest = "";
  for(let i =0;i<s.length;i++){
    if(s.includes(s[i].toLowerCase()) && s.includes(s[i].toUpperCase())){
      greatest = greatest>s[i]?greatest:s[i];
    }
  }
  return greatest.toUpperCase(); // return empty string if none found
}
//rearrange characters to make a string
 function checkDistances(s, distance) {
    const firstIndex = {};

    for (let i = 0; i < s.length; i++) {
      const ch = s[i];

      if (firstIndex[ch] === undefined) {
        firstIndex[ch] = i;
      } else {
        const actualDistance = i - firstIndex[ch] - 1;
        const expectedDistance =
          distance[ch.charCodeAt(0) - 'a'.charCodeAt(0)];

        if (actualDistance !== expectedDistance) {
          return false;
        }
      }
    }

    return true;   // <-- Missing in your code
  }

  //largest 3 digit in a string
   function largestGoodInteger(num) {
    let ans = "";

    for (let i = 0; i <= num.length - 3; i++) {
      if (
        num[i] === num[i + 1] &&
        num[i] === num[i + 2]
      ) {
        const temp = num.substring(i, i + 3);

        if (temp > ans) {
          ans = temp;
        }
      }
    }

    return ans;
  }


//remove digit from a number to get a target string
function removeDigit(number, digit) {
    let max = "";
    let idx = [];

    // Store all positions of digit
    for (let i = 0; i < number.length; i++) {
      if (number[i] === digit) {
        idx.push(i);
      }
    }

    // Remove one occurrence at a time
    for (let i = 0; i < idx.length; i++) {
      let ans = "";

      for (let j = 0; j < number.length; j++) {
        if (j !== idx[i]) {
          ans += number[j];
        }
      }

      if (ans > max) {
        max = ans;
      }
    }

    return max;
  }


  // cheak if a number have equal digit count and value
  class Solution {
    /**
     * @param {string} num
     * @return {boolean}
     */
    digitCount(num) {
        let freq = {};

        // Count how many times each digit appears
        for (let ch of num) {
            freq[ch] = (freq[ch] || 0) + 1;
        }

        // Check every index
        for (let i = 0; i < num.length; i++) {
            let expected = Number(num[i]);      // Value at index i
            let actual = freq[i.toString()] || 0; // Count of digit i

            if (expected !== actual) {
                return false;
            }
        }

        return true;
    }
}


//resultant array after removing anagram 
class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    removeAnagrams(words) {
        let ans = [];

        ans.push(words[0]);

        for (let i = 1; i < words.length; i++) {

            let curr = words[i].split("").sort().join("");
            let prev = ans[ans.length - 1].split("").sort().join("");

            if (curr !== prev) {
                ans.push(words[i]);
            }
        }

        return ans;
    }
}


//remove digit to find maximum result 
class Solution {
  removeDigit(number, digit) {
    let max = "";

    for (let i = 0; i < number.length; i++) {
      if (number[i] === digit) {
        // Remove the character at index i
        let candidate = number.slice(0, i) + number.slice(i + 1);

        if (candidate > max) {
          max = candidate;
        }
      }
    }

    return max;
  }
}

class Solution {
  removeDigit(number, digit) {
    let max = "";
    let idx = [];

    // Store all positions of digit
    for (let i = 0; i < number.length; i++) {
      if (number[i] === digit) {
        idx.push(i);
      }
    }

    // Remove one occurrence at a time
    for (let i = 0; i < idx.length; i++) {
      let ans = "";

      for (let j = 0; j < number.length; j++) {
        if (j !== idx[i]) {
          ans += number[j];
        }
      }

      if (ans > max) {
        max = ans;
      }
    }

    return max;
  }
}



//calculate digit sum of a string 
 while (s.length > k) {

        let ans = "";

        for (let i = 0; i < s.length; i += k) {

            let sum = 0;

            for (let j = i; j < Math.min(i + k, s.length); j++) {
                sum += Number(s[j]);
            }

            ans += sum;
        }

        s = ans;
    }

    return s;


//reverse prfix of the word 

class Solution {
    /**
     * @param {string} word
     * @param {string} ch
     * @return {string}
     */
    reversePrefix(word, ch) {
         if(!word.includes(ch)){
        return word;
    }

    let idx  = word.indexOf(ch);
    let ans = "";
   ans+=word.substring(0,idx+1).split("").reverse().join("")
    for(let i= word.indexOf(ch)+1 ;i<word.length;i++){
        ans+=word[i];
    }

    return ans;
    }
}

var reversePrefix = function(word, ch) {
    if(!word.includes(ch)){
        return word;
    }

    let idx  = word.indexOf(ch);
    let ans = "";
    while(idx>=0){
        ans+=word[idx];
        idx--;
    }

    for(let i= word.indexOf(ch)+1 ;i<word.length;i++){
        ans+=word[i];
    }

    return ans;
};
