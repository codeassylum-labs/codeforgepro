export const useToast = () => {
  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    const event = new CustomEvent('toast', { detail: { message, type } });
    window.dispatchEvent(event);
  };
  return { showToast };
};
