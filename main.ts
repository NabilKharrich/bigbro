import { emit, emitAsync, inspect, off, on } from './src/index';

const addBtn = document.querySelector('button.add');
const removeBtn = document.querySelector('button.remove');
const onceBtn = document.querySelector('button.once');

const handleWindow = () => {
  console.log('add!');
};

const myCb = () => {
  console.log('click!');
};

const myCb2 = (a: number, b, c) => {};
const prom = () =>
  new Promise((res) => {
    setTimeout(() => {
      res('');
    }, 2000);
  });

async function trigger() {
  await emitAsync('myEv');
  console.log(inspect());

  console.log('done!');
}

addBtn && on('click', addBtn, trigger);
console.log(inspect());
