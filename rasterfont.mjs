
/**
 * Load a font
 * @param {string} url the url
 * @returns {Uint8Array} the font
 */
export async function loadFont(url) {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
  } catch (ex) {

  }
  
}

/**
 * @param {CanvasRenderingContext2D} ctx the canvas context
 * @param {Uint8Array} font the font 
 * @param {string} text the text to be rendered 
 * @param {number} x the x coordinate 
 * @param {number} y the y coordinate
 * @param scale 
 */
export function drawString({ctx, font, text, x = 0, y = 0, scale = 1, color = '#fff', background = null, ltr = 1}) {
  const CHAR_HEIGHT = 8;
  for (let i = 0; i < text.length; i++) {
    const charCode = text.codePointAt(i);
    if (charCode > 255) {
      continue;
    }
    for (let y1 = 0; y1 < CHAR_HEIGHT; y1++) {
      for (let x1 = 0; x1 < 8; x1++) {
        const hasPixel = Boolean((font[charCode * 8 + y1] & 128 >> x1) > 0);
        if (hasPixel === false && background === null) {
          continue;
        }
        ctx.fillStyle = hasPixel ? color : background;
        ctx.fillRect(x + x1 * scale + ltr * i * 8 * scale, y + y1 * scale, scale, scale);
      }
    }
    
  }
}