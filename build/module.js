const $6afcfcf6e95cca97$export$b2f26029f53ad665 = {
};
const $6afcfcf6e95cca97$export$d6a0542127b96c83 = ()=>({
        ...$6afcfcf6e95cca97$export$b2f26029f53ad665
    })
;
const $6afcfcf6e95cca97$export$19c80410cdfe2545 = (event)=>$6afcfcf6e95cca97$export$b2f26029f53ad665[event] = $6afcfcf6e95cca97$export$b2f26029f53ad665[event] || []
;
const $6afcfcf6e95cca97$export$1d00de2f2e645788 = (event, cb)=>!!$6afcfcf6e95cca97$export$b2f26029f53ad665[event]?.includes(cb)
;
const $6afcfcf6e95cca97$export$d3df29757be4793d = (events)=>events.split(' ')
;


const $fd0e4966f38fc4e4$export$b4cd8de5710bc55c = (first, middle, last, opts = {
})=>{
    const e = $6afcfcf6e95cca97$export$d3df29757be4793d(!last ? first : middle);
    if (!last) for(let i = 0; i < e.length; i++){
        const ev = e[i];
        if ($6afcfcf6e95cca97$export$1d00de2f2e645788(ev, middle)) return;
        $6afcfcf6e95cca97$export$19c80410cdfe2545(ev);
        middle && $6afcfcf6e95cca97$export$b2f26029f53ad665[ev].push(middle);
    }
    else for(let i1 = 0; i1 < e.length; i1++){
        const ev = e[i1];
        first.addEventListener(ev, last, opts);
    }
};
const $fd0e4966f38fc4e4$export$27450a6de0750f89 = (first, middle, last)=>{
    const e = $6afcfcf6e95cca97$export$d3df29757be4793d(!last ? first : middle);
    if (!last) for(let i = 0; i < e.length; i++){
        const ev = e[i];
        if (!$6afcfcf6e95cca97$export$1d00de2f2e645788(ev, middle)) return;
        $6afcfcf6e95cca97$export$b2f26029f53ad665[ev].splice($6afcfcf6e95cca97$export$b2f26029f53ad665[ev].indexOf(middle), 1);
    }
    else for(let i1 = 0; i1 < e.length; i1++){
        const ev = e[i1];
        first.removeEventListener(ev, last);
    }
};
const $fd0e4966f38fc4e4$export$7bd69e88aabac8f1 = (first, middle, last, opts = {
})=>{
    if (!last) {
        const fn = async ()=>{
            $fd0e4966f38fc4e4$export$27450a6de0750f89(first, fn);
            await middle();
        };
        $fd0e4966f38fc4e4$export$b4cd8de5710bc55c(first, fn);
    } else {
        const fn = ()=>{
            last();
            $fd0e4966f38fc4e4$export$27450a6de0750f89(first, middle, fn);
        };
        $fd0e4966f38fc4e4$export$b4cd8de5710bc55c(first, middle, fn, opts);
    }
};
const $fd0e4966f38fc4e4$export$3138d72b1819ff86 = (event, ...params)=>{
    if (!$6afcfcf6e95cca97$export$b2f26029f53ad665[event]) return;
    for(let i = 0; i < $6afcfcf6e95cca97$export$b2f26029f53ad665[event].length; i++)$6afcfcf6e95cca97$export$b2f26029f53ad665[event][i](...params);
};
const $fd0e4966f38fc4e4$export$46c54e4f8c1e17a1 = (event, ...params)=>{
    if (!$6afcfcf6e95cca97$export$b2f26029f53ad665[event]) return;
    return Promise.all($6afcfcf6e95cca97$export$b2f26029f53ad665[event].map((cb)=>Promise.resolve(cb(...params))
    ));
};
const $fd0e4966f38fc4e4$export$f68a7c3078a08370 = ()=>$6afcfcf6e95cca97$export$d6a0542127b96c83()
;


export {$fd0e4966f38fc4e4$export$27450a6de0750f89 as off, $fd0e4966f38fc4e4$export$3138d72b1819ff86 as emit, $fd0e4966f38fc4e4$export$b4cd8de5710bc55c as on, $fd0e4966f38fc4e4$export$46c54e4f8c1e17a1 as emitAsync, $fd0e4966f38fc4e4$export$7bd69e88aabac8f1 as once, $fd0e4966f38fc4e4$export$f68a7c3078a08370 as inspect};
//# sourceMappingURL=module.js.map
