export default {
  data() {
    return {
      Toast: this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      }),
    };
  },
  methods: {
    DeleteDialog() {
      return this.$swal.fire({
        title: "Удалить запись?",
        text: "Записть будет полностью удалена",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ааа",
        cancelButtonColor: "#d33",
        confirmButtonText: "Подтвердить",
        cancelButtonText: "Отменить",
      });
    },
    cancelOperation(){
      this.Toast.fire({
        icon: "error",
        title: "Операция отменена",
      });
    },
    setSuccess(val) {
      this.Toast.fire({
        icon: "success",
        title: val,
      });
    },
    setError() {
      this.Toast.fire({
        icon: "error",
        title: "Произошла ошибка",
      });
    },
  },
};
