/**
 * Add one or more event listeners or register a callback to one or more events
 *
 * @param events the name of one or more events
 * @param domOrCb the dom element or bus callback
 * @param listener the dom event listener
 * @param options the dom event options
 */
declare const on: (events: string, domOrCb: Function | Window | Element, listener?: EventListener, options?: EventListenerOptions) => void;
/**
 * Remove one or more event listeners or detatches a callback from on or more events
 *
 * @param events the name of one or more events
 * @param domOrCb the dom element or bus callback
 * @param listener the dom event listener
 */
declare const off: (events: string, domOrCb: Function | Window | Element, listener?: EventListener) => void;
/**
 * Emit the desired event
 *
 * @param event the name of the event
 * @param args the arguments that will be passed to the callbacks
 */
declare const emit: <Targs extends any[]>(event: string, ...args: Targs) => void;
/**
 * Emit the desired event asynchronously
 *
 * @param event the name of the event
 * @param args the arguments that will be passed to the callbacks
 * @returns the promise
 */
declare const emitAsync: <P extends any[], Targs extends any[]>(event: string, ...args: Targs) => Promise<Awaited<P>[]>;
/**
 * Remove one or more events from the stack
 *
 * @param events the name of one or more events
 */
declare const remove: (events: string) => void;
/**
 * Generate a clone of the bus stack, usefull for debug
 *
 * @returns a clone of the bus stack
 */
declare const inspect: () => Map<string, Set<any>>;
export { on, off, emit, emitAsync, remove, inspect };
//# sourceMappingURL=index.d.ts.map