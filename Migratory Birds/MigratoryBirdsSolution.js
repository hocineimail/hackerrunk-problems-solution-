'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let Birds = [];
  
    let Type
    let frequency  ;
      //this loop for creating array of BIrDS
    for (let i = 1; i < 6; i++){
        let rep = 0
        for (let j = 0; j < arr.length; j++){
            if ( i === arr[j]) {
                rep = rep + 1;
            }
        }
        Birds.push(rep)
    }
      //this lopp for find the highest frequency
    frequency = Birds[0]
    for (let i = 1; i < 6; i++) {
        
        if (Birds[i] > frequency) {
            frequency = Birds[i];
            Type = i + 1;
        }
    }
   return Type
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
