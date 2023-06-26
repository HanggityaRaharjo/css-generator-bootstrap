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

const ButtonPage = () => {
  const [currentTab, setCurrentTab] = useState("btn");
  const buttonData = {
    btn: [
      {
        name: "Font Weight",
        property: "btnFontWeight",
        defaultValue: "500",
        type: "text",
        placeholder: "0",
      },
      {
        name: "Padding",
        property: "btnPadding",
        defaultValue: "0.375rem 0.375rem",
        type: "text",
        placeholder: "2px",
      },
      {
        name: "Line Height",
        property: "btnLineHeight",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
      {
        name: "Border Radius",
        property: "btnBorderRadius",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
    ],
  };
  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="Button"
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
                  direction="column"
                  height="full"
                >
                  <div className="d-flex gap-5 mb-30">
                    <button type="button" className="btn btn-primary">
                      Primary
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-success">
                      Success
                    </button>
                    <button type="button" className="btn btn-danger">
                      Danger
                    </button>
                    <button type="button" className="btn btn-warning">
                      Warning
                    </button>
                    <button type="button" className="btn btn-info">
                      Info
                    </button>
                    <button type="button" className="btn btn-light">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark">
                      Dark
                    </button>
                  </div>
                  <div className="d-flex gap-5">
                    <button type="button" className="btn btn-outline-primary">
                      Primary
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      Success
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                      Danger
                    </button>
                    <button type="button" className="btn btn-outline-warning">
                      Warning
                    </button>
                    <button type="button" className="btn btn-outline-info">
                      Info
                    </button>
                    <button type="button" className="btn btn-outline-light">
                      Light
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                      Dark
                    </button>
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

        <ButtonComponent buttonData={buttonData} />
      </Section>
    </Layout>
  );
};

const ButtonComponent = ({ buttonData }) => {
  return (
    <Card>
      <h3 className="text-center">Button</h3>
      {/* Dimension */}
      <h4>Dimension</h4>
      <Grid className="justify-content-between">
        {buttonData.btn.map((data, index) => (
          <Col key={index} column={4} className="mb-1">
            {data.type == "text" || data.type == "number" ? (
              <InputText
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            ) : (
              <InputColor
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            )}
          </Col>
        ))}
      </Grid>
    </Card>
  );
};

export default ButtonPage;
