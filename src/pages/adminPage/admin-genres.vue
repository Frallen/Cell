<template>
  <adminForm
    @formValues="submitData"
    :schema="schema"
    v-show="visible"
    @hide="visibleForm"
  >
    <label for="genre" class="form-item">
      Введите жанр
      <Field name="genre" id="genre" class="input" v-model.trim="slugField" />
      <ErrorMessage name="genre" />
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
  </adminForm>
  <Table
    :table-header="tableHeader"
    :data="genres"
    @updateValues="SetId"
    @visible="visibleForm"
  ></Table>
</template>

<script>
import Table from "@/components/ui/table";
import AdminNav from "@/components/ui/table";
import adminForm from "@/components/ui/adminForm";
import DefaultButton from "@/components/ui/button";
import { Field, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from "vuex";
import * as yup from "yup";
import slugMixin from "@/mixins/slugMixin";
export default {
  name: "admin-genres",
  mixins: [slugMixin],
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
      tableHeader: ["Название жанра", "чпу", "действия"],
      updateId: null,
      FilteredGenres: [],
      submitType: "submit",
    };
  },
  methods: {
    visibleForm(val) {
      this.visible = val;
      if (val === false) this.submitType = "submit";
    },
    submitData(val) {
      //this.$swal('Hello Vue world!!!');
      if (this.submitType === "submit") {
        this.CreateGenre(val);
      } else if (this.submitType === "update") {
        let obj = {
          id: this.updateId,
          to: "genres",
          items: val,
        };

        this.updateDoc(obj);
        this.submitType = "submit";
      }
    },
    ...mapActions({
      CreateGenre: "admin/CreateGenre",
      GetGenres: "admin/GetGenres",
      updateDoc: "admin/updateDoc",
    }),
    SetId(val) {
      this.updateId = val;
    },
  },
  mounted() {
    this.GetGenres();
  },
  watch: {
    updateId(val) {
      let item = this.genres.find((p) => p.id === val);
      this.slugField = item.name;
      this.submitType = "update";
    },
  },

  computed: {
    ...mapState({
      genres: (state) => state.admin.genres,
    }),
    schema() {
      return yup.object({
        genre: yup.string().required(),
        slug: yup.string().required(),
      });
    },
  },
};
</script>

<style scoped lang="less"></style>
