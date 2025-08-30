
/* 
    Topic: Regular Expressions in JavaScript
    --------------------------------------------------

    - Used for pattern matching in strings.
    - Two ways to write:
        1) Literal: /pattern/
        2) Constructor: new RegExp("pattern")

    Common Flags:
        g = global (find all matches)
        i = case insensitive
        m = multiline
*/

// Example string
let text = "JavaScript is amazing. I love javascript and Regex in JS.";

// 1) Using test()
let regex1 = /javascript/i;   // case-insensitive
console.log("test():", regex1.test(text)); // true

// 2) Using exec()
console.log("exec():", regex1.exec(text)); // match details

// 3) Using match()
console.log("match():", text.match(/javascript/gi)); // [ 'JavaScript', 'javascript' ]

// 4) Using matchAll()
for (let match of text.matchAll(/javascript/gi)) {
    console.log("matchAll():", match[0], "at index", match.index);
}

// 5) Using replace()
let newText = text.replace(/javascript/gi, "JS");
console.log("replace():", newText);

// 6) Using search()
console.log("search():", text.search(/Regex/)); // index where Regex found

// 7) Using split()
let parts = text.split(/\s+/);  // split by spaces
console.log("split():", parts);
