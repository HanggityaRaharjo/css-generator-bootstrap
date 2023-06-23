import { create } from "zustand";

const useLayoutStore = create((set) => ({
  // Header
  headerBackgroundColor: "",
  headerBackgroundImage: "",
  headerBackgroundGradient: "",
  headerBorderWidth: "",
  headerBorderStyle: "",
  headerBorderColor: "",
  headerShadow: "",
  headerColor: "",
  headerFilterBlur: "",
  headerFontFamily: "",
  headerFontSize: "",
  headerBorderRadius: "",
  headerHeight: "",
  // End Header

  // Sidebar
  sidebarBackgroundColor: "",
  sidebarBackgroundImage: "",
  sidebarBackgroundGradient: "",
  sidebarBorderWidth: "",
  sidebarBorderStyle: "",
  sidebarBorderColor: "",
  sidebarShadowThick: "",
  sidebarShadowGradient: "",
  sidebarColor: "",
  sidebarFilterBlur: "",
  sidebarFontFamily: "",
  sidebarFontSize: "",
  sidebarBorderRadius: "",
  sidebarWidth: "225px",

  // Nav Link
  sidebarNavLinkBackgroundColor: "",
  sidebarNavLinkColor: "",
  sidebarNavLinkIconColor: "",
  sidebarNavHeadingColor: "",
  // Nav Link Active
  sidebarNavLinkActiveBackgroundColor: "",
  sidebarNavLinkActiveColor: "",

  // End Sidebar

  // Content
  contentBackgroundColor: "",
  contentBackgroundImage: "",
  contentBackgroundGradient: "",
  contentBorderWidth: "",
  contentBorderStyle: "",
  contentBorderColor: "",
  contentShadowThick: "",
  contentShadowGradient: "",
  contentColor: "",
  contentFilterBlur: "",
  contentFontFamily: "",
  contentFontSize: "",
  contentBorderRadius: "",
  // End Content
  // Selected
  footerBackgroundColor: "",
  footerBackgroundImage: "",
  footerBackgroundGradient: "",
  footerBorderWidth: "",
  footerBorderStyle: "",
  footerBorderColor: "",
  footerShadow: "",
  footerColor: "",
  footerFilterBlur: "",
  footerFontFamily: "",
  footerFontSize: "",
  footerBorderRadius: "",
  footerHeight: "",
  // End Selected

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

export default useLayoutStore;
