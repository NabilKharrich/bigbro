import {
  eventsStack,
  clone,
  createEvent,
  listenerExists,
  splitEvents,
} from './utils';

/**
 * Adds a new bus event callback or event listener
 *
 * @param {string|Element} first bus event name or dom element
 * @param {string|Function} middle bus event callback or event type
 * @param {Function|undefined} last listener callback
 * @param {Object} opts event type options
 */
export const on = (first, middle, last = undefined, opts = {}) => {
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

/**
 * Removes a bus event callback or event listener
 *
 * @param {string|Element} first bus event name or dom element
 * @param {string|Function} middle bus event callback or event type
 * @param {Function|undefined} last listener callback
 */
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

/**
 * Adds the event and removes it after the first occurrence
 *
 * @param {string|Element} first bus event name or dom element
 * @param {string|Function} middle bus event callback or event type
 * @param {Function|undefined} last listener callback
 * @param {Object} opts event type options
 */
export const once = (first, middle, last = undefined, opts = {}) => {
  if (!last) {
    const fn = async () => {
      off(first, fn);
      await middle();
    };

    on(first, fn);
  } else {
    const fn = () => {
      last();
      off(first, middle, fn);
    };

    on(first, middle, fn, opts);
  }
};

/**
 * Emits the given event
 *
 * @param {string} event bus event name
 * @param  {...any} params optional parameters for the callbacks
 */
export const emit = (event, ...params) => {
  if (!eventsStack[event]) return;

  for (let i = 0; i < eventsStack[event].length; i++) {
    eventsStack[event][i](...params);
  }
};

/**
 * Emits the given event asyncronously
 *
 * @param {string} event bus event name
 * @param  {...any} params optional parameters for the callbacks
 */
export const emitAsync = (event, ...params) => {
  if (!eventsStack[event]) return;

  return Promise.all(
    eventsStack[event].map((cb) => Promise.resolve(cb(...params)))
  );
};

/**
 * Returns a clone of the events stack. Usefull for debugging
 *
 * @returns Object
 */
export const inspect = () => clone();
