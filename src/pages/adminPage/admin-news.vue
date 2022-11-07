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
    <div v-if="currentUpdateItem.poster" class="form-item posters">
      <a href="#" class="admin-photo-container">
        Баннер статьи
        <img :src="currentUpdateItem.poster" alt="" />
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
            mask: 'DD-MM-YYYY',
          }"
          :masks="{ L: 'DD-MM-YYYY' }"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <div class="date-box">
              <input
                class="input"
                :value="inputValue.start"
                v-on="inputEvents.start"
              />
              <img :src="Arrow" alt="arrow" />
              <input
                class="input"
                :value="inputValue.end"
                v-on="inputEvents.end"
              />
            </div>
          </template>
        </DatePicker>
      </Field>
      <ErrorMessage name="date" />
    </label>
    <label for="text" class="form-item" :style="{ display: 'none' }">
      Текст статьи
      <Field name="text" id="text" v-slot="{ field }" type="text-area"> </Field>
      <ErrorMessage name="text" />
    </label>
    <div class="form-item" style="width: 100%">
      <quill-editor
        style="width: 100%"
        theme="snow"
        toolbar="full"
        :modules="module"
        :content-type="'html'"
        v-model:content="rawHtml"
        ref="editor"
      ></quill-editor>
    </div>
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
import { QuillEditor } from "@vueup/vue-quill";
import { ImageDrop } from "quill-image-drop-module";
import { Calendar, DatePicker } from "v-calendar";
import BlotFormatter from "quill-blot-formatter";
import AutoFormat from "quill-autoformat";
import Arrow from "@/icons/right-arrow.png";
import adminMixin from "@/mixins/adminMixin";
export default {
  name: "admin-news",
  mixins: [slugMixin, toastMixin, adminMixin],
  components: {
    Table,
    AdminNav,
    adminForm,
    DefaultButton,
    Field,
    ErrorMessage,
    Calendar,
    DatePicker,
    QuillEditor,
  },
  data() {
    return {
      Arrow,
      tableHeader: ["Название новости", "Чпу", "действия"],
      refForm: null,
      searchValue: null,
      rawHtml: null,
      range: {
        start: new Date(),
        end: new Date(),
      },
    };
  },
  methods: {
    submitData(val) {
      if (this.submitType === "submit") {
        let obj = {
          to: "news",
          val: val,
        };
        this.CreateItem(obj, this)
          .then((p) => this.setSuccess("Запись добавлена"))
          .catch((err) => this.setError());
      } else if (this.submitType === "update") {
        let obj = {
          id: this.updateId,
          to: "news",
          items: val,
        };

        this.updateDoc(obj, this)
          .then((p) => this.setSuccess("Запись обновлена"))
          .catch((err) => this.setError());
        this.submitType = "submit";
      }
    },

    DeleteItem(val) {
      this.DeleteDialog().then((result) => {
        if (result.isConfirmed) {
          let obj = {
            to: "news",
            id: val,
          };
          this.DeleteDoc(obj, this)
            .then((p) => this.setSuccess("Запись удалена"))
            .catch((err) => this.setError());
        } else {
          this.cancelOperation();
        }
      });
    },
    ...mapMutations({
      setNewsQuery: "admin/setNewsQuery",
    }),
    setQuery(val) {
      this.setNewsQuery(val);
    },
  },
  mounted() {
    this.FetchData("news", this);
  },
  watch: {
    rawHtml(val) {
      this.refForm.setFieldValue("text", val);
    },
    updateId(val) {
      let item = this.news.find((p) => p.id === val);
      this.slugField = item.name;
      //  this.refForm.setFieldValue("text", item.text);
      this.$refs.editor.setHTML(item.text);

      this.range = {
        start: new Date(item.date.start.split("-").reverse().join("-")),
        end: new Date(item.date.end.split("-").reverse().join("-")),
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
    module() {
      return [
        {
          name: "ImageDrop",
          module: ImageDrop,
        },
        {
          name: "BlotFormatter",
          module: BlotFormatter,
        },
        {
          name: "AutoFormat",
          module: AutoFormat,
        },
      ];
    },
  },
};
</script>

<style scoped lang="less">
@import "@vueup/vue-quill/dist/vue-quill.snow.css";
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
  &-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media @xs {
      flex-direction: column;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
