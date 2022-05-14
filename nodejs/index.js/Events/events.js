import EventEmitter from 'events';

const event = new EventEmitter();
const eventEmitter = new EventEmitter();


// EMIT is used to trigger an event
// ON is used to add a callback function that's going to be executed when the event is triggered

event.on('sayMyName', () => {
    console.log('My name is Prakash');
});

event.on('start', () => {
    console.log('started');
  });
  

event.emit('sayMyName');

event.emit('start');


// You can pass arguments to the event handler by passing them as additional arguments to emit()

eventEmitter.on('start', number => {
    console.log(`started ${number}`);
  });
  
  eventEmitter.emit('start', 23);
  

//   Multiple arguments

eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
  });
  
  eventEmitter.emit('start', 1, 100);
  
