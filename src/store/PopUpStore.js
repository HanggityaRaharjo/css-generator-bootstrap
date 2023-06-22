import { create } from "zustand";

const usePopUpStore = create((set) => ({
  popUpCardBackground: "",
  popUpSuccessBackground: "",
  popUpSuccessColor: "",
  popUpFailedBackground: "",
  popUpFailedColor: "",
  popUpTextColor: "",
  popUpBtnBackground: "",
  popUpBtnTextColor: "",

  // ----------------------------------------- Pop up ------------------------------------------
  // PopUp
  popUpSuccessBackgroundColor: "",
  popUpFailedBackgroundColor: "",

  popUpCardBackgroundColor: "",
  popUpBackgroundImage: "",
  popUpBackgroundGradient: "",
  popUpBorderWidth: "",
  popUpBorderStyle: "",
  popUpBorderColor: "",
  popUpShadow: "",
  popUpColor: "",
  popUpFilterBlur: "",
  popUpFontFamily: "",
  popUpFontSize: "",
  popUpBorderRadius: "",
  popUpHeight: "",
  // ----------------------------------------- End Pop up ------------------------------------------

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

export default usePopUpStore;
