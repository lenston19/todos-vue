import Swal from "sweetalert2";

export function useNotify() {
  const errorMessage = (message) => {
    return Swal.fire({
      title: "Error!",
      text: message,
      icon: "error",
      confirmButtonText: "Close",
    });
  };

  const successToast = (message) => {
    return Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      icon: "success",
      title: message,
    });
  };

  return {
    successToast,
    errorMessage,
  };
}
