import { emit, emitAsync, inspect, on } from './src/index';

const addBtn = document.querySelector('button.add');
const removeBtn = document.querySelector('button.remove');
const onceBtn = document.querySelector('button.once');

const handle = (e) => {
  console.log(e);
};

addBtn && on('click', addBtn, handle);
// addBtn && off('submit', window, handle);
