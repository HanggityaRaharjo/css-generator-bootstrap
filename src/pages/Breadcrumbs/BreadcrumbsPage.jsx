import Layout from "../../Layout";
import Card from "../../components/Card";
import Monitor from "../../components/Monitor";
import Section from "../../components/Section";
import SubHeader from "../../components/SubHeader";
import Col from "../../components/layout/Col";
import Flex from "../../components/layout/Flex";
import Grid from "../../components/layout/Grid";
import InputRange from "../../components/input/InputRange";
import InputText from "../../components/input/InputText";
import InputColor from "../../components/input/InputColor";
import BreadcrumbsComponent from "./BreadcrumbsComponent";
import BreadcrumbsItem from "./BreadcrumbsItem";
import BreadcrumbsItemActive from "./BreadcrumbsItemActive";
import { useState } from "react";

const Breadcrumbs = () => {
  const [currentTab, setCurrentTab] = useState("breadcrumbs");
  const breadcrumbsData = {
    breadcrumbs: {
      dimension: [
        {
          name: "Height",
          property: "breadcrumbsHeight",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "breadcrumbsBorderWidth",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "breadcrumbsBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "breadcrumbsShadow",
          defaultValue: "0px 20px 50px grey",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Font Family",
          property: "breadcrumbsFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "breadcrumbsFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "breadcrumbsBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "breadcrumbsBackgroundGradient",
          defaultValue: "linear-gradient(red, yellow)",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "breadcrumbsFilterBlur",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
    },
    breadcrumbsItem: {
      font: [
        {
          name: "Color",
          property: "breadcrumbsItemColor",
          defaultValue: "",
          type: "color",
          placeholder: "",
        },
        {
          name: "Divider Color",
          property: "breadcrumbsItemDividerColor",
          defaultValue: "",
          type: "color",
          placeholder: "",
        },
        {
          name: "Item Space",
          property: "breadcrumbsItemPaddingLeft",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
      ],
    },
    breadcrumbsItemActive: {
      font: [
        {
          name: "Color",
          property: "breadcrumbsItemActiveColor",
          defaultValue: "",
          type: "color",
          placeholder: "",
        },
      ],
    },
  };

  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="Breadcrumbs"
        content="Welcome to Cube-x CSS Generator"
      />
      <Section>
        <Grid className="mb-30">
          <Col column={8}>
            <Card>
              <Monitor>
                <Flex
                  content="center"
                  items="center"
                  direction="row"
                  height="full"
                >
                  <nav aria-label="breadcrumb">
                    <ol
                      className={`breadcrumb ${
                        currentTab == "breadcrumbs" ? "border-active" : null
                      }`}
                    >
                      <li
                        className={`breadcrumb-item text-primary cursor-pointer ${
                          currentTab == "breadcrumbs-item"
                            ? "border-active"
                            : null
                        }`}
                        onClick={() => setCurrentTab("breadcrumbs-item")}
                        onDoubleClick={() => setCurrentTab("breadcrumbs")}
                      >
                        <span>Home</span>
                      </li>
                      <li
                        className={`breadcrumb-item text-primary cursor-pointer ${
                          currentTab == "breadcrumbs-item"
                            ? "border-active"
                            : null
                        }`}
                        onClick={() => setCurrentTab("breadcrumbs-item")}
                        onDoubleClick={() => setCurrentTab("breadcrumbs")}
                      >
                        <span>Library</span>
                      </li>
                      <span
                        className={`breadcrumb-item active cursor-pointer ${
                          currentTab == "breadcrumbs-item-active"
                            ? "border-active"
                            : null
                        }`}
                        aria-current="page"
                        onClick={() => setCurrentTab("breadcrumbs-item-active")}
                        onDoubleClick={() => setCurrentTab("breadcrumbs")}
                      >
                        Data
                      </span>
                    </ol>
                  </nav>
                </Flex>
              </Monitor>
            </Card>
          </Col>
          <Col column={4}>
            <Card>
              <InputRange />
              <InputRange />
            </Card>
          </Col>
        </Grid>
        {currentTab === "breadcrumbs" ? (
          <BreadcrumbsComponent breadcumbsData={breadcrumbsData} />
        ) : null}
        {currentTab === "breadcrumbs-item" ? (
          <BreadcrumbsItem breadcumbsData={breadcrumbsData} />
        ) : null}
        {currentTab === "breadcrumbs-item-active" ? (
          <BreadcrumbsItemActive breadcumbsData={breadcrumbsData} />
        ) : null}
      </Section>
    </Layout>
  );
};

export default Breadcrumbs;
