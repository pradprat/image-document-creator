import assert from 'node:assert/strict';
import test from 'node:test';
import { defaultQuad, imageFiles, orderQuad, outputSize } from './scanner-core.mjs';

test('orderQuad returns corners in TL, TR, BR, BL order', () => {
  const corners = orderQuad([
    { x: 910, y: 1090 }, // BR
    { x: 100, y: 150 },  // TL
    { x: 40, y: 1120 },  // BL
    { x: 820, y: 120 },  // TR
  ]);

  assert.deepEqual(corners, [
    { x: 100, y: 150 },
    { x: 820, y: 120 },
    { x: 910, y: 1090 },
    { x: 40, y: 1120 },
  ]);
});

test('defaultQuad leaves a safe document margin on every side', () => {
  assert.deepEqual(defaultQuad(1000, 1500, 0.08), [
    { x: 80, y: 120 },
    { x: 920, y: 120 },
    { x: 920, y: 1380 },
    { x: 80, y: 1380 },
  ]);
});

test('outputSize creates an A4-proportioned portrait output', () => {
  const { width, height } = outputSize(900, 1200);
  assert.equal(width, 1200);
  assert.equal(height, 1697);
});

test('imageFiles keeps all image selections in their original order', () => {
  const selected = imageFiles([
    { name: 'page-1.jpg', type: 'image/jpeg' },
    { name: 'notes.txt', type: 'text/plain' },
    { name: 'page-2.png', type: 'image/png' },
  ]);

  assert.deepEqual(selected.map((file) => file.name), ['page-1.jpg', 'page-2.png']);
});
