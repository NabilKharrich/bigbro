import { emit, off, on, once } from './src/index';

const addBtn = document.querySelector('button.add');
const removeBtn = document.querySelector('button.remove');
const onceBtn = document.querySelector('button.once');

const handleWindow = () => {
  console.log('add!');
};

once(window, 'resize wheel', handleWindow);

removeBtn && on(removeBtn, 'click', () => off(window, 'resize', handleWindow));
