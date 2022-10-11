import { mapActions } from "vuex";

export default {
  data() {
    return {
      visible: false,
      updateId: null,
      submitType: "submit",
      currentUpdateItem: [],
    };
  },
  methods:{
    SetId(val) {
      this.updateId = val;
    },
    visibleForm(val) {
      this.visible = val;
      if (val === false) this.submitType = "submit";
    },
    refFormAction(val) {
      this.refForm = val;
    },
    ...mapActions({
      CreateItem: "admin/CreateItem",
      FetchData: "admin/FetchData",
      updateDoc: "admin/updateDoc",
      DeleteDoc: "admin/DeleteDoc",
    }),
  }
};
