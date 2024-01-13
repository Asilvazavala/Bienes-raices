"use client";

import toast, { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
  const notifySucess = () =>
    toast.success('Correo enviado, GRACIAS 😀', {
      style: {
        border: '1px solid #16a085',
        color: '#fff',
        background: '#16a085'
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#16a085',
      },
    });

    const notifyWarning = () =>
    toast.error('Completa todos los datos por favor.', {
      style: {
        border: '1px solid #dc143c ',
        color: '#fff',
        background: '#dc143c '
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#dc143c ',
      },
    });

  return {
    notifySucess,
    notifyWarning,
    Toaster
  }
}

export default ToastProvider;