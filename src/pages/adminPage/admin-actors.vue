<template>
  <admin-form
    @formValues="submitData"
    :schema="schema"
    v-show="visible"
    @hide="visibleForm"
  >
    <label for="name" class="form-item">
      Полное имя актера
      <Field name="name" id="name" class="input" v-model.trim="slugField" />
      <ErrorMessage name="name" />
    </label>
    <label for="slug" class="form-item">
      Чпу
      <Field
        name="slug"
        id="slug"
        class="input slug"
        v-model="slugedGenre"
        v-bind:readonly="true"
      />
      <ErrorMessage name="slug" />
    </label>
  </admin-form>
  <Table
    :table-header="tableHeader"
    :data="searchTable"
    @updateValues="SetId"
    @visible="visibleForm"
    @DeleteItem="DeleteItem"
    @filterValue="setQuery"
  ></Table>
</template>

<script>
import Table from "@/components/ui/table";
import AdminNav from "@/components/ui/table";
import adminForm from "@/components/ui/adminForm";
import DefaultButton from "@/components/ui/button";
import { Field, ErrorMessage } from "vee-validate";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import * as yup from "yup";
import slugMixin from "@/mixins/slugMixin";
import toastMixin from "@/mixins/toastMixin";
import { query } from "firebase/firestore";
export default {
  name: "admin-actors",
  mixins: [slugMixin, toastMixin],
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
      visible: false,
      tableHeader: ["Полное имя актера", "Чпу", "действия"],
      updateId: null,
      submitType: "submit",
    };
  },
  methods: {
    visibleForm(val) {
      this.visible = val;
      if (val === false) this.submitType = "submit";
    },
    submitData(val) {
      if (this.submitType === "submit") {
        let obj = {
          to: "actors",
          val: val,
        };
        this.CreateItem(obj)
          .then((p) => this.setSuccess("Запись добавлена"))
          .catch((err) => this.setError());
      } else if (this.submitType === "update") {
        let obj = {
          id: this.updateId,
          to: "actors",
          items: val,
        };

        this.updateDoc(obj)
          .then((p) => this.setSuccess("Запись обновлена"))
          .catch((err) => this.setError());
        this.submitType = "submit";
      }
    },
    setQuery(val) {
      this.setActorsQuery(val);
    },
    DeleteItem(val) {
      let obj = {
        to: "actors",
        id: val,
      };
      this.DeleteDoc(obj)
        .then((p) => this.setSuccess("Запись удалена"))
        .catch((err) => this.setError());
    },
    ...mapActions({
      CreateItem: "admin/CreateItem",
      FetchData: "admin/FetchData",
      updateDoc: "admin/updateDoc",
      DeleteDoc: "admin/DeleteDoc",
    }),
    ...mapMutations({
      setActorsQuery: "admin/setActorsQuery",
    }),
    SetId(val) {
      this.updateId = val;
    },
  },
  mounted() {
    this.FetchData("actors");
  },
  watch: {
    updateId(val) {
      let item = this.actors.find((p) => p.id === val);
      this.slugField = item.name;
      this.submitType = "update";
    },
  },

  computed: {
    ...mapState({
      actors: (state) => state.admin.actors,
    }),
    ...mapGetters({
      searchTable: "admin/searchTableActors",
    }),
    schema() {
      return yup.object({
        name: yup.string().required(),
        slug: yup.string().required(),
      });
    },
  },
};
</script>

<style scoped></style>
