// Each type of Stream is an EventEmitter instance and throws several events at
// different instance of times. For example, some of the commonly used events are-

// DATA   - This event is fired when there is data is available to read.
// END    - It is fired when there is no more data to read.
// ERROR  - It is fired when there is any error receiving or writing data.
// FINISH - It is fired when all the data has been flushed tg underlying system.
import http from 'http';
import * as fs from 'fs';


const server=http.createServer();
server.on("request", (req, res)=>{
 
//   fs.readFile("input.txt", (err, data)=>{
//     if (err) return console.error(err);
//     res.end(data.toString());
//   });
// });
//        var fs = require('fs');
//        var data = fs.readFileSync('file.txt');


// const rstream=fs.createReadStream("input.txt");
// rstream.on("data", (chunkdata)=>{
//   res.write(chunkdata);
// });
// rstream.on("end", ()=>{
//   res.end();
// });



// MOST EFFICENT AND EASY METHOD

const rstream =fs.createReadStream('input.txt');
rstream.pipe(res);
});
server.listen(8000, "127.0.0.1");










// *{
//   padding:0;
//   margin: 0;
//   font-family: "Quicksand",sans-serif;

// }
// body{
//   background: #f3f2ef;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   height: 100vh;
//   width: 100vw;

// }
// html,body{
//   font-size: 62.5%;
//   height: 100%;
// }
// html{
//   background: #eee;
// }
// .box{
//   width: 20vw;
//   height:70vh;
//   border-radius: 0.5rem;
//   box-shadow: 0 0.2rem 3rem rgba(0,0,0,0.2);
//   background: #a5bbdd;
//   position: relative;
//   overflow: hidden;
//   transform: translate3d(0,0,0);
//   min-width:20rem;
//   min-height: 35rem;

// }
// .wave{
//   opacity: 0.3;
//   position: absolute;
//   top: 120%;
//   left: 50%;
//   background: #fff;
//   width: 50rem;
//   height: 50rem;
//   margin-left: -25rem;
//   margin-top: -25rem;
//   transform-origin:50% 48% ;
//   border-radius: 43%;
//   animation: drift 3000ms infinite linear;
//   z-index: -1;
// }
// .wave.-three{
//   animation: drift 5000ms, infinite linear;
//   z-index: 2!important;
//   opacity: 0.2;
// }
// .wave.-two{
//   animation: drift 7000ms, infinite linear;
//   z-index: 3!important;
//   opacity: 0.1;
// }
// .box:after{
//   content: "";
//   display: block;
//   left:0;
//   top:0;
//   width:100%;
//   height: 100%;
//   z-index: 11;
//   transform: translate3d(0,0,0);
// }
// @keyframes drift{
//   from{
//       transform: rotate(0deg);

//   }
//   to{transform: rotate(360deg);}
// }
// .info{
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 45%;
//   z-index:4;
// }
// .location{
//   margin-top: 1.5rem;
//   text-align: center;
//   font-weight: 800;
//   font-size: 3rem;
//   font-weight: 600;
// }
// .fa-street-view{
//   animation: rotates 3s linear infinite alternate;
// }
// @keyframes rotates{
//   from{
//       transform: translatex(-0.5rem);

//   }
//   to{
//       transform: translatex(0.5rem);

//   }
// }
// #date{
//   text-align: center;
//   margin-top: 0.5rem;
//   color: #57606f;
//   font-size: 1.2rem;
//   font-weight: 300;
//   text-transform: uppercase;
// }
// .temp{
//   margin-top: 2.5rem;
//   text-align: center;
//   font-size: 5rem;
// }
// .tempmin_max{
//   text-align: center;
//   margin-top: 0.3rem;
//   font-weight:300;
//   font-size: 1.2rem;
//   color: #57606f;
// }
// #weathericon{
//  height: 55%;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  font-size: 3em;
// }
// #weathericon .fas{
//   font-size: 6rem;
//   animation: fas-anime 3s linear infinite alternate;
// }
// @keyframes fas-anime{
//   from{
//       transform: scale(1.1);
//   }
//   to{
//       transform: scale(1.5);

//   }
// }
// @media (max-width:600px){
//   .box{
//       width: 90vw;
//       height: 80vh;
//   }
//   .wave{
//       top:85%;
//   }
//   #weathercon{
//       font-size:5em;
//   }
// }
// @media (max-width:500px){
//   .box{
//       height: 80vh;
//   }
//   .wave{
//       top:115%;
//   }
// }
// body > span{
//   width: 100vw;
//   text-align: center;
//   color: gray;
// }