const bus = new Map<string, Set<any>>();

const on = (
  events: string,
  domOrCb: Function | Window | Element,
  cb?: EventListener,
  options?: EventListenerOptions
) => {
  events
    .split(' ')
    .forEach((event) =>
      cb && typeof domOrCb !== 'function'
        ? domOrCb.addEventListener(event, cb, options)
        : bus.set(event, new Set()).get(event)?.add(domOrCb)
    );
};

const off = (
  events: string,
  domOrCb: Function | Window | Element,
  cb?: EventListener
) => {
  events
    .split(' ')
    .forEach((event) =>
      cb && typeof domOrCb !== 'function'
        ? domOrCb.removeEventListener(event, cb)
        : bus.get(event)?.delete(domOrCb)
    );
};

const emit = <Targs extends any[]>(event: string, ...args: Targs) => {
  bus.get(event)?.forEach((domOrCb) => domOrCb(args));
};

const emitAsync = <P extends any[], Targs extends any[]>(
  event: string,
  ...args: Targs
) => {
  return Promise.all(
    [...(bus.get(event) || [])].map((domOrCb) =>
      Promise.resolve(domOrCb(args) as P)
    )
  );
};

const clear = (events: string) => {
  events.split(' ').forEach((event) => bus.delete(event));
};

const inspect = () => new Map(bus);

export { on, off, emit, emitAsync, clear, inspect };
