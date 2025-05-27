export class PubSub {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event
  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  // Unsubscribe from an event
  unsubscribe(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((fn) => fn !== callback);
  }

  // Publish an event
  publish(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach((callback) => callback(data));
  }
}

// // Usage
// const pubSub = new PubSub();

// // Subscribe to 'message' event
// pubSub.subscribe("message", (data) => {
//   console.log(`Subscriber 1 received: ${data}`);
// });

// // Another subscription to 'message' event
// pubSub.subscribe("message", (data) => {
//   console.log(`Subscriber 2 received: ${data}`);
// });

// // Publish the 'message' event
// pubSub.publish("message", "Hello, Pub/Sub!");
