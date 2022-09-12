<template>
  <admin-nav></admin-nav>
  <Table :table-header="tableHeader"></Table>
</template>

<script>
import Table from "@/components/ui/table";
import AdminNav from "@/pages/adminPage/admin-nav";
export default {
  name: "admin-actors",
  components: { Table, AdminNav},
  data() {
    return {
      tableHeader: ["Имя", "Кол-во фильмов", "действия"],
    };
  },
};
</script>

<style scoped></style>
