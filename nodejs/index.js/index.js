// >>> TO CREATE NEW FILE INSIDE ANY FOLDER

// type nul > index.js

import path from 'path';
import * as fs from 'fs';
// import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const buf_data = readFileSync("read.txt");       // THIS WILL GIVES US DATA IN BUFFER OR ENCRPT TYPE TO CONVERT IT TO READBLE WE WILL DO THE NEXT STEP MENTIONED

const org_data = buf_data.toString();
console.log(org_data);



//  WITH THE USE OF UTF-8 WE DONT NEED TO CONVERT THE DATA TO STRING
const nonbuf_data = readFileSync("read.txt", 'utf-8');
console.log(nonbuf_data);

