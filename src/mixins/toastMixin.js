export default {
  data(){
    return{
      Toast:this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        }
      })
    }
  },
  methods:{
    setSuccess(val){
      this.Toast.fire({
        icon: 'success',
        title: val
      })
    },
    setError(){
      this.Toast.fire({
        icon: 'error',
        title: 'Произошла ошибка'
      })
    }

  }
}