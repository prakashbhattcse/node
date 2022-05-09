import http from 'http';
import { data } from './data.js'

http.createServer((req, resp) => {
    resp.writeHead(200, { 'content-type': 'application\json' });
    // resp.end(JSON.stringify({name:'Amit',age:20, course:'Btech'}))
    resp.end(JSON.stringify(data))

}).listen(100);