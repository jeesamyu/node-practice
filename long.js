// console.log('hello mf!');

var fs = require('node:fs/promises');
const os = require('os');

var user = os.userInfo('user');
// console.log(user)

var anynote = require('./any');

var hello = "hello this new line"

// res = anynote.c(10,15);
// console.log(res)
// console.log(anynote.c)

// res = anynote.example();
// console.log(res);



fs.appendFile('message.txt' ,`new line ${ hello}`);

// const yorgs = require('yargs');
// debugger;
// console.log('process', process.argv);
// console.log('yorgs' , yorgs.argv)
// debugger;
// var argvmethod = yorgs.argv;

// var command = argvmethod._[0];

// if(command === 'create'){
//     anynote.createNote(argvmethod.title , argvmethod.body);
// }else if(command === 'read'){
//     console.log('component is readed');
// }else if(command === 'update'){
//     console.log('component is updated');
// }else if(command === 'delete'){
//     console.log('component is deleted');
// }else{
//     console.log('command not fond');
// }
