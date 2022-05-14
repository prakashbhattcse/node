// const fs=require('fs');
import * as fs from 'fs';

const bioData={
    name :'amit',
    age : 20,
    course :'Btech',
};

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

fs.writeFile('json1.json', jsonData, (err)=>{
    console.log('done');
});

fs.readFile('json1.json','utf-8', (err,data)=>{
const orgData=JSON.parse(data);
console.log(data);
console.log(orgData);
});