import ctx, { size } from './main.js';

const x = 0 * size;
const y = 0 * size;

ctx.beginPath();
ctx.rect(x, y, 140, 110);
ctx.fillStyle = 'white';
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(x + size / 1.7, y + size / 2.1, 20, 0, Math.PI * 2, false);
ctx.fillStyle = 'red';
ctx.fill();
ctx.closePath();

// I originally had a dart target thing, but I changed it to the flag of Japan, because I feel like it embodies me and what I like more
