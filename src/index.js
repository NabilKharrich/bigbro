import {
  addEvents,
  addEventsOnce,
  addListeners,
  isFunction,
  removeEvents,
  removeListeners,
  trigger,
  triggerAsync,
} from './utils';

export const on = (event, dom, cb) =>
  isFunction(dom) ? addEvents(event, dom) : addListeners(event, dom, cb);

export const off = (event, dom, cb) =>
  isFunction(dom) ? removeEvents(event, dom) : removeListeners(event, dom, cb);

export const once = (event, dom) =>
  isFunction(dom) && addEventsOnce(event, dom);

export const emit = (event, ...params) => trigger(event, params);

export const emitAsync = (event, ...params) => triggerAsync(event, params);
