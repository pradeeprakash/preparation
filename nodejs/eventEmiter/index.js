// 🔥 What is EventEmitter in Node.js?
// EventEmitter is a core module in Node.js that allows you to create,
// listen to, and emit custom events — kind of like a pub-sub (publish-subscribe) pattern.

// It’s part of the events module and is heavily used under the hood in things like HTTP servers, streams,
//  and even user-defined modules.

const EventEmitter = require("events");

const logger = new EventEmitter();

logger.on("log", (msg) => {
  console.log(`[LOG]: ${msg}`);
});

logger.emit("log", "Server started on port 3000");

const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
myEmitter.emit("greet", "Pradeep");

const newsFeed = new EventEmitter(); // Subject

// Observers
newsFeed.on("news", (headline) => console.log(`Subscriber A: ${headline}`));
newsFeed.on("news", (headline) => console.log(`Subscriber B: ${headline}`));

// Notify all observers
newsFeed.emit("news", "Node.js 20 Released!");
