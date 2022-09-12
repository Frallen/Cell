<template>
  <Table :table-header="tableHeader"></Table>
</template>

<script>
import Table from "@/components/ui/table";
export default {
  name: "admin-users",
  components:{Table},
  data(){
    return{
      tableHeader:["Почта", "Дата регистрации", "действия"]
    }
  }
};
</script>

<style scoped>

</style>