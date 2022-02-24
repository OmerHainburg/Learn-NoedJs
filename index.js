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

//Event-Driven Architecture
console.log('-------------Event-Driven Architecture------------')
// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
    console.log(`Celebrate ${data}`);
}

// Here we create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();

// Here we subscribe to 'celebration' events and provide a callback function which will
// be passed the event's data
myEmitter.on('celebration', listenerCallback);

// Here we emit an event, we pass the event type, 'celebration', as the first argument,
// and the event data as the second
myEmitter.emit('celebration', 'good times, come on!','\n');

/*Asynchronous JavaScript with Node.js
In server-side development, we often perform time-consuming tasks such as reading files
or querying a database. Instead of halting the execution of our code to await these operations
or using multiple threads like other back end environments, Node was designed to use an event loop like
the one used in browser-based JavaScript execution. The event-loop enables asynchronous actions to be
handled in a non-blocking way.
Node provides a number of APIs for performing asynchronous tasks which expect callback functions to be
passed in as arguments. Under the hood, these APIs trigger the subscription to and emitting of events to
signal the completion of the operation. When the operation completes, the callback function is added to
a queue, or line, of tasks waiting for their turn to be executed. When the current stack, or list,
or synchronous tasks finish executing, the operations on the queue will be performed.
This means if synchronous tasks never end, operations waiting in the event-queue would never have
the chance to run. Take a look at the following example code using the asynchronous Node setTimeout()
API which asynchronously executes a provided callback function after a given delay:
let keepGoing = true;
let callback = () => {
  keepGoing = false;
};
setTimeout(callback, 1000); // Run callback after 1000ms
while(keepGoing === true) {
  console.log(`This is the song that never ends. Yes, it just goes on and on my friends.
  Some people started singing it, not knowing what it was, and they'll continue singing it forever just because...`)
};
This while-loop will continue forever! Even though the callback changing the keepGoing variable to false
is added to the event queue after 1 second, it will never have a chance to run— the synchronous code from
the loop will always fill the stack! If we wanted to avoid the infinite loop,
we could replace the while-loop with an asynchronous function— for example, the Node setInterval() API.
Note: The modern way of handling asynchronous tasks is through JavaScript Promises (developers also
favor the newer async...await syntax). If you’re not familiar with these topics, check out our lessons on them.
Newer versions of Node (v8.0.0 and later) provide a collection of the traditional Node asynchronous
APIs formatted for promises instead of callbacks. This can be found on util.promisify.
 Many contemporary 3rd party libraries also favor promise-based patterns over traditional callbacks.
 */

 //User Input/Output
 console.log("----------------User Input/Output----------------")

let {testNumber} = require('./game.js');

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
  let input = userInput.toString().trim();
	testNumber(input);
};

process.stdin.on('data', playGame);

//Errors
console.log('----------------------Errors-----------------------');
const api = require('./api.js');

// An error-first callback
let errorFirstCallback = (err, data) => {

   if (err) {
     console.log(`Something went wrong. ${err}\n`);
   } else {
     console.log(`Something went right. Data: ${data}\n`);
   }
 };

 api.errorProneAsyncApi('problematic input', errorFirstCallback);

 //FileSystem
 console.log('--------------------FileSystem--------------------');

 const fs = require('fs');

    let secretWord = null;

    let readDataCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong: ${err}`);
    } else {
        console.log(`Provided file contained: ${data}`);
    }
    };

    //fs.readFile('./fileOne.txt', 'utf-8', readDataCallback);
    //fs.readFile('./anotherFile.txt', 'utf-8', readDataCallback);
    fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);

    secretWord = "cheeseburgerpizzabagels";

    //Readable Streams
    console.log('--------------------Readable Streams---------------------');
    const readline = require('readline');
    const fs1 = require('fs');

    const myInterface = readline.createInterface({
    input: fs1.createReadStream('shoppingList.txt')
    });

    const printData = (data) => {
    console.log(`Item: ${data}`);
    };

    myInterface.on('line', printData);

    //Writable Streams
    console.log('----------------Writable Streams----------------')
    const readline1 = require('readline');
    const fs2 = require('fs');

    const fileStream = fs2.createWriteStream('shoppingResults.txt');

    const myInterface1 = readline1.createInterface({
    input: fs.createReadStream('shoppingList.txt')
    });

    let transformData = (line) => {
    fileStream.write(`They were out of: ${line}\n`); 
    }

    myInterface1.on('line', transformData);

    //Create an HTTP Server
    console.log('--------------------Create an HTTP Server------------------');
    const http = require('http');
    let {requestListener} = require('./callbackFile.js');
    const PORT = process.env.PORT || 4001;

    const server = http.createServer(requestListener);

    server.listen(PORT);




