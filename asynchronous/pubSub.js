class PubSub {
  constructor() {
    this.events = {};
  }
  subscribe(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    }
  }
  unSubscribe(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(cb !== callback);
    }
  }
  publish(eventName, data) {
    if (this.events[eventName]) {
      this.event[eventName].map((callback) => callback(data));
    }
  }
}

const pubSub = new PubSub();

// Subscriber 1
const unsubscribe1 = pubSub.subscribe("event1", (data) => {
  console.log("Subscriber 1 received:", data);
});
