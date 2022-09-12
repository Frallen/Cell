<template>
  <admin-nav></admin-nav>
  <Table :table-header="tableHeader"></Table>
</template>

<script>
import Table from "@/components/ui/table";
import AdminNav from "@/components/ui/table";
export default {
  name: "admin-genres",
  components: { Table, AdminNav },
  data() {
    return {
      tableHeader: ["Название жанра", "чпу", "действия"],
    };
  },
};
</script>

<style scoped></style>
