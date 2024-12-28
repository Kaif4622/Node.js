const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const user = 'John'; // Define a user variable

eventEmitter.on('sayHello', () => {
    console.log("Hello Mr.", user);  // Use the defined user variable
});

// Emit the 'sayHello' event with correct string syntax
eventEmitter.emit('sayHello');
