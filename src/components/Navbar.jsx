import React, { useEffect, useState } from "react";
import axios from "axios";
import useStyleStore from "../store/CssStore";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import useTemplateStore from "../store/TemplateStore";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const stateComponents = useStyleStore((state) => state);
  const templateStore = useTemplateStore((state) => state);

  // Redirect if no template choose
  const navigate = useNavigate();
  useEffect(() => {
    if (templateStore.stateTemplate === "") {
      console.log("redirect");
      navigate("/");
    }
  }, [templateStore.stateTemplate]);

  const [dropdownMenu, setDropdownMenu] = useState(false);

  const handleSaveButton = (selectedTemplate) => {
    const dataStyle = [];

    for (
      let index = 0;
      index < Object.keys(stateComponents).length - 3;
      index++
    ) {
      const obj = {
        property: Object.keys(stateComponents)[index],
        value: Object.values(stateComponents)[index],
      };

      if (Object.values(stateComponents)[index]) {
        dataStyle.push(obj);
      }

      // console.log("keys:", Object.keys(stateComponents)[index]);
      // console.log(
      //   "value:",
      //   Object.values(stateComponents)[index] ? "ada" : "kosong"
      // );
      // console.log("-----");
    }

    // console.log(dataStyle);

    // const components = {
    //   input: {
    //     inputLabelColor: stateComponents.inputLabelColor,
    //     inputTextBackground: stateComponents.inputTextBackground,
    //     inputTextColor: stateComponents.inputTextColor,
    //   },
    //   login: {
    //     loginButtonBackground: stateComponents.loginButtonBackground,
    //     loginButtonTextColor: stateComponents.loginButtonTextColor,
    //     loginInputBackground: stateComponents.loginInputBackground,
    //     loginInputTextColor: stateComponents.loginInputTextColor,
    //     loginLabelColor: stateComponents.loginLabelColor,
    //   },
    //   monitor: {
    //     monitorBorderBackground: stateComponents.monitorBorderBackground,
    //   },
    //   navbar: {
    //     navbarBackground: stateComponents.navbarBackground,
    //     navbarBorderColor: stateComponents.navbarBorderColor,
    //     navbarBorderRadius: stateComponents.navbarBorderRadius,
    //     navbarBorderStyle: stateComponents.navbarBorderStyle,
    //     navbarBorderWidth: stateComponents.navbarBorderWidth,
    //     navbarTextColor: stateComponents.navbarTextColor,
    //     navbarTextHover: stateComponents.navbarTextHover,
    //   },
    //   popup: {
    //     popUpBtnBackground: stateComponents.popUpBtnBackground,
    //     popUpBtnTextColor: stateComponents.popUpBtnTextColor,
    //     popUpCardBackground: stateComponents.popUpCardBackground,
    //     popUpFailedBackground: stateComponents.popUpFailedBackground,
    //     popUpFailedColor: stateComponents.popUpFailedColor,
    //     popUpSuccessBackground: stateComponents.popUpSuccessBackground,
    //     popUpSuccessColor: stateComponents.popUpSuccessColor,
    //     popUpTextColor: stateComponents.popUpTextColor,
    //   },
    //   select: {
    //     selectLabelColor: stateComponents.selectLabelColor,
    //     selectTextBackground: stateComponents.selectTextBackground,
    //     selectTextColor: stateComponents.selectTextColor,
    //   },
    //   sidebar: {
    //     BackgroundColor: stateComponents.sidebarBackgroundColor,
    //     BackgroundImage: stateComponents.sidebarBackgroundImage,
    //     Width: stateComponents.sidebarWidth,
    //     sidebarBorderColor: stateComponents.sidebarBorderColor,
    //     sidebarBorderRadius: stateComponents.sidebarBorderRadius,
    //     sidebarBorderStyle: stateComponents.sidebarBorderStyle,
    //     sidebarBorderWidth: stateComponents.sidebarBorderWidth,
    //     sidebarLinkBackgroundActive:
    //       stateComponents.sidebarLinkBackgroundActive,
    //     sidebarLinkBorderColor: stateComponents.sidebarLinkBorderColor,
    //     sidebarLinkBorderRadius: stateComponents.sidebarLinkBorderRadius,
    //     sidebarLinkBorderStyle: stateComponents.sidebarLinkBorderStyle,
    //     sidebarLinkBorderWidth: stateComponents.sidebarLinkBorderWidth,
    //     sidebarLinkTextColor: stateComponents.sidebarLinkTextColor,
    //     Color: stateComponents.sidebarColor,
    //     FontSize: stateComponents.sidebarFontSize,

    //     // NagigationLink
    //     SidebarNavBackgroundColor:
    //       stateComponents.sidebarNavLinkBackgroundColor,
    //     sidebarNavColor: stateComponents.sidebarNavLinkColor,
    //     sidebarNavIconColor: stateComponents.sidebarNavLinkIconColor,
    //     sidebarNavHeadingColor: stateComponents.sidebarNavHeadingColor,
    //     // NagigationLinkActive
    //     SidebarNavActiveBackgroundColor:
    //       stateComponents.sidebarNavLinkActiveBackgroundColor,
    //     sidebarNavActiveColor: stateComponents.sidebarNavLinkActiveColor,
    //   },

    //   header: {
    //     BackgroundColor: stateComponents.headerBackgroundColor,
    //     BackgroundGradient: stateComponents.headerBackgroundGradient,
    //     BackgroundImage: stateComponents.headerBackgroundImage,
    //     BorderWidth: stateComponents.headerBorderWidth,
    //     BorderColor: stateComponents.headerBorderColor,
    //     Shadow: stateComponents.headerShadow,
    //     Color: stateComponents.headerColor,
    //     Height: stateComponents.headerHeight,
    //     FontSize: stateComponents.headerFontSize,
    //     FilterBlur: stateComponents.headerFilterBlur,
    //   },
    //   content: {
    //     BackgroundColor: stateComponents.contentBackgroundColor,
    //     BackgroundGradient: stateComponents.contentBackgroundGradient,
    //     BackgroundImage: stateComponents.contentBackgroundImage,
    //     Color: stateComponents.contentColor,
    //   },
    //   footer: {
    //     BackgroundColor: stateComponents.footerBackgroundColor,
    //     BackgroundGradient: stateComponents.footerBackgroundGradient,
    //     BorderWidth: stateComponents.footerBorderWidth,
    //     BorderColor: stateComponents.footerBorderColor,
    //     Shadow: stateComponents.footerShadow,
    //     Color: stateComponents.footerColor,
    //     Height: stateComponents.footerHeight,
    //   },
    //   button: {
    //     Primary: {
    //       BackgroundColor: stateComponents.btnPrimaryBackground,
    //     },
    //     Secondary: {
    //       BackgroundColor: stateComponents.btnSecondaryBackground,
    //     },
    //     Success: {
    //       BackgroundColor: stateComponents.btnSuccessBackground,
    //     },
    //     Error: {
    //       BackgroundColor: stateComponents.btnErrorBackground,
    //     },
    //     Warning: {
    //       BackgroundColor: stateComponents.btnWarningBackground,
    //     },
    //     Info: {
    //       BackgroundColor: stateComponents.btnInfoBackground,
    //     },
    //   },
    //   modal: {
    //     modalHeader: {
    //       BackgroundColor: stateComponents.modalHeaderBackgroundColor,
    //     },
    //     modalBody: {
    //       BackgroundColor: stateComponents.modalBodyBackgroundColor,
    //     },
    //     modalFooter: {
    //       BackgroundColor: stateComponents.modalFooterBackgroundColor,
    //     },
    //   },
    //   card: {
    //     BackgroundColor: stateComponents.cardBackgroundColor,
    //     BackgroundGradient: stateComponents.cardBackgroundGradient,
    //     BackgroundImage: stateComponents.cardBackgroundImage,
    //     BorderWidth: stateComponents.cardBorderWidth,
    //     BorderRadius: stateComponents.cardBorderRadius,
    //     BorderColor: stateComponents.cardBorderColor,
    //     Shadow: stateComponents.cardShadow,
    //     Color: stateComponents.cardColor,
    //     Height: stateComponents.cardHeight,
    //     FontSize: stateComponents.cardFontSize,
    //     FilterBlur: stateComponents.cardFilterBlur,
    //     cardHeader: {
    //       BackgroundColor: stateComponents.cardHeaderBackgroundColor,
    //       Color: stateComponents.cardHeaderColor,
    //     },
    //     cardBody: {
    //       BackgroundColor: stateComponents.cardContentBackgroundColor,
    //       BackgroundGradient: stateComponents.cardContentBackgroundGradient,
    //       BackgroundImage: stateComponents.cardContentBackgroundImage,
    //       BorderWidth: stateComponents.cardContentBorderWidth,
    //       BorderColor: stateComponents.cardContentBorderColor,
    //       Shadow: stateComponents.cardContentShadow,
    //       Color: stateComponents.cardContentColor,
    //       Height: stateComponents.cardContentHeight,
    //       FontSize: stateComponents.cardContentFontSize,
    //       FilterBlur: stateComponents.cardContentFilterBlur,
    //     },
    //     cardFooter: {
    //       BackgroundColor: stateComponents.cardFooterBackgroundColor,
    //     },
    //   },
    //   table: {
    //     tableHead: {
    //       BackgroundColor: stateComponents.tableHeadBackgroundColor,
    //       BackgroundGradient: stateComponents.tableHeadBackgroundGradient,
    //       BackgroundImage: stateComponents.tableHeadBackgroundImage,
    //       BorderWidth: stateComponents.tableHeadBorderWidth,
    //       BorderRadius: stateComponents.tableHeadBorderRadius,
    //       BorderColor: stateComponents.tableHeadBorderColor,
    //       Shadow: stateComponents.tableHeadShadow,
    //       Color: stateComponents.tableHeadColor,
    //       Height: stateComponents.tableHeadHeight,
    //       FontSize: stateComponents.tableHeadFontSize,
    //       FilterBlur: stateComponents.tableHeadFilterBlur,
    //       Padding: stateComponents.tableHeadPadding,
    //     },
    //     tableBody: {
    //       BackgroundColor: stateComponents.tableBodyBackgroundColor,
    //       OddBackgroundColor: stateComponents.tableRowOddBackgroundColor,
    //       EvenBackgroundColor: stateComponents.tableRowEvenBackgroundColor,
    //       BackgroundGradient: stateComponents.tableBodyBackgroundGradient,
    //       BackgroundImage: stateComponents.tableBodyBackgroundImage,
    //       BorderWidth: stateComponents.tableBodyBorderWidth,
    //       BorderRadius: stateComponents.tableBodyBorderRadius,
    //       BorderColor: stateComponents.tableBodyBorderColor,
    //       Shadow: stateComponents.tableBodyShadow,
    //       Color: stateComponents.tableBodyColor,
    //       Height: stateComponents.tableBodyHeight,
    //       FontSize: stateComponents.tableBodyFontSize,
    //       FilterBlur: stateComponents.tableBodyFilterBlur,
    //       Padding: stateComponents.tableBodyPadding,
    //     },
    //     tableFoot: {
    //       BackgroundColor: stateComponents.tableFootBackgroundColor,
    //       BackgroundGradient: stateComponents.tableFootBackgroundGradient,
    //       BackgroundImage: stateComponents.tableFootBackgroundImage,
    //       BorderWidth: stateComponents.tableFootBorderWidth,
    //       BorderRadius: stateComponents.tableFootBorderRadius,
    //       BorderColor: stateComponents.tableFootBorderColor,
    //       Shadow: stateComponents.tableFootShadow,
    //       Color: stateComponents.tableFootColor,
    //       Height: stateComponents.tableFootHeight,
    //       FontSize: stateComponents.tableFootFontSize,
    //       FilterBlur: stateComponents.tableFootFilterBlur,
    //       Padding: stateComponents.tableFootPadding,
    //     },
    //     tableSelect: {
    //       BackgroundColor: stateComponents.tableSelectBackgroundColor,
    //       BackgroundGradient: stateComponents.tableSelectBackgroundGradient,
    //       BackgroundImage: stateComponents.tableSelectBackgroundImage,
    //       BorderWidth: stateComponents.tableSelectBorderWidth,
    //       BorderRadius: stateComponents.tableSelectBorderRadius,
    //       BorderColor: stateComponents.tableSelectBorderColor,
    //       Shadow: stateComponents.tableSelectShadow,
    //       Color: stateComponents.tableSelectColor,
    //       Height: stateComponents.tableSelectHeight,
    //       FontSize: stateComponents.tableSelectFontSize,
    //       FilterBlur: stateComponents.tableSelectFilterBlur,
    //       Padding: stateComponents.tableSelectPadding,
    //     },
    //     tableInput: {
    //       BackgroundColor: stateComponents.tableInputBackgroundColor,
    //       BackgroundGradient: stateComponents.tableInputBackgroundGradient,
    //       BackgroundImage: stateComponents.tableInputBackgroundImage,
    //       BorderWidth: stateComponents.tableInputBorderWidth,
    //       BorderRadius: stateComponents.tableInputBorderRadius,
    //       BorderColor: stateComponents.tableInputBorderColor,
    //       Shadow: stateComponents.tableInputShadow,
    //       Color: stateComponents.tableInputColor,
    //       Height: stateComponents.tableInputHeight,
    //       FontSize: stateComponents.tableInputFontSize,
    //       FilterBlur: stateComponents.tableInputFilterBlur,
    //       Padding: stateComponents.tableInputPadding,
    //     },
    //     tablePagination: {
    //       BackgroundColor: stateComponents.tablePaginationBackgroundColor,
    //       ActiveBackgroundColor:
    //         stateComponents.tablePaginationActiveBackgroundColor,
    //       BackgroundGradient: stateComponents.tablePaginationBackgroundGradient,
    //       BackgroundImage: stateComponents.tablePaginationBackgroundImage,
    //       BorderWidth: stateComponents.tablePaginationBorderWidth,
    //       BorderRadius: stateComponents.tablePaginationBorderRadius,
    //       BorderColor: stateComponents.tablePaginationBorderColor,
    //       Shadow: stateComponents.tablePaginationShadow,
    //       Color: stateComponents.tablePaginationColor,
    //       ActiveColor: stateComponents.tablePaginationActiveColor,
    //       Height: stateComponents.tablePaginationHeight,
    //       FontSize: stateComponents.tablePaginationFontSize,
    //       FilterBlur: stateComponents.tablePaginationFilterBlur,
    //       Padding: stateComponents.tablePaginationPadding,
    //     },
    //   },
    //   themeColor: {
    //     //Primary
    //     colorPrimary: stateComponents.colorPrimary,
    //     colorPrimary50: stateComponents.colorPrimary50,
    //     colorPrimary200: stateComponents.colorPrimary200,
    //     colorPrimary300: stateComponents.colorPrimary300,
    //     colorPrimary400: stateComponents.colorPrimary400,
    //     colorPrimary500: stateComponents.colorPrimary500,
    //     colorPrimary600: stateComponents.colorPrimary600,
    //     colorPrimary700: stateComponents.colorPrimary700,
    //     colorPrimary800: stateComponents.colorPrimary800,
    //     colorPrimary900: stateComponents.colorPrimary900,
    //     //Secondary
    //     colorSecondary: stateComponents.colorSecondary,
    //     colorSecondary50: stateComponents.colorSecondary50,
    //     colorSecondary200: stateComponents.colorSecondary200,
    //     colorSecondary300: stateComponents.colorSecondary300,
    //     colorSecondary400: stateComponents.colorSecondary400,
    //     colorSecondary500: stateComponents.colorSecondary500,
    //     colorSecondary600: stateComponents.colorSecondary600,
    //     colorSecondary700: stateComponents.colorSecondary700,
    //     colorSecondary800: stateComponents.colorSecondary800,
    //     colorSecondary900: stateComponents.colorSecondary900,
    //     // Success
    //     colorSuccess: stateComponents.colorSuccess,
    //     colorSuccess50: stateComponents.colorSuccess50,
    //     colorSuccess200: stateComponents.colorSuccess200,
    //     colorSuccess300: stateComponents.colorSuccess300,
    //     colorSuccess400: stateComponents.colorSuccess400,
    //     colorSuccess500: stateComponents.colorSuccess500,
    //     colorSuccess600: stateComponents.colorSuccess600,
    //     colorSuccess700: stateComponents.colorSuccess700,
    //     colorSuccess800: stateComponents.colorSuccess800,
    //     colorSuccess900: stateComponents.colorSuccess900,
    //     // Warning
    //     colorWarning: stateComponents.colorWarning,
    //     colorWarning50: stateComponents.colorWarning50,
    //     colorWarning200: stateComponents.colorWarning200,
    //     colorWarning300: stateComponents.colorWarning300,
    //     colorWarning400: stateComponents.colorWarning400,
    //     colorWarning500: stateComponents.colorWarning500,
    //     colorWarning600: stateComponents.colorWarning600,
    //     colorWarning700: stateComponents.colorWarning700,
    //     colorWarning800: stateComponents.colorWarning800,
    //     colorWarning900: stateComponents.colorWarning900,
    //     // Info
    //     colorInfo: stateComponents.colorInfo,
    //     colorInfo50: stateComponents.colorInfo50,
    //     colorInfo200: stateComponents.colorInfo200,
    //     colorInfo300: stateComponents.colorInfo300,
    //     colorInfo400: stateComponents.colorInfo400,
    //     colorInfo500: stateComponents.colorInfo500,
    //     colorInfo600: stateComponents.colorInfo600,
    //     colorInfo700: stateComponents.colorInfo700,
    //     colorInfo800: stateComponents.colorInfo800,
    //     colorInfo900: stateComponents.colorInfo900,
    //     // Danger
    //     colorDanger: stateComponents.colorDanger,
    //     colorDanger50: stateComponents.colorDanger50,
    //     colorDanger200: stateComponents.colorDanger200,
    //     colorDanger300: stateComponents.colorDanger300,
    //     colorDanger400: stateComponents.colorDanger400,
    //     colorDanger500: stateComponents.colorDanger500,
    //     colorDanger600: stateComponents.colorDanger600,
    //     colorDanger700: stateComponents.colorDanger700,
    //     colorDanger800: stateComponents.colorDanger800,
    //     colorDanger900: stateComponents.colorDanger900,
    //   },
    //   breadcrumbs: {
    //     backgroundColor: stateComponents.breadcrumbsBackgroundColor,
    //     breadcrumbsItem: {
    //       color: stateComponents.breadcrumbsItemColor,
    //       dividerColor: stateComponents.breadcrumbsItemDividerColor,
    //       itemSpace: stateComponents.breadcrumbsItemPaddingLeft,
    //     },
    //     breadcrumbsItemActive: {
    //       color: stateComponents.breadcrumbsItemActiveColor,
    //     },
    //   },
    //   form: {
    //     label: {
    //       color: stateComponents.formLabelColor,
    //     },
    //     input: {
    //       backgroundColor: stateComponents.formInputBackgroundColor,
    //       color: stateComponents.formInputColor,
    //       borderRadius: stateComponents.formInputBorderRadius,
    //       borderWidth: stateComponents.formInputBorderWidth,
    //       borderColor: stateComponents.formInputBorderColor,
    //       padding: stateComponents.formInputPadding,
    //     },
    //   },
    //   subHeader: {
    //     BackgroundColor: stateComponents.subHeaderBackgroundColor,
    //     BackgroundGradient: stateComponents.subHeaderBackgroundGradient,
    //     BackgroundImage: stateComponents.subHeaderBackgroundImage,
    //     BorderWidth: stateComponents.subHeaderBorderWidth,
    //     BorderColor: stateComponents.subHeaderBorderColor,
    //     BorderRadius: stateComponents.subHeaderBorderRadius,
    //     Shadow: stateComponents.subHeaderShadow,
    //     Color: stateComponents.subHeaderColor,
    //     Height: stateComponents.subHeaderHeight,
    //     FontSize: stateComponents.subHeaderFontSize,
    //     FilterBlur: stateComponents.subHeaderFilterBlur,
    //   },
    //   subHeaderTitle: {
    //     BackgroundColor: stateComponents.subHeaderTitleBackgroundColor,
    //     BackgroundGradient: stateComponents.subHeaderTitleBackgroundGradient,
    //     BackgroundImage: stateComponents.subHeaderTitleBackgroundImage,
    //     BorderWidth: stateComponents.subHeaderTitleBorderWidth,
    //     BorderColor: stateComponents.subHeaderTitleBorderColor,
    //     Shadow: stateComponents.subHeaderTitleShadow,
    //     Color: stateComponents.subHeaderTitleColor,
    //     Height: stateComponents.subHeaderTitleHeight,
    //     FontSize: stateComponents.subHeaderTitleFontSize,
    //     FontWeight: stateComponents.subHeaderTitleFontWeight,
    //     FilterBlur: stateComponents.subHeaderTitleFilterBlur,
    //   },
    //   subHeaderText: {
    //     BackgroundColor: stateComponents.subHeaderTextBackgroundColor,
    //     BackgroundGradient: stateComponents.subHeaderTextBackgroundGradient,
    //     BackgroundImage: stateComponents.subHeaderTextBackgroundImage,
    //     BorderWidth: stateComponents.subHeaderTextBorderWidth,
    //     BorderColor: stateComponents.subHeaderTextBorderColor,
    //     Shadow: stateComponents.subHeaderTextShadow,
    //     Color: stateComponents.subHeaderTextColor,
    //     Height: stateComponents.subHeaderTextHeight,
    //     FontSize: stateComponents.subHeaderTextFontSize,
    //     FilterBlur: stateComponents.subHeaderTextFilterBlur,
    //   },
    // };

    axios
      .post(`http://localhost:8000/api/${selectedTemplate}`, {
        dataStyle,
      })
      .then(function ({ data }) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
      className="position-fixed text-light d-flex justify-content-between align-items-center"
      style={{}}
      id="cubex-navbar"
    >
      <div className="d-flex align-items-center">
        <img src="Logo-cubex.svg" alt="Logo-cubex" id="logo-cubex" />
        <button className="mr-5">
          <img src="hamburger-menu-icon.svg" alt="" />
        </button>
        <div className="d-flex align-items-center" style={{ gap: "5px" }}>
          <div>
            <input
              type="text"
              className="input input-dark"
              placeholder="Code"
              value={templateStore.stateTemplateCode}
              disabled
              style={{ width: "70px" }}
            />
          </div>
          {templateStore.stateTemplate !== "" ? (
            <img
              src={`template/${templateStore.stateTemplate}.png`}
              alt={templateStore.stateTemplate}
              className="template-image rounded-circle"
              width={"30px"}
            />
          ) : null}
          {templateStore.stateCompanyName !== "" ? (
            <div className="position-relative">
              <p>{templateStore.stateCompanyName}</p>
              <button
                className="position-absolute d-flex justify-content-center align-items-center"
                onClick={() => templateStore.resetTemplate()}
                style={{
                  top: "-10px",
                  right: "-20px",
                  width: "20px",
                  height: "20px",
                  background: "red",
                  color: "white",
                  borderRadius: "100%",
                }}
              >
                x
              </button>
            </div>
          ) : null}
        </div>
      </div>
      {/* Kanan */}
      <div className="d-flex align-items-center" style={{ gap: "14px" }}>
        {/* Toggle */}
        <div className="toggle">
          <div className="toggle-switch"></div>
        </div>
        {/* End Toggle */}
        <button className="btn btn-primary">Use default template</button>
        <button
          className="btn btn-outline-primary d-flex align-items-center"
          style={{ gap: "8px" }}
        >
          <img src="eye-icon.svg" alt="eye-icon" />
          <span>Preview All</span>
        </button>
        {/* Dropdown */}
        <div className="position-relative">
          <div
            className="btn btn-outline-primary d-flex align-items-center "
            style={{ gap: "8px" }}
            onClick={() => setDropdownMenu(!dropdownMenu)}
          >
            <img src="save-icon.svg" alt="save-icon" />
            <span>Save</span>
          </div>
          {/* Dropdown Menu */}
          <div
            className={`position-absolute card flex-column ${
              dropdownMenu ? "d-flex" : "d-none"
            }`}
            style={{
              color: "white",
              bottom: "-122px",
              left: "0",
              width: "180px",
              gap: "10px",
              padding: "10px",
            }}
          >
            <button
              className="btn btn-primary"
              onClick={() => handleSaveButton("smart-admin")}
            >
              Smart Admin
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleSaveButton("smart-admin")}
            >
              SB Admin
            </button>
          </div>
          {/* End Dropdown Menu */}
        </div>
        {/* End Dropdown */}
        <button
          className="btn btn-outline-primary d-flex align-items-center "
          style={{ gap: "8px" }}
        >
          <img src="reset-icon.svg" alt="reset-icon" />
          <span>Reset</span>
          <div></div>
        </button>

        {/* Profile */}
        <div>
          <span>Super Cubex Billing</span>
          <img src="arrow-down.svg" alt="arrow-down" />
        </div>
        {/* End Profile Profile */}
      </div>
      {/* End Kanan */}
    </div>
  );
};

export default Navbar;
