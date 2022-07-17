declare const bbStack: Map<string, Set<Function>>;
declare const addBus: (event: string) => void;
declare const removeBus: (event: string) => void;
declare const addBusListener: (event: string, cb: Function) => void;
declare const removeBusListener: (event: string, cb: Function) => void;
declare const addListener: (element: (Window & typeof globalThis) | HTMLElement, event: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions | undefined) => void;
declare const removeListener: (element: (Window & typeof globalThis) | HTMLElement, event: string, listener: EventListenerOrEventListenerObject) => void;
declare const eventExists: (event: string) => boolean;
declare const listenerExists: (event: string, cb: Function) => boolean;
declare const splitEvents: (events: string) => string[];
declare const clone: () => Map<string, Set<Function>>;
export { bbStack, addBus, removeBus, addBusListener, removeBusListener, addListener, removeListener, eventExists, listenerExists, splitEvents, clone, };
//# sourceMappingURL=utils.d.ts.map