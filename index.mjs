import { loadFont, drawString } from './rasterfont.mjs';

const canvas = document.querySelector('canvas');
const container = canvas.parentElement;
const ctx = canvas.getContext('2d');
let width = container.clientWidth;
let height = container.clientHeight;

function setSize() {
  width = canvas.width = container.clientWidth;
  height = canvas.height = container.clientHeight;
}

setSize();

async function main() {
  const font = await loadFont('./c16.bin');
  const scale = 6;
  for (let i = 0; i < 16; i++) {
    drawString({
      ctx, font, scale,
      y: i * 8 * scale,
      text: Array(16).fill(0).map((_, j) => String.fromCodePoint(i * 16 + j)).join(''),
    });
  }
}

main();
