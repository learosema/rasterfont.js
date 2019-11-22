# rasterfont.js

This is a helper library for drawing 8 bit rasterfonts (like from the C16 or C64) on a canvas.

# Usage

```js
import { loadFont, drawString } from './rasterfont.mjs';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

async function main() {
  const font = await loadFont('./c16.bin');
  const scale = 2; // scaling level
  drawString({
    ctx, font, scale, x: 0, y: 0,
    text: Array(16).fill(0).map((_, j) => String.fromCodePoint(i * 16 + j)).join(''),
    color: 'skyblue'
  });
}
```

# Demo

To run this locally, you use the provided server.js. After running `npm install`, `npm start` runs a minimal express server for static files. 

You can also just look at this project's [Github page](https://terabaud.github.io/rasterfont.js/)