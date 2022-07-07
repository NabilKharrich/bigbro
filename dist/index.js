(function(global, factory) {
    if (typeof define === "function" && define.amd) {
        define([
            "exports",
            "./utils"
        ], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("./utils"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.utils);
        global.index = mod.exports;
    }
})(this, function(_exports, _utils) {
    "use strict";
    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.inspect = _exports.emitAsync = _exports.emit = _exports.once = _exports.off = _exports.on = void 0;
    const on = (first, middle, last = undefined, opts = {})=>{
        const e = (0, _utils).splitEvents(!last ? first : middle);
        if (!last) {
            for(let i = 0; i < e.length; i++){
                const ev = e[i];
                if ((0, _utils).listenerExists(ev, middle)) return;
                (0, _utils).createEvent(ev);
                middle && _utils.eventsStack[ev].push(middle);
            }
        } else {
            for(let i = 0; i < e.length; i++){
                const ev = e[i];
                first.addEventListener(ev, last, opts);
            }
        }
    };
    _exports.on = on;
    const off = (first, middle, last)=>{
        const e = (0, _utils).splitEvents(!last ? first : middle);
        if (!last) {
            for(let i = 0; i < e.length; i++){
                const ev = e[i];
                if (!(0, _utils).listenerExists(ev, middle)) return;
                _utils.eventsStack[ev].splice(_utils.eventsStack[ev].indexOf(middle), 1);
            }
        } else {
            for(let i = 0; i < e.length; i++){
                const ev = e[i];
                first.removeEventListener(ev, last);
            }
        }
    };
    _exports.off = off;
    const once = (first, middle, last = undefined, opts = {})=>{
        if (!last) {
            const fn = async ()=>{
                off(first, fn);
                await middle();
            };
            on(first, fn);
        } else {
            const fn = ()=>{
                last();
                off(first, middle, fn);
            };
            on(first, middle, fn, opts);
        }
    };
    _exports.once = once;
    const emit = (event, ...params)=>{
        if (!_utils.eventsStack[event]) return;
        for(let i = 0; i < _utils.eventsStack[event].length; i++){
            _utils.eventsStack[event][i](...params);
        }
    };
    _exports.emit = emit;
    const emitAsync = (event, ...params)=>{
        if (!_utils.eventsStack[event]) return;
        return Promise.all(_utils.eventsStack[event].map((cb)=>Promise.resolve(cb(...params))));
    };
    _exports.emitAsync = emitAsync;
    const inspect = ()=>(0, _utils).clone();
    _exports.inspect = inspect;
});
