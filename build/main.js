function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "on", () => $c79bbf7dbb0f3531$export$b4cd8de5710bc55c);
$parcel$export(module.exports, "once", () => $c79bbf7dbb0f3531$export$7bd69e88aabac8f1);
$parcel$export(module.exports, "emit", () => $c79bbf7dbb0f3531$export$3138d72b1819ff86);
$parcel$export(module.exports, "emitAsync", () => $c79bbf7dbb0f3531$export$46c54e4f8c1e17a1);
$parcel$export(module.exports, "inspect", () => $c79bbf7dbb0f3531$export$f68a7c3078a08370);
$parcel$export(module.exports, "off", () => $c79bbf7dbb0f3531$export$27450a6de0750f89);
const $301beebe3696b765$export$b2f26029f53ad665 = {
};
const $301beebe3696b765$export$d6a0542127b96c83 = ()=>({
        ...$301beebe3696b765$export$b2f26029f53ad665
    })
;
const $301beebe3696b765$export$19c80410cdfe2545 = (event)=>$301beebe3696b765$export$b2f26029f53ad665[event] = $301beebe3696b765$export$b2f26029f53ad665[event] || []
;
const $301beebe3696b765$export$1d00de2f2e645788 = (event, cb)=>!!$301beebe3696b765$export$b2f26029f53ad665[event]?.includes(cb)
;
const $301beebe3696b765$export$d3df29757be4793d = (events)=>events.split(' ')
;


const $c79bbf7dbb0f3531$export$b4cd8de5710bc55c = (first, middle, last, opts = {
})=>{
    const e = $301beebe3696b765$export$d3df29757be4793d(!last ? first : middle);
    if (!last) for(let i = 0; i < e.length; i++){
        const ev = e[i];
        if ($301beebe3696b765$export$1d00de2f2e645788(ev, middle)) return;
        $301beebe3696b765$export$19c80410cdfe2545(ev);
        middle && $301beebe3696b765$export$b2f26029f53ad665[ev].push(middle);
    }
    else for(let i1 = 0; i1 < e.length; i1++){
        const ev = e[i1];
        first.addEventListener(ev, last, opts);
    }
};
const $c79bbf7dbb0f3531$export$27450a6de0750f89 = (first, middle, last)=>{
    const e = $301beebe3696b765$export$d3df29757be4793d(!last ? first : middle);
    if (!last) for(let i = 0; i < e.length; i++){
        const ev = e[i];
        if (!$301beebe3696b765$export$1d00de2f2e645788(ev, middle)) return;
        $301beebe3696b765$export$b2f26029f53ad665[ev].splice($301beebe3696b765$export$b2f26029f53ad665[ev].indexOf(middle), 1);
    }
    else for(let i1 = 0; i1 < e.length; i1++){
        const ev = e[i1];
        first.removeEventListener(ev, last);
    }
};
const $c79bbf7dbb0f3531$export$7bd69e88aabac8f1 = (first, middle, last, opts = {
})=>{
    if (!last) {
        const fn = async ()=>{
            $c79bbf7dbb0f3531$export$27450a6de0750f89(first, fn);
            await middle();
        };
        $c79bbf7dbb0f3531$export$b4cd8de5710bc55c(first, fn);
    } else {
        const fn = ()=>{
            last();
            $c79bbf7dbb0f3531$export$27450a6de0750f89(first, middle, fn);
        };
        $c79bbf7dbb0f3531$export$b4cd8de5710bc55c(first, middle, fn, opts);
    }
};
const $c79bbf7dbb0f3531$export$3138d72b1819ff86 = (event, ...params)=>{
    if (!$301beebe3696b765$export$b2f26029f53ad665[event]) return;
    for(let i = 0; i < $301beebe3696b765$export$b2f26029f53ad665[event].length; i++)$301beebe3696b765$export$b2f26029f53ad665[event][i](...params);
};
const $c79bbf7dbb0f3531$export$46c54e4f8c1e17a1 = (event, ...params)=>{
    if (!$301beebe3696b765$export$b2f26029f53ad665[event]) return;
    return Promise.all($301beebe3696b765$export$b2f26029f53ad665[event].map((cb)=>Promise.resolve(cb(...params))
    ));
};
const $c79bbf7dbb0f3531$export$f68a7c3078a08370 = ()=>$301beebe3696b765$export$d6a0542127b96c83()
;


//# sourceMappingURL=main.js.map
