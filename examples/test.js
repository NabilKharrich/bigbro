import { emit, on, once } from '../src';

const btn = document.querySelector('.btn');
const offbtn = document.querySelector('.off-btn');

function cb() {
  console.log('once!');
}

once('myev', cb);

on('click', btn, () => {
  emit('myev');
});
