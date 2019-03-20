import wrapText from '../index';

test('wrap does nothing on small strings', () => {
  const text = 'hello world';
  expect(wrapText(80, text)).toBe(text);
});

test('wrap long lines', () => {
  const text = 'hello world';
  expect(wrapText(5, text)).toBe('hello\nworld');
});

test('maintains newlines', () => {
  const text = 'hello\nworld';
  expect(wrapText(5, text)).toBe('hello\nworld');
});

test('maintains multiple newlines', () => {
  const text = 'hello\n\nworld';
  expect(wrapText(5, text)).toBe('hello\n\nworld');
});

test('hard break', () => {
  const text = 'hello world';
  expect(wrapText(4, text)).toBe('hell\no\nworl\nd');
});
