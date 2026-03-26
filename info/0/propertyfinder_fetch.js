'use strict';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Your module code goes here

console.log('Current directory:', __dirname);
console.log('Current file:', __filename);