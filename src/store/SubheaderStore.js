import { create } from "zustand";

const useSubheaderStore = create((set) => ({
  // ----------------------------------------- Sub Header ------------------------------------------
  // SUB HEADER
  subHeaderBackgroundColor: "",
  subHeaderBackgroundImage: "",
  subHeaderBackgroundGradient: "",
  subHeaderBorderWidth: "",
  subHeaderBorderStyle: "",
  subHeaderBorderColor: "",
  subHeaderShadow: "",
  subHeaderColor: "",
  subHeaderFilterBlur: "",
  subHeaderFontFamily: "",
  subHeaderFontSize: "",
  subHeaderBorderRadius: "",
  subHeaderHeight: "",

  // SUB HEADER TITLE
  subHeaderTitleBackgroundColor: "",
  subHeaderTitleBackgroundImage: "",
  subHeaderTitleBackgroundGradient: "",
  subHeaderTitleBorderWidth: "",
  subHeaderTitleBorderStyle: "",
  subHeaderTitleBorderColor: "",
  subHeaderTitleShadow: "",
  subHeaderTitleColor: "",
  subHeaderTitleFilterBlur: "",
  subHeaderTitleFontFamily: "",
  subHeaderTitleFontSize: "",
  subHeaderTitleFontWeight: "",
  subHeaderTitleBorderRadius: "",
  subHeaderTitleHeight: "",

  // SUB HEADER Text
  subHeaderTextBackgroundColor: "",
  subHeaderTextBackgroundImage: "",
  subHeaderTextBackgroundGradient: "",
  subHeaderTextBorderWidth: "",
  subHeaderTextBorderStyle: "",
  subHeaderTextBorderColor: "",
  subHeaderTextShadow: "",
  subHeaderTextColor: "",
  subHeaderTextFilterBlur: "",
  subHeaderTextFontFamily: "",
  subHeaderTextFontSize: "",
  subHeaderTextBorderRadius: "",
  subHeaderTextHeight: "",

  // End Selected
  changeStyle: (state) => {
    const property = state.property;
    set({ [property]: state.value });
  },

  changeOpacityColor: (state) => {
    console.log(state, "Ini state");
    const property = state.property;
    set({ [property]: state.value });
    set({ [`${property}900`]: `${state.value}e6` });
    set({ [`${property}800`]: `${state.value}cc` });
    set({ [`${property}700`]: `${state.value}b3` });
    set({ [`${property}600`]: `${state.value}99` });
    set({ [`${property}500`]: `${state.value}80` });
    set({ [`${property}400`]: `${state.value}66` });
    set({ [`${property}300`]: `${state.value}4d` });
    set({ [`${property}200`]: `${state.value}33` });
    set({ [`${property}100`]: `${state.value}1a` });
    set({ [`${property}50`]: `${state.value}0d` });
  },

  changeTemplateStyle: (state) => {
    for (let index = 0; index < state.data.length; index++) {
      console.log(state.data[index]);
      let property = state.data[index].property;
      set({ [property]: state.data[index].value });
    }
  },
}));

export default useSubheaderStore;
