import Swal from 'sweetalert2';

export const showMessage = (iconType, swalTitle, swalMessage, showButton) => {
  Swal.fire({
    icon: iconType,
    title: swalTitle.toUpperCase(),
    text: swalMessage,
    showConfirmButton: showButton,
    confirmButtonText: 'OKAY',
    confirmButtonColor: '#321fdb'
  });
};

export const showMessageAutoHide = (iconType, swalTitle, swalMessage) => {
  Swal.fire({
    icon: iconType,
    title: swalTitle.toUpperCase(),
    text: swalMessage,
    showConfirmButton: true,
    confirmButtonText: 'OKAY',
    confirmButtonColor: '#321fdb',
    timer: 4000
  });
};

export const showMessageSomethingWentWrong = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oopss...'.toUpperCase(),
    text: 'Something went wrong!. Please try again later',
    showConfirmButton: true,
    confirmButtonText: 'OKAY',
    confirmButtonColor: '#321fdb',
    timer: 4000
  });
};

export const sweetAlertWithSuccessButton = (title, text, confirmButtonText) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    confirmButtonColor: '#321fdb',
    confirmButtonText: confirmButtonText
  });
};

export const sweetAlertWithFailedButton = (title, text, confirmButtonText) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: 'error',
    confirmButtonColor: '#321fdb',
    confirmButtonText: confirmButtonText
  });
};
