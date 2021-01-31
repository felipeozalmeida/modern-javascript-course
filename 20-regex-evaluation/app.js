let re;
// re = /hello/;
// re = /hello/i; // i =  case insensitive
// re = /hello/g; // g = global search
re = /hello/gi; // both modifiers

const str = 'Hello world';

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec(str);
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test(str);
// console.log(result);

// match() - Return result array or null
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match if not found returns -1
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
const newStr = str.replace(re, 'Hi');
console.log(newStr);
