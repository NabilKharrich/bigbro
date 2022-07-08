function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "on", () => $4fa36e821943b400$export$af631764ddc44097);
$parcel$export(module.exports, "off", () => $4fa36e821943b400$export$8c8705df4a2dcec9);
$parcel$export(module.exports, "once", () => $4fa36e821943b400$export$d2de3aaeafa91619);
$parcel$export(module.exports, "emit", () => $4fa36e821943b400$export$8f35fbd5db0f3634);
$parcel$export(module.exports, "emitAsync", () => $4fa36e821943b400$export$a55832f0bda23207);
$parcel$export(module.exports, "inspect", () => $4fa36e821943b400$export$9dec5d1b3b6a130d);
const $4559ecf940edc78d$export$7da141185b3e32e1 = {};
const $4559ecf940edc78d$export$9cd59f9826255e47 = ()=>({
        ...$4559ecf940edc78d$export$7da141185b3e32e1
    });
const $4559ecf940edc78d$export$c30017717ce2168e = (event)=>$4559ecf940edc78d$export$7da141185b3e32e1[event] = $4559ecf940edc78d$export$7da141185b3e32e1[event] || [];
const $4559ecf940edc78d$export$1a518478532057c4 = (event, cb)=>!!$4559ecf940edc78d$export$7da141185b3e32e1[event]?.includes(cb);
const $4559ecf940edc78d$export$39ca70c0c3146e3f = (events)=>events.split(" ");


const $4fa36e821943b400$export$af631764ddc44097 = (first, middle, last, opts = {})=>{
    const e = (0, $4559ecf940edc78d$export$39ca70c0c3146e3f)(!last ? first : middle);
    if (!last) for(let i = 0; i < e.length; i++){
        const ev = e[i];
        if ((0, $4559ecf940edc78d$export$1a518478532057c4)(ev, middle)) return;
        (0, $4559ecf940edc78d$export$c30017717ce2168e)(ev);
        middle && (0, $4559ecf940edc78d$export$7da141185b3e32e1)[ev].push(middle);
    }
    else for(let i1 = 0; i1 < e.length; i1++){
        const ev = e[i1];
        first.addEventListener(ev, last, opts);
    }
};
const $4fa36e821943b400$export$8c8705df4a2dcec9 = (first, middle, last)=>{
    const e = (0, $4559ecf940edc78d$export$39ca70c0c3146e3f)(!last ? first : middle);
    if (!last) for(let i = 0; i < e.length; i++){
        const ev = e[i];
        if (!(0, $4559ecf940edc78d$export$1a518478532057c4)(ev, middle)) return;
        (0, $4559ecf940edc78d$export$7da141185b3e32e1)[ev].splice((0, $4559ecf940edc78d$export$7da141185b3e32e1)[ev].indexOf(middle), 1);
    }
    else for(let i2 = 0; i2 < e.length; i2++){
        const ev = e[i2];
        first.removeEventListener(ev, last);
    }
};
const $4fa36e821943b400$export$d2de3aaeafa91619 = (first, middle, last, opts = {})=>{
    if (!last) {
        const fn = async ()=>{
            $4fa36e821943b400$export$8c8705df4a2dcec9(first, fn);
            await middle();
        };
        $4fa36e821943b400$export$af631764ddc44097(first, fn);
    } else {
        const fn = ()=>{
            last();
            $4fa36e821943b400$export$8c8705df4a2dcec9(first, middle, fn);
        };
        $4fa36e821943b400$export$af631764ddc44097(first, middle, fn, opts);
    }
};
const $4fa36e821943b400$export$8f35fbd5db0f3634 = (event, ...params)=>{
    if (!(0, $4559ecf940edc78d$export$7da141185b3e32e1)[event]) return;
    for(let i = 0; i < (0, $4559ecf940edc78d$export$7da141185b3e32e1)[event].length; i++)(0, $4559ecf940edc78d$export$7da141185b3e32e1)[event][i](...params);
};
const $4fa36e821943b400$export$a55832f0bda23207 = (event, ...params)=>{
    if (!(0, $4559ecf940edc78d$export$7da141185b3e32e1)[event]) return;
    return Promise.all((0, $4559ecf940edc78d$export$7da141185b3e32e1)[event].map((cb)=>Promise.resolve(cb(...params))));
};
const $4fa36e821943b400$export$9dec5d1b3b6a130d = ()=>(0, $4559ecf940edc78d$export$9cd59f9826255e47)();


//# sourceMappingURL=main.js.map
