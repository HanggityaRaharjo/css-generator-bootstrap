import { create } from "zustand";

const useColorStore = create((set) => ({
  // Color Theme
  // COLOR PRIMARY
  colorPrimary: "#007bff",
  colorPrimary900: "#007bffe6",
  colorPrimary800: "#007bffcc",
  colorPrimary700: "#007bffb3",
  colorPrimary600: "#007bff99",
  colorPrimary500: "#007bff80",
  colorPrimary400: "#007bff66",
  colorPrimary300: "#007bff4d",
  colorPrimary200: "#007bff33",
  colorPrimary100: "#007bff1a",
  colorPrimary50: "#007bff0d",
  // COLOR SECONDARY
  colorSecondary: "#6c757d",
  colorSecondary900: "#6c757de6",
  colorSecondary800: "#6c757dcc",
  colorSecondary700: "#6c757db3",
  colorSecondary600: "#6c757d99",
  colorSecondary500: "#6c757d80",
  colorSecondary400: "#6c757d66",
  colorSecondary300: "#6c757d4d",
  colorSecondary200: "#6c757d33",
  colorSecondary100: "#6c757d1a",
  colorSecondary50: "#6c757d0d",
  // COLOR SUCCESS
  colorSuccess: "#28a745",
  colorSuccess900: "#28a745e6",
  colorSuccess800: "#28a745cc",
  colorSuccess700: "#28a745b3",
  colorSuccess600: "#28a74599",
  colorSuccess500: "#28a74580",
  colorSuccess400: "#28a74566",
  colorSuccess300: "#28a7454d",
  colorSuccess200: "#28a74533",
  colorSuccess100: "#28a7451a",
  colorSuccess50: "#28a7450d",
  // COLOR WARNING
  colorWarning: "#ffc107",
  colorWarning900: "#ffc107e6",
  colorWarning800: "#ffc107cc",
  colorWarning700: "#ffc107b3",
  colorWarning600: "#ffc10799",
  colorWarning500: "#ffc10780",
  colorWarning400: "#ffc10766",
  colorWarning300: "#ffc1074d",
  colorWarning200: "#ffc10733",
  colorWarning100: "#ffc1071a",
  colorWarning50: "#ffc1070d",
  // COLOR INFO
  colorInfo: "#17a2b8",
  colorInfo900: "#17a2b8e6",
  colorInfo800: "#17a2b8cc",
  colorInfo700: "#17a2b8b3",
  colorInfo600: "#17a2b899",
  colorInfo500: "#17a2b880",
  colorInfo400: "#17a2b866",
  colorInfo300: "#17a2b84d",
  colorInfo200: "#17a2b833",
  colorInfo100: "#17a2b81a",
  colorInfo50: "#17a2b80d",
  // COLOR DANGER
  colorDanger: "#dc3545",
  colorDanger900: "#dc3545e6",
  colorDanger800: "#dc3545cc",
  colorDanger700: "#dc3545b3",
  colorDanger600: "#dc354599",
  colorDanger500: "#dc354580",
  colorDanger400: "#dc354566",
  colorDanger300: "#dc35454d",
  colorDanger200: "#dc354533",
  colorDanger100: "#dc35451a",
  colorDanger50: "#dc35450d",
  // ----------------------------------------- Toast ------------------------------------------
  // COLOR Dark
  colorDark: "#343a40",
  colorDark900: "#343a40e6",
  colorDark800: "#343a40cc",
  colorDark700: "#343a40b3",
  colorDark600: "#343a4099",
  colorDark500: "#343a4080",
  colorDark400: "#343a4066",
  colorDark300: "#343a404d",
  colorDark200: "#343a4033",
  colorDark100: "#343a401a",
  colorDark50: "#343a400d",
  // COLOR Light
  colorLight: "#ffffff",
  colorLight900: "#ffffffe6",
  colorLight800: "#ffffffcc",
  colorLight700: "#ffffffb3",
  colorLight600: "#ffffff99",
  colorLight500: "#ffffff80",
  colorLight400: "#ffffff66",
  colorLight300: "#ffffff4d",
  colorLight200: "#ffffff33",
  colorLight100: "#ffffff1a",
  colorLight50: "#ffffff0d",

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

export default useColorStore;
