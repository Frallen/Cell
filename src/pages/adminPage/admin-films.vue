<template>
  <adminForm
    @formValues="submitData"
    :schema="schema"
    v-show="visible"
    @hide="visibleForm"
    @refForm="refFormAction"
  >
    <label for="name" class="form-item">
      Введите название
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
    <Select id="genres" :label="'Жанры'" name="genres" :options="genres" />
    <Select id="actors" :label="'Актеры'" name="actors" :options="actors" />
    <label for="country" class="form-item">
      Страна
      <Field name="country" id="country" class="input" />
      <ErrorMessage name="country" />
    </label>
    <label for="duration" class="form-item">
      Продолжительность
      <Field name="duration" id="duration" class="input" />
      <ErrorMessage name="duration" />
    </label>
    <label for="year" class="form-item">
      Год
      <Field name="year" id="year" class="input" />
      <ErrorMessage name="year" />
    </label>
    <label for="video" class="form-item">
      Ссылка на видео
      <Field name="video" id="video" class="input" />
      <ErrorMessage name="video" />
    </label>
    <label for="poster" class="form-item">
      Постер
      <Field name="poster" id="poster" class="input" type="file" />
      <ErrorMessage name="poster" />
    </label>
    <label for="BigPoster" class="form-item">
      Большой постер
      <Field name="BigPoster" id="BigPoster" class="input" type="file" />
      <ErrorMessage name="poster" />
    </label>
    <label v-show="currentUpdItem" class="form-item posters">
      <a href="#">
        Постер
        <img :src="currentUpdItem.poster" alt="" />
      </a>
      <a href="#">
        Большой постер
        <img :src="currentUpdItem.BigPoster" alt="" />
      </a>
    </label>
    <label for="text" class="form-item textarea">
      Описание
      <Field name="text" id="text" v-slot="{ field }" type="text-area">
        <textarea class="input" v-bind="field"></textarea>
      </Field>
      <ErrorMessage name="text" />
    </label>
  </adminForm>
  <Table
    :table-header="tableHeader"
    :data="films"
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
import { ErrorMessage, Field } from "vee-validate";
import slugMixin from "@/mixins/slugMixin";
import toastMixin from "@/mixins/toastMixin";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import * as yup from "yup";
import Select from "@/components/ui/select";
export default {
  name: "admin-films",
  mixins: [slugMixin, toastMixin],
  components: {
    Table,
    AdminNav,
    adminForm,
    DefaultButton,
    Field,
    ErrorMessage,
    Select,
  },
  data() {
    return {
      visible: false,
      tableHeader: ["Название", "Чпу", "действия"],
      updateId: null,
      submitType: "submit",
      refForm: null,
      poster: null,
      currentUpdItem: [],
      searchValue: null,
    };
  },
  methods: {
    visibleForm(val) {
      this.visible = val;
      if (val === false) this.submitType = "submit";
    },
    submitData(val) {
      if (this.submitType === "submit") {
        let genres = this.genres.filter((p) => val.genres.includes(p.name));
        delete val.genres;
        let obj = {
          to: "films",
          val: val,
          genres: genres,
        };
        this.CreateItem(obj)
          .then((p) => this.setSuccess("Запись добавлена"))
          .catch((err) => this.setError());
      } else if (this.submitType === "update") {
        let obj = {
          id: this.updateId,
          to: "films",
          items: val,
        };

        this.updateDoc(obj)
          .then((p) => this.setSuccess("Запись обновлена"))
          .catch((err) => this.setError());
        this.submitType = "submit";
      }
      this.currentUpdItem = [];
    },
    DeleteItem(val) {
      let obj = {
        to: "films",
        id: val,
      };
      this.DeleteDoc(obj)
        .then((p) => this.setSuccess("Запись удалена"))
        .catch((err) => this.setError());
      this.currentUpdItem = [];
    },
    ...mapActions({
      CreateItem: "admin/CreateItem",
      FetchData: "admin/FetchData",
      updateDoc: "admin/updateDoc",
      DeleteDoc: "admin/DeleteDoc",
    }),
    SetId(val) {
      this.updateId = val;
    },
    setQuery(val) {
      this.searchValue = val;
    },
    refFormAction(val) {
      this.refForm = val;
    },
  },
  mounted() {
    this.FetchData("films");
    this.FetchData("genres");
    this.FetchData("actors");
  },
  watch: {
    updateId(val) {
      let item = this.films.find((p) => p.id === val);
      this.slugField = item.name;
      this.refForm.setFieldValue("text", item.text);
      this.refForm.setFieldValue("country", item.country);
      this.refForm.setFieldValue("duration", item.duration);
      this.refForm.setFieldValue("year", item.year);
      this.refForm.setFieldValue("video", item.video);
      this.refForm.setFieldValue(
        "genres",
        item.genres.map((p) => p.name)
      );
      this.refForm.setFieldValue("actors", item.actors);
      this.submitType = "update";
      this.currentUpdItem = item;
    },
  },

  computed: {
    ...mapGetters({
      searchTable: "admin/searchTable",
    }),
    ...mapState({
      films: (state) => state.admin.films,
      genres: (state) => state.admin.genres,
      actors: (state) => state.admin.actors,
    }),
    schema() {
      return yup.object({
        name: yup.string().required(),
        slug: yup.string().required(),
        text: yup.string().required(),
        country: yup.string().required(),
        duration: yup.string().required(),
        year: yup.string().required(),
        video: yup.string().required(),
        poster: yup.string().required(),
        BigPoster: yup.string().required(),
        genres: yup
          .array()
          .min(1, "Необходимо выбрать хотябы 1 жанр")
          .required(),
        actors: yup
          .array()
          .min(1, "Необходимо выбрать хотябы 1 жанр")
          .required(),
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
</style>
