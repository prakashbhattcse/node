import { appendFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import path from 'path';
import {fileURLToPath} from 'url';

// fs.writeFileSync('read.txt','welcome to 1 file');              // this will write the data in read.txt but replaces the old data

// fs.mkdirSync('index.js');
appendFileSync('read.txt', '  Hello Prakash This Side');          // TO add extra data in same file


// fs.mkdirSync('Practice');                                        // CREATES A NEW FOLDER

// fs.mkdirSync('thapa');                                           // create a new folder
writeFileSync('thapa/bio.txt', 'hello world');                   // create a file inside the mentioned folder



// error
// const dirPath=join(__dirname,'crud');
// const filePath=`${dirPath}/apple.txt`;

// writeFileSync(filePath,'This is a simple text file');
