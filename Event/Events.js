// Event module: can create, fire & listen for your own events

const EventEmitter = require('events');
const event = new EventEmitter();
// or
// const events = require('events');
// const event = new events.EventEmitter();

event.on('myName', (arg1) => {
    console.log(`Namaskar ${arg1}, How are you?`);
});

event.on('myName', (arg1, arg2) => {
    console.log(`${arg1} is saying, Hey! i am ${arg2}`);
});

event.emit('myName', 'Srushtiraj', 'good!');