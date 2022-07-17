const bbStack = new Map<string, Set<Function>>();

const addBus = (event: string) => {
  bbStack.set(event, new Set());
};

const removeBus = (event: string) => {
  bbStack.delete(event);
};

const addBusListener = (event: string, cb: Function) => {
  bbStack.get(event)?.add(cb);
};

const removeBusListener = (event: string, cb: Function) => {
  bbStack.get(event)?.delete(cb);
  bbStack.get(event)?.size || removeBus(event);
};

const addListener = (
  element: (Window & typeof globalThis) | Element,
  event: string,
  listener: EventListenerOrEventListenerObject,
  options: boolean | AddEventListenerOptions | undefined
) => {
  element.addEventListener(event, listener, options);
};

const removeListener = (
  element: (Window & typeof globalThis) | Element,
  event: string,
  listener: EventListenerOrEventListenerObject
) => {
  element.removeEventListener(event, listener);
};

const eventExists = (event: string) => bbStack.has(event);

const listenerExists = (event: string, cb: Function) =>
  bbStack.get(event)?.has(cb) || false;

const splitEvents = (events: string) => events.split(' ');

const clone = () => new Map(bbStack);

export {
  bbStack,
  addBus,
  removeBus,
  addBusListener,
  removeBusListener,
  addListener,
  removeListener,
  eventExists,
  listenerExists,
  splitEvents,
  clone,
};
