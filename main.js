// Build Module
const fs = require('fs');
const wasm = fs.readFileSync('test.wasm');
const mod = new WebAssembly.Module(wasm);

// Build Instance
const importObject = {};
const instance = new WebAssembly.Instance(mod, importObject);

// Call function addTwo
const addTwo = instance.exports.addTwo;
const answer = addTwo(7, 4);
console.log(`7 + 4 = ${answer}`);