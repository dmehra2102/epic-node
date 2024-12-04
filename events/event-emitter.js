const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", msg);
  }
}

module.exports = {
  Logger,
  eventEmitter,
};
