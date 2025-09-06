import { useEffect } from 'react';

export function useFocusTrap(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const trap = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && ref.current) {
        const focusables = ref.current.querySelectorAll<HTMLElement>(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [ref]);
}
