import {
  bbStack,
  addBus,
  addBusListener,
  removeBus,
  removeBusListener,
  addListener,
  removeListener,
  listenerExists,
  splitEvents,
  clone,
} from './utils';

type EventOrDom = string | (Window & typeof globalThis) | Element;

type RemoveEvent = (
  a: EventOrDom,
  b: string | Function,
  c?: EventListener
) => void;

type AddEvent = (
  a: EventOrDom,
  b: string | Function,
  c?: EventListener | Function,
  d?: EventListenerOptions
) => void;

type EmitEvent = (
  event: string,
  ...params: unknown[]
) => void | Promise<Function[]>;

const on: AddEvent = (first, middle, last, opts) => {
  const e = splitEvents((!last ? first : middle) as string);

  if (!last) {
    for (let i = 0; i < e.length; i++) {
      const ev = e[i];

      if (listenerExists(ev, middle as Function)) return;

      addBus(ev);
      addBusListener(ev, middle as Function);
    }
  } else {
    for (let i = 0; i < e.length; i++) {
      const ev = e[i];
      addListener(
        first as (Window & typeof globalThis) | Element,
        ev,
        last as EventListenerOrEventListenerObject,
        opts
      );
    }
  }
};

const once: AddEvent = (first, middle, last, opts) => {
  const e = splitEvents((!last ? first : middle) as string);

  if (!last) {
    for (let i = 0; i < e.length; i++) {
      const ev = e[i];

      const fn = async () => {
        off(ev, fn);
        typeof middle === 'function' && (await middle());
      };

      on(ev, fn);
    }
  } else {
    for (let i = 0; i < e.length; i++) {
      const ev = e[i];

      const fn: EventListener = () => {
        typeof last === 'function' && last();
        off(first, ev, fn);
      };

      on(first, ev, fn, opts);
    }
  }
};

const off: RemoveEvent = (first, middle, last) => {
  const e = splitEvents((!last ? first : middle) as string);

  if (!last) {
    for (let i = 0; i < e.length; i++) {
      const ev = e[i];

      if (!listenerExists(ev, middle as Function)) return;
      removeBusListener(ev, middle as Function);
    }
  } else {
    for (let i = 0; i < e.length; i++) {
      const ev = e[i];
      removeListener(first as (Window & typeof globalThis) | Element, ev, last);
    }
  }
};

const clear = (event: string) => {
  removeBus(event);
};

const emit: EmitEvent = (event, ...params) => {
  bbStack.get(event)?.forEach((cb) => cb(...params));
};

const emitAsync: EmitEvent = (event, ...params) =>
  Promise.all(
    [...((bbStack.get(event) as Set<Function>) || [])].map((cb) => {
      return Promise.resolve(cb(...params));
    })
  );

const inspect = () => clone();

export { on, once, off, emit, emitAsync, clear, inspect };
