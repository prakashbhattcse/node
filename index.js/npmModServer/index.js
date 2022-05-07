import chalk from 'chalk';
import validator from 'validator';
import http from 'http';
// const http = require('http');


console.log(chalk.blue('Hello world!'));
console.log(chalk.red.inverse('failed'));
console.log(chalk.green.inverse('succes'));



const valid = validator.isEmail('f@awd.com');
console.log(valid ? chalk.green.inverse(valid) : chalk.red.inverse(valid));



// 1 EXAMPLE

http.createServer((req, res) => {

    if (req.url = '/') {
        res.end("Hello from the  US sides");
    } else if (req.url = '/about') {
        res.end("about");
    } else if (req.url = '/contact') {
        res.end("Hello from the contactUS sides");
    } else {
        res.end("404 error pages. Page doesn't exist");
    }
}).listen(8000);


// 2 EXAMPLE

http.createServer((req, res) => {

    if (req.url = '/') {
        res.end("Hello from the  US sides");
    } else if (req.url = '/about') {
        res.end("about");
    } else if (req.url = '/contact') {
        res.end("Hello from the contactUS sides");
    } else {
        res.end("404 error pages. Page doesn't exist");
    }
    // res.write('hello');
    // res.end();
}).listen(4500);


//  how above method working

function simplificationServer(req, res) {
    res.write('hello');
    res.end();
}

http.createServer(simplificationServer).listen(4600);


const bioData = {
    name: "vinod",
    age: 26,
    channel: "thapa technical",
};


const jsonData = JSON.stringify(bioData);       // to convert an object into json format or api

console.log(jsonData);                         // {"name":"vinod","age":26,"channel":"thapa technical"}



const againSameDataFromJsonToObject = JSON.parse(jsonData);     // To get back the original data from JSON format

console.log(againSameDataFromJsonToObject);             // { name: 'vinod', age: 26, channel: 'thapa technical' }