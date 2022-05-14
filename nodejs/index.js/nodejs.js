const fs = require('fs');

// fs.writeFileSync('read.txt','welcome to 1 file');              // this will write the data in read.txt but replaces the old data

// fs.mkdirSync('index.js');
fs.appendFileSync('read.txt', '  Hello Prakash This Side');          // TO add extra data in same file


// fs.mkdirSync('Practice');                                        // CREATES A NEW FOLDER

// fs.mkdirSync('thapa');                                           // create a new folder
fs.writeFileSync('thapa/bio.txt', 'hello world');                   // create a file inside the mentioned folder
