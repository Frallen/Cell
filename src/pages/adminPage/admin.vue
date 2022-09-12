<template>
  <div class="admin">
    <admin-nav></admin-nav>


  </div>
</template>

<script>
import DefaultForm from "@/components/ui/form";
import { mapActions, mapMutations } from "vuex";
import Table from "@/components/ui/table";
import DefaultButton from "@/components/ui/button";
import { ErrorMessage, Field, Form } from "vee-validate";
import AdminForm from "@/components/ui/adminForm";
import AdminNav from "@/pages/adminPage/admin-nav";

export default {
  name: "adminPage",
  data() {
    return {
      tableHeader: null,
      formVisible: false,
    };
  },
  components: {
    AdminNav,
    AdminForm,
    DefaultForm,
    Table,
    DefaultButton,
    Form,
    Field,
    ErrorMessage,
  },
  computed: {
    login: "auth/login",
  },
  methods: {
    ...mapMutations({
      setUser: "auth/setUser",
    }),
    ...mapActions({
      setAuth: "auth/login",
    }),
  },
};
</script>

<style lang="less" scoped>
.admin {
  width: 100%;
}
</style>
