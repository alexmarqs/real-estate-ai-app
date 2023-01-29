import toast, { ToastOptions } from 'react-hot-toast';

export const showToast = (message: string, type?: 'error' | 'success') => {
  const opts: ToastOptions = {
    position: 'bottom-right',
    duration: 5000,
  };

  switch (type) {
    case 'error':
      toast.error(message, opts);
      break;
    case 'success':
      toast.success(message, opts);
      break;
    default:
      toast(message, opts);
      break;
  }
};
