<template>
  <Table :table-header="tableHeader"></Table>
  <adminForm @formValues="submitData" :schema="schema">
    <div class="form-wrapper">
      <label for="name">
        Введите жанр
        <Field name="name" id="name" class="input" />
        <ErrorMessage name="name" />
      </label>
    </div>
    <default-button>Создать</default-button>
  </adminForm>
</template>

<script>
import Table from "@/components/ui/table";
import AdminNav from "@/components/ui/table";
import adminForm from "@/components/ui/adminForm";
import DefaultButton from "@/components/ui/button";
import { Field, ErrorMessage } from "vee-validate";
import { mapActions } from "vuex";
import * as yup from "yup";
export default {
  name: "admin-genres",
  components: {
    Table,
    AdminNav,
    adminForm,
    DefaultButton,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      tableHeader: ["Название жанра", "чпу", "действия"],
    };
  },
  methods: {
    submitData(val) {
      //this.$swal('Hello Vue world!!!');
      this.CreateGenre(val);
    },
    ...mapActions({
      CreateGenre: "admin/CreateGenre",
      GetGenres:"admin/GetGenres"
    }),
  },

  computed: {
    schema() {
      return yup.object({
        name: yup.string().required(),
      });
    },
  },
};
</script>

<style scoped lang="less">
.form-wrapper {
  margin: -10px 0 1em -10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  label {
    margin-top: 10px;
    margin-left: 10px;
  }
}
</style>
