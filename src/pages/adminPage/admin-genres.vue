<template>
  <adminForm
    @formValues="submitData"
    :schema="schema"
    v-show="visible"
    @hide="visibleForm"
  >
    <label for="name" class="form-item">
      Введите жанр
      <Field name="name" id="name" class="input" v-model="slugField" />
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
    <label for="genre" class="form-item">
      Изображение
      <Field name="genre" id="genre" class="input" type="file" />
      <ErrorMessage name="genre" />
    </label>
    <div class="form-item genre-img" v-if="currentUpdateItem.genre">
      <h5>Текущее изображение</h5>
      <a href="#" class="admin-photo-container"
        ><img :src="currentUpdateItem.genre" alt=""
      /></a>
    </div>
  </adminForm>
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
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import * as yup from "yup";
import slugMixin from "@/mixins/slugMixin";
import toastMixin from "@/mixins/toastMixin";
import adminMixin from "@/mixins/adminMixin";
export default {
  name: "admin-genres",
  mixins: [slugMixin, toastMixin, adminMixin],
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
    setQuery(val) {
      this.setGenresQuery(val);
    },
    ...mapMutations({
      setGenresQuery: "admin/setGenresQuery",
    }),
    submitData(val) {
      if (this.submitType === "submit") {
        let obj = {
          to: "genres",
          val: val,
        };
        this.CreateItem(obj,this)
          .then((p) => this.setSuccess("Запись добавлена"))
          .catch((err) => this.setError());
      } else if (this.submitType === "update") {
        let obj = {
          id: this.updateId,
          to: "genres",
          items: val,
        };

        this.updateDoc(obj,this)
          .then((p) => this.setSuccess("Запись обновлена"))
          .catch((err) => this.setError());
        this.submitType = "submit";
      }
    },
    DeleteItem(val) {
      this.DeleteDialog().then((result) => {
        if (result.isConfirmed) {
          let obj = {
            to: "genres",
            id: val,
          };
          this.DeleteDoc(obj,this)
            .then((p) => this.setSuccess("Запись удалена"))
            .catch((err) => this.setError());
        } else {
          this.cancelOperation();
        }
      });
    },
    SetId(val) {
      this.updateId = val;
    },
  },
  mounted() {
    this.FetchData("genres",this);
  },
  watch: {
    updateId(val) {
      let item = this.genres.find((p) => p.id === val);
      this.slugField = item.name;
      this.currentUpdateItem = item;
      this.submitType = "update";
    },
  },

  computed: {
    ...mapState({
      genres: (state) => state.admin.genres,
    }),
    ...mapGetters({
      searchTable: "admin/searchTableGenres",
    }),
    schema() {
      return yup.object({
        name: yup.string().required(),
        slug: yup.string().required(),
        genre: yup.string().required(),
      });
    },
  },
};
</script>

<style scoped lang="less">
.genre-img {
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
