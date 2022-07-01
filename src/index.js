import {
  eventsStack,
  clone,
  createEvent,
  listenerExists,
  splitEvents,
} from './utils';

export const on = (first, middle, last, opts) => {
  const e = splitEvents(!last ? first : middle);

  if (!last) {
    for (let i = 0; i < e.length; i++) {
      const ev = e[i];

      if (listenerExists(ev, middle)) return;

      createEvent(ev);

      middle && eventsStack[ev].push(middle);
    }
  } else {
    for (let i = 0; i < e.length; i++) {
      const ev = e[i];
      first.addEventListener(ev, last, opts);
    }
  }
};

export const off = (first, middle, last) => {
  const e = splitEvents(!last ? first : middle);

  if (!last) {
    for (let i = 0; i < e.length; i++) {
      const ev = e[i];

      if (!listenerExists(ev, middle)) return;

      eventsStack[ev].splice(eventsStack[ev].indexOf(middle), 1);
    }
  } else {
    for (let i = 0; i < e.length; i++) {
      const ev = e[i];
      first.removeEventListener(ev, last);
    }
  }
};

export const once = (events, cb) => {
  on(events, async function fn() {
    off(events, fn);
    await cb();
  });
};

export const emit = (event, ...params) => {
  if (!eventsStack[event]) return;

  for (let i = 0; i < eventsStack[event].length; i++) {
    eventsStack[event[i]](...params);
  }
};

export const emitAsync = (event, ...params) => {
  if (!eventsStack[event]) return;

  return Promise.all(
    eventsStack[event].map((cb) => Promise.resolve(cb(...params)))
  );
};

export const inspect = (event) => clone(event);
