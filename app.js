'use strict'
// window.onload = () => {
//     console.log('This is your first program executing!');
// }

// const para = document.querySelector('.dancerStyle');
// para.addEventListener('click', updateName);

// function updateName() {
//     let name = prompt('Please enter a new name');
//     para.textContent = 'Dancer 1: ' + name;
// }
// // this a function to add content to the html doy
// const myPara = document.getElementById('clickMe');
// myPara.innerHTML = 'I like ' + 'ba' + (+ 'javascript') + 'a';

// console messages
// console.log("my name is Meshack")
// console.log("05/10")
// console.log("simba the dog")
// console.log("Venice")

// lesson 3
// strings
console.log('strings'.slice(4).toUpperCase())
console.log(Number.MAX_SAFE_INTEGER.toLocaleString())
console.log(Number.MAX_VALUE)
// boolean
console.log(true)
console.log(false)
console.log(3 < 2)

// undefined and null
console.log(undefined)
console.log(null)

// symbols
console.log(Symbol('symbol'))

// typeof

console.log(typeof 123)
console.log(typeof '123')
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof null)
console.log(typeof Symbol())

// primitive data types are data that are not objects and as such are immutable i.e cannot be changed
/*
There are seven primitive data types undefined, null, string, number, bigint boolean and symbol
bigint is a type of data that represents numbers larger than max_safe_integer which is the maximum safe integer for the primitive data type number.
symbol: This data type represents a unique identifier, and you need to use a symbol constructor, which is symbol(), to declare a symbol. If you’d like, you can add a string inside the constructor to give it a name. In JavaScript, two symbols are never the same.
 */
// type coercion
console.log(1 + '1')
console.log(11 == '11')
console.log(11 === '11')
