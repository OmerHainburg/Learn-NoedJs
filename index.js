let noun1 = '____';
let adjective = '____';
let noun2 = '____';
let verb = '____';
let noun3 = '____';


console.log(`The world's first ${noun1}
            was a very ${adjective} ${noun2}
            who loved to ${verb} while eating ${noun3} for every meal.`, '\n');

//Accessing the Process Object
console.log('-------Accessing the Process Object--------')
let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`, '\n');

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time 
for (let i = 0; i < 1000; i++){
  wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}.
            \nCurrent memory usage: ${process.memoryUsage().heapUsed}.
            \nAfter using the loop to add elements to the array,
             the process is using ${process.memoryUsage().heapUsed - initialMemory}
             more bytes of memory.`, '\n');

//Core Modules and Local Modules
console.log('-------Core Modules and Local Modules--------');
// Require modules in:
// Require modules in:
let Cat = require('./cat.js');
let Dog = require('./dog.js');

let fight = (dog, cat) => {
    if (dog.toothStrength > cat.clawStrength) {
        console.log(`${dog.name} wins!`);
    }
    else if (dog.toothStrength < cat.clawStrength) {
        console.log(`${cat.name} wins!`);
    }
    else {
        console.log(`${dog.name} and ${cat.name} are equally skilled fighters!`, '\n');

    }
}

const myDog = new Dog('Rex', Math.random());
const myCat = new Cat('Tabby', Math.random());

fight(myDog, myCat);

//Node Package Manager//
/*
In addition to local modules and core modules, we can take advantage of third-party modules.
Using libraries created by other developers is an essential aspect of production;
we don’t have to reinvent the wheel each time we want to include new functionality into our
applications. NPM, which stands for Node Package Manager, is an online collection, or registry,
of software. Developers can share code they’ve written to the registry or download code provided by
other developers.

When we download Node, the npm command-line tool is downloaded as well, which enables us to
interact with the registry via our terminal. There are hundreds of thousands of packages of re-usable
code in the NPM registry including powerful and popular frameworks like express and react.
You can explore the collection at the npm website.

One package we like is nodemon. It’s a powerful tool for development in Node that watches all
the files in a project you’re working on, and automatically restarts your application when any of them change.
*/
