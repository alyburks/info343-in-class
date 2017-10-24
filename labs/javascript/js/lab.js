// Put your JavaScript lab code here!
// Put your JavaScript lab code here!
let words = `I like JavaScript more than I like to party.`;
console.log(words.slice(28));

let words2 = `I love Washington State University`;
console.log(words2.replace('Washington State University','University of Washington'))


function sumUpTo(number){
    let x = 0;
    for(let i = 0; i <= number; i++){
        x += i;
    }
    return x;
}

console.log(sumUpTo(5));

function vowelCount(word){
    let count = 0
    for(let i = 0; i < word.length; i++){
        if (word.charAt(i) == 'a' || word.charAt(i) == 'e' || word.charAt(i) == 'i' || word.charAt(i) == 'o' || word.charAt(i) == 'u') {
            count++;
        }               
    }
    return count;
}

console.log(vowelCount('you'));

function findMin(numbers){
    let min = null;
    for(let i = 0; i < numbers.length; i++){
        if(i = 0){
            min = numbers[i];
        } else if (min > numbers[i]){
            min = numbers[i];
        }
    }
}

var nums = [-1, 3.2, 12, 15, -4, 1, -12.5, 1, 8];

console.log(findMin(nums));

let books = [
    {name: 'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
    read = true
    },
    {name: 'The Great Gastby',
    author:  'F. Scott Fitzgerald',
    read: false
    },
    {name: 'The Hunger Games',
    author: 'Suzanne Collins',
    read = false}
]

books.push({name: '1984', author: 'George Orwell', read: true} )