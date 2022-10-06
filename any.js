// console.log('any.js is called !');

// module.exports.example = () => {
//     console.log('succesfully exmaple function called');
//     return 'this from example function return ! great';
// }


// module.exports.c = (a,b) => {
//     return a+b;
// };  

// const lodash = require('lodash');

// var isstrings = lodash.isString('samyu');
// console.log(isstrings);

// var isstring = lodash.isString(1213);
// console.log(isstring);

// var uni = lodash.uniq([1,2,1,55,3,8,55,9]);
// console.log(uni);
// var unis = lodash.uniq(['sdff',3,'dsfdf','3','dsf',5,6,2,'sdff']);
// console.log(unis);

// var createNote = (title , body) => {
//     console.log('note created' , title , body);
// }
// debugger;
// module.exports = {
//     createNote
// }

console.log('app started');

setTimeout(() => {
    console.log('inbetween processing')
},2000);

console.log('app ended');