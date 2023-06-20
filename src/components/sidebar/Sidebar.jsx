import SidebarNavItem from "./SidebarNavItem";
import SidebarDivider from "./SidebarDivider";
import SidebarActive from "./SidebarActive";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <SidebarMenu>
      <SidebarNavItem image="" name="Dashboard " to={"/"} />
      <SidebarDivider name="HTML" />
      <SidebarNavItem
        image="layout-template-icon.svg"
        name="Layout Template"
        to={"/template"}
      />
      <SidebarNavItem
        image="layout-design-icon.svg"
        name="Layout Design"
        to={"/design"}
      />
      <SidebarNavItem
        image="layout-color-icon.svg"
        name="Layout Color"
        to={"/color"}
      />
      <SidebarDivider name="UI Features" />
      <SidebarNavItem image="card-icon.svg" name="Card" to={"/card"} />
      <SidebarNavItem
        image="breadcrumbs-icon.svg"
        name="Breadcrumbs"
        to={"/breadcrumbs"}
      />
      <SidebarNavItem
        image="sub-header-icon.svg"
        name="sub Header"
        to={"/sub-header"}
      />

      <SidebarNavItem image="form-icon.svg" name="Form" to={"/form"} />
      <SidebarNavItem image="button-icon.svg" name="Button" to={"/button"} />
      <SidebarNavItem image="tabs-icon.svg" name="Tabs" to={"/tabs"} />
      <SidebarNavItem image="pop-up-icon.svg" name="pop-up" to={"/pop-up"} />
      <SidebarNavItem image="toast-icon.svg" name="Toast" to={"/toast"} />
    </SidebarMenu>
  );
};

export default Sidebar;
