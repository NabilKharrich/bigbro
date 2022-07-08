const $f3ad94c9f84f4d57$export$7da141185b3e32e1 = {};
const $f3ad94c9f84f4d57$export$9cd59f9826255e47 = ()=>({
        ...$f3ad94c9f84f4d57$export$7da141185b3e32e1
    });
const $f3ad94c9f84f4d57$export$c30017717ce2168e = (event)=>$f3ad94c9f84f4d57$export$7da141185b3e32e1[event] = $f3ad94c9f84f4d57$export$7da141185b3e32e1[event] || [];
const $f3ad94c9f84f4d57$export$1a518478532057c4 = (event, cb)=>!!$f3ad94c9f84f4d57$export$7da141185b3e32e1[event]?.includes(cb);
const $f3ad94c9f84f4d57$export$39ca70c0c3146e3f = (events)=>events.split(" ");


const $cf838c15c8b009ba$export$af631764ddc44097 = (first, middle, last, opts = {})=>{
    const e = (0, $f3ad94c9f84f4d57$export$39ca70c0c3146e3f)(!last ? first : middle);
    if (!last) for(let i = 0; i < e.length; i++){
        const ev = e[i];
        if ((0, $f3ad94c9f84f4d57$export$1a518478532057c4)(ev, middle)) return;
        (0, $f3ad94c9f84f4d57$export$c30017717ce2168e)(ev);
        middle && (0, $f3ad94c9f84f4d57$export$7da141185b3e32e1)[ev].push(middle);
    }
    else for(let i1 = 0; i1 < e.length; i1++){
        const ev = e[i1];
        first.addEventListener(ev, last, opts);
    }
};
const $cf838c15c8b009ba$export$8c8705df4a2dcec9 = (first, middle, last)=>{
    const e = (0, $f3ad94c9f84f4d57$export$39ca70c0c3146e3f)(!last ? first : middle);
    if (!last) for(let i = 0; i < e.length; i++){
        const ev = e[i];
        if (!(0, $f3ad94c9f84f4d57$export$1a518478532057c4)(ev, middle)) return;
        (0, $f3ad94c9f84f4d57$export$7da141185b3e32e1)[ev].splice((0, $f3ad94c9f84f4d57$export$7da141185b3e32e1)[ev].indexOf(middle), 1);
    }
    else for(let i2 = 0; i2 < e.length; i2++){
        const ev = e[i2];
        first.removeEventListener(ev, last);
    }
};
const $cf838c15c8b009ba$export$d2de3aaeafa91619 = (first, middle, last, opts = {})=>{
    if (!last) {
        const fn = async ()=>{
            $cf838c15c8b009ba$export$8c8705df4a2dcec9(first, fn);
            await middle();
        };
        $cf838c15c8b009ba$export$af631764ddc44097(first, fn);
    } else {
        const fn = ()=>{
            last();
            $cf838c15c8b009ba$export$8c8705df4a2dcec9(first, middle, fn);
        };
        $cf838c15c8b009ba$export$af631764ddc44097(first, middle, fn, opts);
    }
};
const $cf838c15c8b009ba$export$8f35fbd5db0f3634 = (event, ...params)=>{
    if (!(0, $f3ad94c9f84f4d57$export$7da141185b3e32e1)[event]) return;
    for(let i = 0; i < (0, $f3ad94c9f84f4d57$export$7da141185b3e32e1)[event].length; i++)(0, $f3ad94c9f84f4d57$export$7da141185b3e32e1)[event][i](...params);
};
const $cf838c15c8b009ba$export$a55832f0bda23207 = (event, ...params)=>{
    if (!(0, $f3ad94c9f84f4d57$export$7da141185b3e32e1)[event]) return;
    return Promise.all((0, $f3ad94c9f84f4d57$export$7da141185b3e32e1)[event].map((cb)=>Promise.resolve(cb(...params))));
};
const $cf838c15c8b009ba$export$9dec5d1b3b6a130d = ()=>(0, $f3ad94c9f84f4d57$export$9cd59f9826255e47)();


export {$cf838c15c8b009ba$export$af631764ddc44097 as on, $cf838c15c8b009ba$export$8c8705df4a2dcec9 as off, $cf838c15c8b009ba$export$d2de3aaeafa91619 as once, $cf838c15c8b009ba$export$8f35fbd5db0f3634 as emit, $cf838c15c8b009ba$export$a55832f0bda23207 as emitAsync, $cf838c15c8b009ba$export$9dec5d1b3b6a130d as inspect};
//# sourceMappingURL=module.js.map
