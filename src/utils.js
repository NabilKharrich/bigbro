export const eventsStack = {};

export const clone = () => ({ ...eventsStack });

export const createEvent = (event) =>
  (eventsStack[event] = eventsStack[event] || []);

export const listenerExists = (event, cb) => !!eventsStack[event]?.includes(cb);

export const splitEvents = (events) => events.split(' ');
