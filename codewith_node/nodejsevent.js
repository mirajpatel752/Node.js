const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("please true off the motor!");
  setTimeout(() => {
    console.log("its a gentle");
  }, 3000);
});

console.log("come running");
myEmitter.emit("event");
console.log("2come running 21");
