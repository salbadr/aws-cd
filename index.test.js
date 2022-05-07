const f = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(f.sum(1, 2)).toBe(3);
});

test('diff 6 - 2  to equal 4', () => {
  expect(f.diff(6, 2)).toBe(4);
});