const busStack = {};

export const isFunction = (test) => typeof test === 'function';

export const splitEvents = (events) => events.split(' ');

export const addListeners = (event, dom, cb) =>
  splitEvents(event).forEach((e) => dom.addEventListener(e, cb));

export const removeListeners = (event, dom, cb) =>
  splitEvents(event).forEach((e) => dom.removeEventListener(e, cb));

export const addEvents = (events, cb) =>
  splitEvents(events).forEach((e) => {
    busStack[e] = busStack[e] || [];

    cb && !busStack[e].includes(cb) && busStack[e].push(cb);
  });

export const removeEvents = (events, cb) => {
  splitEvents(events).forEach((e) => {
    busStack[e] &&
      busStack[e].includes(cb) &&
      busStack[e].splice(busStack[e].indexOf(cb), 1);
  });
};

export const addEventsOnce = (events, cb) => {
  splitEvents(events).forEach((e) => {
    addEvents(e, async function fn() {
      removeEvents(e, fn);
      await cb();
    });
  });
};

export const trigger = (event, params) => {
  busStack[event] && busStack[event].forEach((cb) => cb(...params));
};

export const triggerAsync = (event, params) => {
  if (!busStack[event]) return;

  return Promise.all(
    busStack[event].map((cb) => Promise.resolve(cb(...params)))
  );
};
