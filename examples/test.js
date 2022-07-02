import { emit, inspect, on, off, once } from '../src';

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
const log = debounce(() => console.log('resize'));

const btn = document.querySelector('.btn');

once('myEv', () => console.log('ev!'));
once(window, 'resize', log);
console.log(inspect());
on(btn, 'click', () => emit('myEv'));
