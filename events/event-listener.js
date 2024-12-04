const event = require("./event-emitter");

const logger = new event.Logger();

logger.on("message", (msg) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Log: ${msg}`);
});

event.eventEmitter.on("print", (msg) => {
  console.log("Message Received : ", msg);
});

event.eventEmitter.emit("print", "My name is Deepanshu Mehra");

logger.log("Printing Logs .....");
logger.log("Printing logs for second time.....");

event.eventEmitter.once("only-once", (data) => {
  console.log(data);
});

// event.eventEmitter.emit("error", new Error("whoops!"));
event.eventEmitter.emit("only-once", "I will print message only once.");
