import { renderHook, act } from '@testing-library/react';
import { useDebounce } from './useDebounce';
import { useClipboard } from './useClipboard';

test('debounce returns delayed value', () => {
  const { result, rerender } = renderHook(({ value }) => useDebounce(value, 200), {
    initialProps: { value: 'initial' }
  });

  rerender({ value: 'updated' });
  expect(result.current).toBe('initial');
});

test('clipboard copies text', () => {
  const { result } = renderHook(() => useClipboard());
  act(() => result.current.copy('Hello World'));
  expect(result.current.copied).toBe(true);
});
