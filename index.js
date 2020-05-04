const rep = (arr, num1, num2) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num1) {
            arr[i] = num2;
        }
    }
    return arr;
}
// console.log(rep([1,2,2,3,4],2,7)); // [1,7,7,3,4]

const largest = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}
// console.log(largest([1,5,90,2,4,245])); // 245

const dollar = (str) => {
    let newStr = str.split('');
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] > 0) {
            newStr[i] = '$';
        }
    }
    return newStr.join('');
}
// console.log(dollar('sus1lo')); // 'sus$lo'

const every = (num) => {
    let pertama = num % 10;
    while (num) {
        if (num % 10 !== pertama) {
            return false;
        }
        num = Math.floor(num/10);
    }
    return true;
}
// console.log(every(111)); // true
// console.log(every(111145)); // false
// console.log(every(1233)); // false

function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    console.log(h + ":" + m + ":" + s);
}
// setInterval(time,1000);

const filterFalse = (arr) => {
    return arr.filter((val) => val);
}
// console.log(filterFalse([58, '', 'abcd', true, null, false, 0, NaN, undefined, null])); // [58, 'abcd', true]

const capitalize = (str) => {
    let newStr = str.split(' ');
    let res = '';
    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substr(1);
    }
    res = newStr.join(' ');
    return res;
}
// console.log(capitalize('halo saya andi')); // 'Halo Saya Andi'

const palindrome = (str) => {
    let reversed = str.split('').reverse().join('');
    if (str === reversed) {
        return true;
    }
    return false;
}
// console.log(palindrome('racecar')); // true
// console.log(palindrome('table')); // false

const fizzbuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}
// console.log(fizzbuzz(5));
// console.log(fizzbuzz(15));

const anagram = (str1, str2) => {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.length !== str2.length) {
        return false;
    } else {
        var sortStr1 = str1.split('').sort().join('');
        var sortStr2 = str2.split('').sort().join('');
        if (sortStr1 === sortStr2) {
            return true;
        }
        return false;
    }
}
// console.log(anagram('finder', 'Friend')); // true
// console.log(anagram('hello', 'bye')); // false

const vowel = (str) => {
    let count = 0;
    let lib = 'aeiou';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < lib.length; j++) {
            if (str[i] === lib[j]) {
                count++;
            }
        }
    }
    return count;
}
// console.log(vowel('hello')); // 2
// console.log(vowel('why')); // 0

const fibonacci = (num) => {
    if(num < 2) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
// console.log(fibonacci(7));

const getBudgets = (arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i].budget;
    }
    return res;
}
// console.log(getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
// ])); // 65700
// console.log(getBudgets([
//     { name: "John",  age: 21, budget: 29000 },
//     { name: "Steve",  age: 32, budget: 32000 },
//     { name: "Martin",  age: 16, budget: 1600 }
// ])); // 62600

const concatArr = (...arr) => {
    return [].concat(...arr);
}
// console.log(concatArr([1, 2, 3], [4, 5], [6, 7])); // [1, 2, 3, 4, 5, 6, 7]
// console.log(concatArr([1], [2], [3], [4], [5], [6], [7])); // [1, 2, 3, 4, 5, 6, 7]

const changeEnough = (change,due) => {
    let quarter = change[0] * 0.25;
    let dime = change[1] * 0.1;
    let nickle = change[2] * 0.05;
    let penny = change[3] * 0.01;
    return (quarter + dime + nickle + penny >= due);
}
// console.log(changeEnough([2, 100, 0, 0], 14.11)); // false
// console.log(changeEnough([0, 0, 20, 5], 0.75)); // true

const keysAndValues = (obj) => {
    let res = []; let property = []; let value = [];
    property.push(Object.keys(obj));
    value.push(Object.values(obj));
    res.push(property,value);
    return res;
}
// console.log(keysAndValues({ key1: true, key2: false, key3: undefined})); // [["key1", "key2", "key3"], [true, false, undefined]]

String.prototype.vreplace = function (vowel) {
    let vowels = 'aeiou';
    return this.split("").map(letter => vowels.includes(letter) ? vowel : letter).join("");
}
// console.log("apples and bananas".vreplace("u")); // upplus und bununus  
// console.log("stuffed jalapeno poppers".vreplace("e")); // steffed jelepene peppers

const calculator = (num1,symbol,num2) => {
    let res = 0;
    if (symbol === "+") {
        res = num1 + num2;
    } else if (symbol === "-") {
        res = num1 - num2;
    } else if (symbol === "*") {
        res = num1 * num2;
    } else if (symbol === "/") {
        res = num1 / num2;
    } else if (symbol === "%") {
        res = num1 % num2;
    }
    return res;
}
// console.log(calculator(2, "+", 2)) // 4
// console.log(calculator(3, "-", 1)) // 2
// console.log(calculator(5, "*", 3)) // 15
// console.log(calculator(12, "/", 4)) // 3
// console.log(calculator(9, "%", 3)) // 0

const flatten = (arr) => {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
       arr2 = arr2.concat(arr[i]);
    }
    return arr2;
}
// console.log(flatten([[1, 2], [3, 4]])); // [1, 2, 3, 4]
// console.log(flatten([["a", "b"], ["c", "d"]])); // ['a', 'b', 'c', 'd']

const testJackpot = (arr) => {
    return arr.every(x => x === arr[0]);	
}
// console.log(testJackpot(["SS", "SS", "SS", "SS"])); // true
// console.log(testJackpot(["SS", "SS", "SS", "Ss"])); // false

const hasValidPrice = (product) => {
    let harga = product.price;
    if (typeof harga !== 'string' && harga >= 0) {
        return true;
     }
    return false;
}
// console.log(hasValidPrice({"product": "Milk", price: 1.50})); // true
// console.log(hasValidPrice({"product": "Eggs", price: 0})); // true
// console.log(hasValidPrice({"product": "Cheese", price: -1}))// false
// console.log(hasValidPrice({"product": "Cereal", price: "3"}))// false

const solveForExp = (a,b) => {
    return Math.log(b)/Math.log(a);
}
// console.log(solveForExp(4, 1024)); // 5
// console.log(solveForExp(2, 1024)); // 10

const reverseArr = (num) => {
    let strNum = num.toString();
    let reversed = strNum.split('').reverse();
    return reversed.map(Number);
}
// console.log(reverseArr(1485979)); // [9, 7, 9, 5, 8, 4, 1]
// console.log(reverseArr(12345)); // [1, 2, 3, 4, 5]

const mysteryFunc = (num) => {
    let strNum = num.toString();
    var output = 1;
    for (let i = 0; i < strNum.length; i++) {
        output *= Number(strNum[i]);
    }
    return output;
}
// console.log(mysteryFunc(152)); // 10
// console.log(mysteryFunc(832)); // 48

const evenOddTransform = (arr,n) => {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resArr.push(arr[i] + (n * (-2)));
        } else {
            resArr.push(arr[i] + (n * 2));
        }
    }
    return resArr;
}
// console.log(evenOddTransform([3,4,9], 3)); // [9, -2, 15]
// console.log(evenOddTransform([0,0,0], 10)); // [-20, -20, -20]

const boxSeq = (step) => {
    return step + (step % 2 * 2);
}
// console.log(boxSeq(0)); // 0
// console.log(boxSeq(1)); // 3
// console.log(boxSeq(2)); // 2

const findZip = (str) => {
    return str.indexOf("zip", str.indexOf("zip") + 1);
}
// console.log(findZip("all zip files are zipped")); // 18
// console.log(findZip("all zip files are compressed")); // -1

const getLength = (arr) => {
    return arr.flat(Infinity).length;
}
// console.log(getLength([1, [2, 3]])); // 3
// console.log(getLength([1, [2, [3, 4]]])); // 4

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const isPrime = (primes, num) => {
    let [a, b] = [0, primes.length - 1];
    while (a !== b) {
        const i = (a + (b - a) / 2) | 0;
        if (primes[i] === num)
            return "yes";
        else if (primes[i] < num)
             a = i + 1;
        else 
            b = i - 1;
    }
    return primes[a] === num ? "yes" : "no";
}
// console.log(isPrime(primes, 67)); // yes
// console.log(isPrime(primes, 36)); // no

const towerHanoi = (disc) => {
    return (2**disc) - 1;
}
// console.log(towerHanoi(3)); // 7
// console.log(towerHanoi(5)); // 31

class Book {
    constructor (title, author) {
        this.title = title;
        this.author = author;
    }
}
const PP = new Book('Pride and Prejudice', 'Jane Austen');
const H = new Book('Hamlet', 'William Shakespeare');
const WP  = new Book('War and Peace', 'Leo Tolstoy');
// console.log(PP);
// console.log(H);
// console.log(WP);

const topNote = (arr) => {
    return arr.map((student) => ({
        name : student.name,
        topNote : Math.max(...student.notes)
    }))
}
// console.log(topNote([
//     { name: "John", notes: [3, 5, 4] },
//     { name: "Brian", notes: [78, 90, 21] },
//     { name: "Eddy", notes: [82, 54, 100] },
// ]));

const numInStr = (arr) => {
    let resArr = [];
    let num = /\d/;
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (num.test(arr[i])) {
            resArr[j] = arr[i];
            j++;
        }
    }
    return resArr;
}
// console.log(numInStr(["1a", "a", "2b", "b"])); // ["1a", "2b"]
// console.log(numInStr(["abc", "abc10"])); // ["abc10"]
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ["ab10c", "a10bc"]
// console.log(numInStr(["this is a test", "test1"])); // ["test1"]

