import { create } from "zustand";

const useTemplateStore = create((set) => ({
  stateTemplate: "",
  smartadmin: {
    link: "http://localhost:8000/smartadmin/css/themes/triklin.css",
  },
  sbadmin: {
    link: "http://localhost:8000/bootstrap-test/css/styles.css",
  },
  // End Selected
  changeStyle: (state) => {
    console.log(state);
    const property = state.property;
    set({ [property]: state.value });
  },
}));

export default useTemplateStore;
