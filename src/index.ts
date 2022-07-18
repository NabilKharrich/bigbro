const bus = new Map<string, Set<any>>();

/**
 * Add one or more event listeners or register a callback to one or more events
 *
 * @param events the name of one or more events
 * @param domOrCb the dom element or bus callback
 * @param listener the dom event listener
 * @param options the dom event options
 */
const on = (
  events: string,
  domOrCb: Function | Window | Element,
  listener?: EventListener,
  options?: EventListenerOptions
) => {
  events
    .split(' ')
    .forEach((event) =>
      listener && typeof domOrCb !== 'function'
        ? domOrCb.addEventListener(event, listener, options)
        : bus.set(event, new Set()).get(event)?.add(domOrCb)
    );
};

/**
 * Remove one or more event listeners or detatches a callback from on or more events
 *
 * @param events the name of one or more events
 * @param domOrCb the dom element or bus callback
 * @param listener the dom event listener
 */
const off = (
  events: string,
  domOrCb: Function | Window | Element,
  listener?: EventListener
) => {
  events
    .split(' ')
    .forEach((event) =>
      listener && typeof domOrCb !== 'function'
        ? domOrCb.removeEventListener(event, listener)
        : bus.get(event)?.delete(domOrCb)
    );
};

/**
 * Emit the desired event
 *
 * @param event the name of the event
 * @param args the arguments that will be passed to the callbacks
 */
const emit = <Targs extends any[]>(event: string, ...args: Targs) => {
  bus.get(event)?.forEach((domOrCb) => domOrCb(...args));
};

/**
 * Emit the desired event asynchronously
 *
 * @param event the name of the event
 * @param args the arguments that will be passed to the callbacks
 * @returns the promise
 */
const emitAsync = <P extends any[], Targs extends any[]>(
  event: string,
  ...args: Targs
) => {
  return Promise.all(
    [...(bus.get(event) || [])].map((domOrCb) =>
      Promise.resolve(domOrCb(...args) as P)
    )
  );
};

/**
 * Remove one or more events from the stack
 *
 * @param events the name of one or more events
 */
const remove = (events: string) => {
  events.split(' ').forEach((event) => bus.delete(event));
};

/**
 * Generate a clone of the bus stack, usefull for debug
 *
 * @returns a clone of the bus stack
 */
const inspect = () => new Map(bus);

export { on, off, emit, emitAsync, remove, inspect };
