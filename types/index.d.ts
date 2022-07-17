declare type RemoveEvent = (first: string | (Window & typeof globalThis) | HTMLElement, middle: string | Function, last?: EventListenerOrEventListenerObject) => void;
declare type AddEvent = (first: string | (Window & typeof globalThis) | HTMLElement, middle: string | Function, last?: Function, opts?: AddEventListenerOptions) => void;
declare type EmitEvent = (event: string, ...params: unknown[]) => void | Promise<Function[]>;
declare const on: AddEvent;
declare const once: AddEvent;
declare const off: RemoveEvent;
declare const clear: (event: string) => void;
declare const emit: EmitEvent;
declare const emitAsync: EmitEvent;
declare const inspect: () => Map<string, Set<Function>>;
export { on, once, off, emit, emitAsync, clear, inspect };
//# sourceMappingURL=index.d.ts.map