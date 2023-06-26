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
import TabsItem from "./TabsItem";
import TabsActive from "./TabsActive";
import { useState } from "react";

const TabsPage = () => {
  const [currentTab, setCurrentTab] = useState("tabs-active");
  const tabsData = {
    tabsActive: {
      dimension: [
        {
          name: "Height",
          property: "tabsActiveContentHeight",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "tabsActiveContentBorderWidth",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "tabsActiveContentBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "tabsActiveContentShadow",
          defaultValue: "0px 20px 50px grey",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "tabsActiveContentColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "tabsActiveContentFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "tabsActiveContentFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "tabsActiveContentBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "tabsActiveContentBackgroundGradient",
          defaultValue: "linear-gradient(red, yellow)",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "tabsActiveContentFilterBlur",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "tabsActiveContentBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    tabsItem: {
      dimension: [
        {
          name: "Height",
          property: "tabsItemContentHeight",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "tabsItemContentBorderWidth",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "tabsItemContentBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "tabsItemContentShadow",
          defaultValue: "0px 20px 50px grey",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "tabsItemContentColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "tabsItemContentFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "tabsItemContentFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "tabsItemContentBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "tabsItemContentBackgroundGradient",
          defaultValue: "linear-gradient(red, yellow)",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "tabsItemContentFilterBlur",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "tabsItemContentBackgroundImage",
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
        title="Tabs"
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
                  <div>
                    <ul className="nav nav-tabs">
                      <li
                        className={`nav-item ${
                          currentTab == "tabs-active" ? "border-active" : ""
                        }`}
                      >
                        <a
                          className="nav-link active"
                          href="#"
                          onClick={() => setCurrentTab("tabs-active")}
                        >
                          Active
                        </a>
                      </li>
                      <li
                        className={`nav-item dropdown ${
                          currentTab == "tabs-item" ? "border-active" : ""
                        }`}
                      >
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                          role="button"
                          aria-expanded="false"
                          onClick={() => setCurrentTab("tabs-item")}
                        >
                          Dropdown
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </li>
                      <li
                        className={`nav-item ${
                          currentTab == "tabs-item" ? "border-active" : ""
                        }`}
                      >
                        <a
                          className="nav-link"
                          href="#"
                          onClick={() => setCurrentTab("tabs-item")}
                        >
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                      </li>
                    </ul>
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
        {currentTab == "tabs-active" ? (
          <TabsActive tabsData={tabsData} />
        ) : null}
        {currentTab == "tabs-item" ? <TabsItem tabsData={tabsData} /> : null}
      </Section>
    </Layout>
  );
};

export default TabsPage;
