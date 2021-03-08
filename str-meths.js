let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln = txt.length;

// finding string in a string
let str = "PLease locate where 'locate' occurs!"
let pos = str.indexOf('locate');
// console.log(pos)

let lastPos = str.lastIndexOf('locate');
// console.log(lastPos)
lastPos = str.lastIndexOf('locate', 15);
// console.log(lastPos)

pos = str.search('locate');
// console.log(pos)

/* Extracting String Parts
   There are 3 methods for extracting a part of
   a string:
      * slice (start, end)
      * substring ( start, end)
      * substr (start, lenght)
*/

// slice() Method
str = "Apple, Banana Kiwi";
let res = str.slice(14, 18);
// console.log(res)
res = str.slice(-4);
// console.log(res)
res = str.slice(-11);
// console.log(res)


// substring() Method
/* The difference between slice() and substring()
   cannot accept negative indexes
*/
res = str.substring(7, 13);
// console.log(res);

// substr() Method
/* The difference between slice() and substr() is
   that the second parameter specifies the lenght
   of the extracted part
*/
res = str.substr(0, 5);
// console.log(res)

// Replace String Content
/* The replace() method replaces a specified value
   with another value in a string
*/
str = "Please visit Microsoft!";
let n = str.replace("Microsoft, W3Schools");
// console.log(n)

/* By default, the replace() method replaces only the
   first match
*/
str = "Please visit Microsoft and Microsoft"
n = str.replace("Microsoft", "W3Schools");
// console.log(n)

/* By default, the replace() method is case sensitive.
   To make it case insensitive use a regular expression
   with an /i flag
*/

str = "Please visit Microsoft!";
n = str.replace(/MICROSOFT/i, "W3Schools")
// console.log(n)

/* To replace all matches use regular expression with a
   /g flag (global match)
*/
str = "Please visit Microsoft and Microsoft!";
n = str.replace(/Microsoft/g, "W3Schools");
// console.log(n);

//Uper and Lower Case
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
// console.log(text2)
text2 = text1.toLowerCase();
// console.log(text2)

// concat() method
text1 = "Hello";
text2 = "World";
let text3 = text1.concat(" ", text2);
// console.log(text3);

// trim() method
str = "    Hello World    "
// console.log(str.trim);

// JavaScript Padding
str = "5";
str = str.padStart(4,0);
// console.log(str)
str = str.padEnd(4,0);
// console.log(str);

// Extracting String Characters
/* There are 3 methods for extracting characters
   * charAt(position)
   * charCodeAt(position)
   * Property acces []
*/
str = "HELLO WORLD"
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0))
// console.log(str[0])

// Converting a String to an Array
txt = "a,b,c,d,e";
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("|"));
