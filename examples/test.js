import { emit, inspect, on, once } from '../src';
import { listenerExists } from '../src/utils';

const btn = document.querySelector('.btn');
const offbtn = document.querySelector('.off-btn');

function cb() {
  console.log('once!');
}

on('he.ho', (cb) => {});
on('myev', cb);
console.log(inspect());
console.log(listenerExists('myev', cb));
// on('click', btn, () => {
//   emit('myev');
// });

on(window, 'resize', () => console.log('hello'));
