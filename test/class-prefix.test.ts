import classPrefix from '../src';
const px = classPrefix('prefix');

test('string args', () => {
  expect(px('name')).toBe('prefix-name');
});

test('object args', () => {
  expect(px({ name: true })).toBe('prefix-name');
});

test('array args', () => {
  expect(px(['name'])).toBe('prefix-name');
});

test('test1', () => {
  expect(px('a', 'b', 'c')).toBe('prefix-a prefix-b prefix-c');
});

test('test2', () => {
  expect(px('foo', 'bar')).toBe('prefix-foo prefix-bar');
});

test('test3', () => {
  expect(px('a', { bb: true, cc: false, dd: true })).toBe('prefix-a prefix-bb prefix-dd');
});

test('test4', () => {
  expect(px('foo', { bar: true })).toBe('prefix-foo prefix-bar');
});

test('test5', () => {
  expect(px({ 'foo-bar': true })).toBe('prefix-foo-bar');
});

test('test6', () => {
  expect(px({ 'foo-bar': false })).toBe('');
});

test('test7', () => {
  expect(px({ foo: true }, { bar: true })).toBe('prefix-foo prefix-bar');
});

test('test8', () => {
  expect(px({ foo: true, bar: true })).toBe('prefix-foo prefix-bar');
});

test('test9', () => {
  expect(px('foo', { bar: true, duck: false }, 'baz', { quux: true })).toBe('prefix-foo prefix-bar prefix-baz prefix-quux');
});

test('test10', () => {
  expect(px(null, false, 'bar', undefined, 0, 1, { baz: null }, '')).toBe('prefix-bar prefix-1');
});

test('test11', () => {
  expect(px()).toBe('prefix');
});
