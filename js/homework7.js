// 1
const numbers = [92, 110, 31];
numbers[1] = 10;
console.log(numbers);

// 2

const words = ['day', 'night', 'evening'];
words[3] = 'morning';
console.log(words);     

// 3

const numbersList = [15, 378, 117];
let totalSum = 0;
for (let number of numbersList) {
    totalSum += number;
}
console.log(totalSum);

// 4

const numbers2 =  [1, 3, 5, 7, 9];

for (let number of numbers2) {
    console.log(number);
}

// 5

const words2 = ['phone', 'food', 'McDonalds', 'YouTube', 'KFC'];

for (let word of words2) {
    if (word.length > 5) {
        console.log(word);
    }
}

// 6

const numbers3 = [2, 4, 5, 1, 3, 6, 10, 9, 8, 7];
let max = numbers3[0];

for (let number of numbers3) {
    if (number > max) {
        max = number;
    }
}
console.log(max);

// 7 

const numbersList2 = [192, 73, 1, 331, 7, 31, 1672, 33, 15, 10];

for (let number of numbersList2) {
    if (number % 2 === 0) {
        console.log(number)
    }
}