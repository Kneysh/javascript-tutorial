const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach() approach:
const tenFolds = [];

numbers.forEach((num) => {
    tenFolds.push(num*10);
})
// console.log(tenFolds);

// map() approach:   [applies to each item] 
const hundredFolds = numbers.map((num) => num*100);    // implicit return
// console.log(hundredFolds);


// chaining

// const evenTenFolds = numbers.filter((num) => num%2 === 0).map((num) => num*10);  [one-liner]
// [readable]
const evenTenFolds = numbers
                    .filter((num) => num%2 === 0)   // returns an array of all the even numbers to the next chain
                    .map((num) => num*10);    // takes the array of even numbers and multiplies each number by 10
// console.log(evenTenFolds);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
];

const fictBooks = books.filter((bk) => bk.genre === "Fiction").map((bk) => bk.title);
console.log(fictBooks);