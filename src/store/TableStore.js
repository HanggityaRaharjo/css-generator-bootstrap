import { create } from "zustand";

const useTableStore = create((set) => ({
  // ----------------------------------------- Table ------------------------------------------
  // Table
  tableBackgroundColor: "",
  tableBackgroundImage: "",
  tableBackgroundGradient: "",
  tableBorderWidth: "",
  tableBorderStyle: "",
  tableBorderColor: "",
  tableShadow: "",
  tableColor: "",
  tableFilterBlur: "",
  tableFontFamily: "",
  tableFontSize: "",
  tableBorderRadius: "",
  tableHeight: "",
  // Table Header
  tableHeadBackgroundColor: "",
  tableHeadBackgroundImage: "",
  tableHeadBackgroundGradient: "",
  tableHeadBorderWidth: "",
  tableHeadBorderStyle: "",
  tableHeadBorderColor: "",
  tableHeadShadow: "",
  tableHeadColor: "",
  tableHeadFilterBlur: "",
  tableHeadFontFamily: "",
  tableHeadFontSize: "",
  tableHeadBorderRadius: "",
  tableHeadHeight: "",
  tableHeadPadding: "",
  // Table Body
  tableBodyBackgroundColor: "",
  tableRowOddBackgroundColor: "",
  tableRowEvenBackgroundColor: "",
  tableBodyBackgroundImage: "",
  tableBodyBackgroundGradient: "",
  tableBodyBorderWidth: "",
  tableBodyBorderStyle: "",
  tableBodyBorderColor: "",
  tableBodyShadow: "",
  tableBodyColor: "",
  tableBodyFilterBlur: "",
  tableBodyFontFamily: "",
  tableBodyFontSize: "",
  tableBodyBorderRadius: "",
  tableBodyHeight: "",
  tableBodyHeight: "",
  // Table Foot
  tableFootBackgroundColor: "",
  tableFootBackgroundImage: "",
  tableFootBackgroundGradient: "",
  tableFootBorderWidth: "",
  tableFootBorderStyle: "",
  tableFootBorderColor: "",
  tableFootShadow: "",
  tableFootColor: "",
  tableFootFilterBlur: "",
  tableFootFontFamily: "",
  tableFootFontSize: "",
  tableFootBorderRadius: "",
  tableFootHeight: "",
  tableBorderRadius: "",
  tableFootPadding: "",

  // ------------------------------- Additional Table ------------------------------------------
  // Table Select
  tableSelectBackgroundColor: "",
  tableSelectBackgroundImage: "",
  tableSelectBackgroundGradient: "",
  tableSelectBorderWidth: "",
  tableSelectBorderStyle: "",
  tableSelectBorderColor: "",
  tableSelectShadow: "",
  tableSelectColor: "",
  tableSelectFilterBlur: "",
  tableSelectFontFamily: "",
  tableSelectFontSize: "",
  tableSelectBorderRadius: "",
  tableSelectHeight: "",
  tableSelectBorderRadius: "",
  tableSelectPadding: "",
  // Table Input
  tableInputBackgroundColor: "",
  tableInputBackgroundImage: "",
  tableInputBackgroundGradient: "",
  tableInputBorderWidth: "",
  tableInputBorderStyle: "",
  tableInputBorderColor: "",
  tableInputShadow: "",
  tableInputColor: "",
  tableInputFilterBlur: "",
  tableInputFontFamily: "",
  tableInputFontSize: "",
  tableInputBorderRadius: "",
  tableInputHeight: "",
  tableInputBorderRadius: "",
  tableInputPadding: "",
  // Table Show
  tableShowBackgroundColor: "",
  tableShowBackgroundImage: "",
  tableShowBackgroundGradient: "",
  tableShowBorderWidth: "",
  tableShowBorderStyle: "",
  tableShowBorderColor: "",
  tableShowShadow: "",
  tableShowColor: "",
  tableShowFilterBlur: "",
  tableShowFontFamily: "",
  tableShowFontSize: "",
  tableShowBorderRadius: "",
  tableShowHeight: "",
  tableShowBorderRadius: "",
  tableShowPadding: "",
  // Table Pagination
  tablePaginationBackgroundColor: "",
  tablePaginationActiveBackgroundColor: "",
  tablePaginationActiveColor: "",
  tablePaginationBackgroundImage: "",
  tablePaginationBackgroundGradient: "",
  tablePaginationBorderWidth: "",
  tablePaginationBorderStyle: "",
  tablePaginationBorderColor: "",
  tablePaginationShadow: "",
  tablePaginationColor: "",
  tablePaginationFilterBlur: "",
  tablePaginationFontFamily: "",
  tablePaginationFontSize: "",
  tablePaginationBorderRadius: "",
  tablePaginationHeight: "",
  tablePaginationBorderRadius: "",
  tablePaginationPadding: "",

  // ----------------------------------------- Child Table ------------------------------------------
  tableChildBackgroundColor: "",
  tableChildBackgroundImage: "",
  tableChildBackgroundGradient: "",
  tableChildBorderWidth: "",
  tableChildBorderStyle: "",
  tableChildBorderColor: "",
  tableChildShadow: "",
  tableChildColor: "",
  tableChildFilterBlur: "",
  tableChildFontFamily: "",
  tableChildFontSize: "",
  tableChildBorderRadius: "",
  tableChildHeight: "",
  tableChildBorderRadius: "",
  tableChildPadding: "",

  // ----------------------------------------- End Child Table ------------------------------------------

  // End Selected
  changeStyle: (state) => {
    console.log(state);
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
    console.log(state);
    for (let index = 0; index < state.data.length; index++) {
      console.log(state.data[index]);
      let property = state.data[index].property;
      set({ [property]: state.data[index].value });
    }
  },
}));

export default useTableStore;
