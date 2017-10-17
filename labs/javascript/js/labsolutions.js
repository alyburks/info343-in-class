// Strings
let party = "I like JavaScript more than I like to party. ";
let partySlice = party.slice(28, 45);
console.log(partySlice);

let lies = "I love Washington State University.";
let truth = lies.replace("Washington State University", "The University of Washington");
console.log(truth);

let combine = partySlice.concat(truth);
console.log(combine);

// Functions

// Summing Numbers
function sumUpTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

// Counting Vowels
function vowelCount(string) {
	let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowels.indexOf(string.charAt(i)) != -1) {
            count++;
        }
    }
    return count;
}

// Arrays 

// Find the Smallest Number
function findMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Find the Longest Word
function longestWord(array) {
    let long = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= long.length) {
            long = array[i];
        }
    }
    return long;
}

// Remove all Instances of a Word 
function removeAll(array, string) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() != string.toLowerCase()) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// Objects
let books = [
    {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        haveRead: true
    },
    {
        title: 'The Great Gastby',
        author: 'F. Scott Fitzgerald',
        haveRead: false
    },
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        haveRead: false
    }
];

books.push(
    {
        title: '1984',
        author: 'George Orwell',
        haveRead: true
    }
);
  
function listBooks(books) {
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let bookInfo = book.title + '" by ' + book.author;
        if (book.haveRead) {
            console.log('I have read "' + bookInfo);
        } else {
            console.log('I really want to read "' + bookInfo);
        }
    }
}

listBooks(books);