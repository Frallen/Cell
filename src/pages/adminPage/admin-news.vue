<template>
  <admin-form
    @formValues="submitData"
    :schema="schema"
    v-show="visible"
    @hide="visibleForm"
    @refForm="refFormAction"
  >
    <label for="name" class="form-item">
      Название статьи
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

    <label for="banner" class="form-item">
      Баннер статьи
      <Field name="banner" id="banner" class="input" type="file" />
      <ErrorMessage name="banner" />
    </label>
    <div v-if="currentUpdItem.poster" class="form-item posters">
      <a href="#">
        Баннер статьи
        <img :src="currentUpdItem.poster" alt="" />
      </a>
    </div>
    <label for="date" class="form-item date">
      Сроки публикации статьи
      <Field name="date" id="date" v-slot="{ field }">
        <DatePicker
          v-model="range"
          v-bind="field"
          is-range
          :model-config="{
            type: 'string',
            mask: 'YYYY-MM-DD',
          }"
          :masks="{ L: 'YYYY-MM-DD' }"
        />
      </Field>
      <ErrorMessage name="date" />
    </label>
    <label for="text" class="form-item textarea">
      Текст статьи
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

import { Calendar, DatePicker } from "v-calendar";
export default {
  name: "admin-news",
  mixins: [slugMixin, toastMixin],
  components: {
    Table,
    AdminNav,
    adminForm,
    DefaultButton,
    Field,
    ErrorMessage,
    Calendar,
    DatePicker,
  },
  data() {
    return {
      visible: false,
      tableHeader: ["Название новости", "Чпу", "действия"],
      updateId: null,
      submitType: "submit",
      refForm: null,
      poster: null,
      currentUpdItem: [],
      searchValue: null,
      range: {
        start: new Date(),
        end: new Date(),
      },
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
          to: "news",
          val: val,
        };
        this.CreateItem(obj)
          .then((p) => this.setSuccess("Запись добавлена"))
          .catch((err) => this.setError());
      } else if (this.submitType === "update") {
        let obj = {
          id: this.updateId,
          to: "news",
          items: val,
        };

        this.updateDoc(obj)
          .then((p) => this.setSuccess("Запись обновлена"))
          .catch((err) => this.setError());
        this.submitType = "submit";
      }
    },

    DeleteItem(val) {
      let obj = {
        to: "news",
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
      setNewsQuery: "admin/setNewsQuery",
    }),
    SetId(val) {
      this.updateId = val;
    },
    setQuery(val) {
      this.setNewsQuery(val);
    },
    refFormAction(val) {
      this.refForm = val;
    },
  },
  mounted() {
    this.FetchData("news");
  },
  watch: {
    updateId(val) {
      let item = this.news.find((p) => p.id === val);
      this.slugField = item.name;
      this.refForm.setFieldValue("text", item.text);

      this.range = {
        start: new Date(item.date.start),
        end: new Date(item.date.end),
      };
      this.submitType = "update";
    },
  },

  computed: {
    ...mapState({
      news: (state) => state.admin.news,
    }),
    ...mapGetters({
      searchTable: "admin/searchTableNews",
    }),
    schema() {
      return yup.object({
        name: yup.string().required(),
        slug: yup.string().required(),
        banner: yup.string().required(),
        text: yup.string().required(),
        date: yup.object().required(),
      });
    },
  },
};
</script>

<style scoped lang="less">
.posters {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: @text;
    img {
      max-width: 150px;
      max-height: 150px;
    }
  }
}
.textarea {
  width: 100%;
  textarea {
    width: 100%;
    resize: none;
    height: 150px;
  }
}
.date {
  display: flex;
  flex-direction: column;
}
</style>
