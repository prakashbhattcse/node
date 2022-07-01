// import express from 'express'
const path = require('path');
var express = require('express')
var app = express();

console.log(__dirname);                 // this will give directory path 
// OUTPUT   -  D:\nodejs\expressjs\public

console.log(path.join(__dirname, 'public'));     // this will give the public file path inside directory  
// OUTPUT   -  D:\nodejs\expressjs\public\public

const staticPath = path.join(__dirname, '/public');
// const staticPaths = path.join(__dirname);


// app.get('/', function(req, res) {
//     res.sendFile(staticPaths, '/index.html');
//   });
  
app.set('view engine','hbs');

// As we know template engine uses views folder but what if we want to use another name other then views
// app.set('views', the new name path)



//  TO RENDER dynamic data
app.get('/', (req, res) => {
    const user={
        name:'Peter',
        email:'peter@test.com',
        country:'USA',
        skills:['php','js','c++']
    }
    res.render('index.hbs', {user})
  })


  

  app.get('/', (req, res) => {
    res.render('index', {myName:'Amit'})
  })
//  TO RENDER STATIC WEBSITE WITH EXPRESS JS
app.use(express.static(staticPath));




app.get('/', (req, res) => {
    res.send('hello amit from root folder')
});

app.get('/about', (req, res) => {
    res.send('hello from about');
});

// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>")
})

// app.get('/nav', (req, res) => {
//     res.send('hello from about');
// }); 



// The res.send function sets the content type to text/Html which means that the client will now treat it as text.
// res.json function on the other handsets the content-type header to application/JSON so that the client treats the
//  response string as a valid JSON object.

// res.send();  me string pass kroge to string jayegi as a response 
// Par object yaa array pass kroge to JSON data Jayega .
// Par agar res.json(); use Kara hai to Kuch bhi daalo json file hi return krega.


// app.get('/route', (req, res) => {
//     res.send([

//         {
//             id: 1,
//             name: 'amit',
//         },
//         {
//             id: 1,
//             name: 'amit',
//         },
//         {
//             id: 2,
//             name: 'amit',
//         },
//         {
//             id: 3,
//             name: 'amit',
//         },
//         {
//             id: 4,
//             name: 'amit',
//         },

//     ]);
// });



// app.get('/route', (req, res) => {
//     res.json([

//         {
//             id: 1,
//             name: 'amit',
//         },
//         {
//             id: 1,
//             name: 'amit',
//         },
//         {
//             id: 2,
//             name: 'amit',
//         },
//         {
//             id: 3,
//             name: 'amit',
//         },
//         {
//             id: 4,
//             name: 'amit',
//         },

//     ]);
// });







app.listen(8000, () => {
    console.log('listing the port at 8000');
});

