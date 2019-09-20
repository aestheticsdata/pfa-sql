import Swal from 'sweetalert2';

export const displayPopup = (message) => {
  Swal.fire({
    title: message.title || '',
    text: message.text || '',
    type: 'success',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
  });
};
