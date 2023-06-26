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
import { useState } from "react";
import SubheaderComponent from "./SubheaderComponent";
import SubheaderTitle from "./SubheaderTitle";
import SubheaderText from "./SubheaderText";

const SubHeaderPage = () => {
  const [currentTab, setCurrentTab] = useState("sub-header");
  const subheaderData = {
    subHeader: {
      dimension: [
        {
          name: "Height",
          property: "subHeaderHeight",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "subHeaderBorderWidth",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Radius",
          property: "subHeaderBorderRadius",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "subHeaderBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "subHeaderShadow",
          defaultValue: "0px 20px 50px grey",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "subHeaderColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "subHeaderFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "subHeaderFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "subHeaderBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "subHeaderBackgroundGradient",
          defaultValue: "linear-gradient(red, yellow)",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "subHeaderFilterBlur",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "subHeaderBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    subHeaderTitle: {
      dimension: [
        {
          name: "Height",
          property: "subHeaderTitleHeight",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "subHeaderTitleBorderWidth",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Radius",
          property: "subHeaderTitleBorderRadius",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "subHeaderTitleBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "subHeaderTitleShadow",
          defaultValue: "0px 20px 50px grey",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "subHeaderTitleColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "subHeaderTitleFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "subHeaderTitleFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Font Weight",
          property: "subHeaderTitleFontWeight",
          defaultValue: "100",
          type: "number",
          placeholder: "500",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "subHeaderTitleBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "subHeaderTitleBackgroundGradient",
          defaultValue: "linear-gradient(red, yellow)",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "subHeaderTitleFilterBlur",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "subHeaderTitleBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    subHeaderText: {
      dimension: [
        {
          name: "Height",
          property: "subHeaderTextHeight",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "subHeaderTextBorderWidth",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Radius",
          property: "subHeaderTextBorderRadius",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "subHeaderTextBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "subHeaderTextShadow",
          defaultValue: "0px 20px 50px grey",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "subHeaderTextColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "subHeaderTextFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "subHeaderTextFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "subHeaderTextBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "subHeaderTextBackgroundGradient",
          defaultValue: "linear-gradient(red, yellow)",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "subHeaderTextFilterBlur",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "subHeaderTextBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
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
        title="Sub Header"
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
                  <div
                    className={`bg-neutral d-flex align-items-center px-5 text-light mb-30 ${
                      currentTab == "sub-header" ? "border-active" : null
                    }`}
                    style={{
                      height: "100px",
                      borderRadius: "8px",
                      gap: "16px",
                    }}
                    onDoubleClick={() => setCurrentTab("sub-header")}
                  >
                    <div>
                      <img
                        src={"dashboard-md-icon.svg"}
                        alt="asd"
                        width={"57px"}
                      />
                    </div>
                    <div>
                      <h4
                        className={`sub-header-title ${
                          currentTab == "sub-header-title"
                            ? "border-active"
                            : null
                        }`}
                        onClick={() => setCurrentTab("sub-header-title")}
                        onDoubleClick={() => setCurrentTab("sub-header")}
                      >
                        Sub Header Title
                      </h4>
                      <p
                        className={`sub-header-content ${
                          currentTab == "sub-header-text"
                            ? "border-active"
                            : null
                        }`}
                        onClick={() => setCurrentTab("sub-header-text")}
                        onDoubleClick={() => setCurrentTab("sub-header")}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore, aut.
                      </p>
                    </div>
                  </div>
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
        {currentTab == "sub-header" ? (
          <SubheaderComponent subheaderData={subheaderData} />
        ) : null}
        {currentTab == "sub-header-title" ? (
          <SubheaderTitle subheaderData={subheaderData} />
        ) : null}
        {currentTab == "sub-header-text" ? (
          <SubheaderText subheaderData={subheaderData} />
        ) : null}
      </Section>
    </Layout>
  );
};

export default SubHeaderPage;
