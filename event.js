const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", (e) => {
    console.log("Listener called", e);
});

// Raise an event
// Order important first Register and then emit
// emit goes trough a list of all listeners
// event arguments optional
emitter.emit("messageLogged", {id: 1, url: "http://"});