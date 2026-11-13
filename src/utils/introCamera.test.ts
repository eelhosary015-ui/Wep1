import test from 'node:test';
import assert from 'node:assert/strict';
import { computePortraitCamera } from './introCamera';

test('starts centered at 100% full-screen height with no edge feather', () => {
  const frame = computePortraitCamera(0);
  assert.equal(frame.panX, 50);
  assert.equal(frame.heightPct, 100);
  assert.equal(frame.featherPct, 0);
});

test('pans left to Sales/Inventory then sweeps right to Purchasing/Suppliers at full 100% screen height', () => {
  const left = computePortraitCamera(0.27);
  assert.equal(left.panX, 4);
  assert.equal(left.heightPct, 100);
  assert.equal(left.featherPct, 0);

  const mid = computePortraitCamera(0.42);
  assert.ok(Math.abs(mid.panX - 50) < 0.01);
  assert.equal(mid.heightPct, 100);

  const right = computePortraitCamera(0.57);
  assert.equal(right.panX, 96);
  assert.equal(right.heightPct, 100);
  assert.equal(right.featherPct, 0);
});

test('returns smoothly to center before pulling back for the complete finale logo', () => {
  const centerReturn = computePortraitCamera(0.66);
  assert.equal(centerReturn.panX, 50);
  assert.equal(centerReturn.heightPct, 100);
  assert.equal(centerReturn.featherPct, 0);

  const finale = computePortraitCamera(0.85);
  assert.equal(finale.panX, 50);
  assert.equal(finale.heightPct, 56);
  assert.equal(finale.featherPct, 9);
});

test('clamps out-of-range and non-finite inputs safely', () => {
  assert.deepEqual(computePortraitCamera(-0.5), computePortraitCamera(0));
  assert.deepEqual(computePortraitCamera(1.5), computePortraitCamera(1));
  assert.deepEqual(computePortraitCamera(Number.NaN), computePortraitCamera(0));
});
