import { create } from "zustand";

const useTemplateStore = create((set) => ({
  stateTemplateId: "",
  stateTemplate: "",
  stateCompanyName: "",
  stateTemplateCode: "",

  // End Selected
  editTemplate: (state) => {
    console.log(state);
    const property = state.property;
    set({ [property]: state.value });
  },
  resetTemplate: () =>
    set({
      stateTemplateId: "",
      stateTemplate: "",
      stateCompanyName: "",
      stateTemplateCode: "",
    }),
}));

export default useTemplateStore;
