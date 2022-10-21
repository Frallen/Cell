<template>
  <admin-form
    @formValues="submitData"
    :schema="schema"
    v-show="visible"
    @hide="visibleForm"
    @refForm="refFormAction"
  >
    <label for="name" class="form-item">
      Полное имя актера
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
    <label for="photo" class="form-item">
      Фото актера
      <Field name="photo" id="genre" class="input" type="file" />
      <ErrorMessage name="photo" />
    </label>
    <div class="form-item genre-img" v-if="currentUpdateItem.photo">
      <h5>Текущее фото</h5>
      <a href="#" class="admin-photo-container"
        ><img :src="currentUpdateItem.photo" alt=""
      /></a>
    </div>
    <label for="text" class="form-item textarea">
      Описание
      <Field name="text" id="text" v-slot="{ field }" type="text-area">
        <textarea class="input" v-bind="field"></textarea>
      </Field>
      <ErrorMessage name="text" />
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
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import * as yup from "yup";
import slugMixin from "@/mixins/slugMixin";
import toastMixin from "@/mixins/toastMixin";
import adminMixin from "@/mixins/adminMixin";
export default {
  name: "admin-actors",
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
      tableHeader: ["Полное имя актера", "Чпу", "действия"],
      refForm: null,
    };
  },
  methods: {
    submitData(val) {
      if (this.submitType === "submit") {
        let obj = {
          to: "actors",
          val: val,
        };
        this.CreateItem(obj,this)
          .then((p) => this.setSuccess("Запись добавлена"))
          .catch((err) => this.setError());
      } else if (this.submitType === "update") {
        let obj = {
          id: this.updateId,
          to: "actors",
          items: val,
        };

        this.updateDoc(obj,this)
          .then((p) => this.setSuccess("Запись обновлена"))
          .catch((err) => this.setError());
        this.submitType = "submit";
      }
    },
    setQuery(val) {
      this.setActorsQuery(val);
    },
    DeleteItem(val) {
      this.DeleteDialog().then((result) => {
        if (result.isConfirmed) {
          let obj = {
            to: "actors",
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
    ...mapMutations({
      setActorsQuery: "admin/setActorsQuery",
    }),
  },
  mounted() {
    this.FetchData("actors",this);
  },
  watch: {
    updateId(val) {
      let item = this.actors.find((p) => p.id === val);
      this.refForm.setFieldValue("text", item.text);
      this.slugField = item.name;
      this.currentUpdateItem = item;
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
        photo: yup.string().required(),
        text: yup.string().required(),
      });
    },
  },
};
</script>

<style scoped lang="less">
.textarea {
  width: 100%;
  textarea {
    width: 100%;
    resize: none;
    height: 150px;
  }
}
</style>
