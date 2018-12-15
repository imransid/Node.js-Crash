// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// // ****The following example shows a simple EventEmitter instance with a single listener. 
// // The eventEmitter.on() method is used to register listeners, 
// // while the eventEmitter.emit() method is used to trigger the event.****
// eventEmitter.on('clk', () => console.log('Hello CLK event'))
// eventEmitter.emit('clk');

// // ****util.inherits(constructor, superConstructor)...*** 
// // ****ES6 example using class and extends:****
// const EventEmitter = require('events');

// class MyStream extends EventEmitter {
//   write(mark, name) {
//     this.emit('result', mark, name);
//   }
// }

// const stream = new MyStream();

// stream.on('result', (mark, name) => {
//   console.log(`${name} scored : ${mark}`);
// });

// stream.write(95 ,'Imran');
// stream.write(90 ,'jisan');
// stream.write(95 ,'Nisan');
// stream.write(95 ,'Antu');
// stream.write(95 ,'Zahid');
// stream.write(95 ,'Jahade');
// stream.write(95 ,'Atik');
