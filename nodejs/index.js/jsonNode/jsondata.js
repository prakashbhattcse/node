import http from 'http';
const bioData={
    name :'amit',
    age : 20,
    course :'Btech',
};

const jsonData = JSON.stringify(bioData);       // to convert an object into json format or api

console.log(jsonData);                         // {"name":"vinod","age":26,"channel":"thapa technical"}



const againSameDataFromJsonToObject = JSON.parse(jsonData);     // To get back the original data from JSON format

console.log(againSameDataFromJsonToObject);             // { name: 'vinod', age: 26, channel: 'thapa technical' }