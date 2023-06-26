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
import useStyleStore from "../../store/CssStore";
import CardComponent from "./CardComponent";
import { useState } from "react";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

const CardPage = () => {
  const stateCard = useStyleStore((state) => state);
  const [currentTab, setCurrentTab] = useState("card");
  const cardData = {
    card: {
      dimension: [
        {
          name: "Height",
          property: "cardHeight",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "cardBorderWidth",
          defaultValue: "1px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "cardBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Border Radius",
          property: "cardBorderRadius",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Shadow",
          property: "cardShadow",
          defaultValue: "0px 20px 50px grey",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "cardColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "cardFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "cardFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "cardBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "cardBackgroundGradient",
          defaultValue: "linear-gradient(red, yellow)",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "cardFilterBlur",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "cardBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    cardHeader: {
      dimension: [
        {
          name: "Height",
          property: "cardHeaderHeight",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "cardHeaderBorderWidth",
          defaultValue: "1px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "cardHeaderBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "cardHeaderShadow",
          defaultValue: "0px 20px 50px grey",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "cardHeaderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "cardHeaderFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "cardHeaderFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "cardHeaderBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "cardHeaderBackgroundGradient",
          defaultValue: "linear-gradient(red, yellow)",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "cardHeaderFilterBlur",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "cardHeaderBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    cardContent: {
      dimension: [
        {
          name: "Height",
          property: "cardContentHeight",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "cardContentBorderWidth",
          defaultValue: "1px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "cardContentBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "cardContentShadow",
          defaultValue: "0px 20px 50px grey",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "cardContentColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "cardContentFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "cardContentFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "cardContentBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "cardContentBackgroundGradient",
          defaultValue: "linear-gradient(red, yellow)",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "cardContentFilterBlur",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [],
    },
    cardFooter: {
      dimension: [
        {
          name: "Height",
          property: "cardFooterHeight",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "cardFooterBorderWidth",
          defaultValue: "1px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "cardFooterBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "cardFooterShadow",
          defaultValue: "0px 20px 50px grey",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "cardFooterColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "cardFooterFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "cardFooterFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "cardFooterBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "cardFooterBackgroundGradient",
          defaultValue: "linear-gradient(red, yellow)",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "cardFooterFilterBlur",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "cardFooterBackgroundImage",
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
        title="Card"
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
                    className="card text-center"
                    style={{
                      border: `${
                        currentTab == "card" ? "1px solid red" : "none"
                      }`,
                    }}
                  >
                    <div
                      className="card-header cursor-pointer"
                      style={{
                        border: `${
                          currentTab == "cardHeader" ? "1px solid red" : "none"
                        }`,
                      }}
                      onClick={() => setCurrentTab("cardHeader")}
                      onDoubleClick={() => setCurrentTab("card")}
                    >
                      Card Header
                    </div>
                    <div
                      className="card-body cursor-pointer"
                      style={{
                        border: `${
                          currentTab == "cardContent" ? "1px solid red" : "none"
                        }`,
                      }}
                      onClick={() => setCurrentTab("cardContent")}
                      onDoubleClick={() => setCurrentTab("card")}
                    >
                      <h5 className="card-title">Card Body</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Illo, veniam?
                      </p>
                      <a href="#" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                    <div
                      className="card-footer cursor-pointer"
                      style={{
                        border: `${
                          currentTab == "cardFooter" ? "1px solid red" : "none"
                        }`,
                      }}
                      onClick={() => setCurrentTab("cardFooter")}
                      onDoubleClick={() => setCurrentTab("card")}
                    >
                      Card Footer
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
        {currentTab == "card" ? <CardComponent layoutData={cardData} /> : null}
        {currentTab == "cardHeader" ? (
          <CardHeader layoutData={cardData} />
        ) : null}
        {currentTab == "cardContent" ? (
          <CardContent layoutData={cardData} />
        ) : null}
        {currentTab == "cardFooter" ? (
          <CardFooter layoutData={cardData} />
        ) : null}
      </Section>
    </Layout>
  );
};

export default CardPage;
