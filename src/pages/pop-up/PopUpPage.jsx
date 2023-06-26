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

const PopUpPage = () => {
  const popUpData = {
    popUp: {
      dimension: [
        {
          name: "Height",
          property: "popUpHeight",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "popUpBorderWidth",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "popUpBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "popUpShadow",
          defaultValue: "0px 20px 50px grey",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "popUpColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "popUpFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "popUpFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "popUpCardBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Success",
          property: "popUpSuccessBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Failed",
          property: "popUpFailedBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "popUpBackgroundGradient",
          defaultValue: "linear-gradient(red, yellow)",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "popUpFilterBlur",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "popUpBackgroundImage",
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
        title="PopUp"
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
                  <Grid>
                    <Col column={6}>
                      <div
                        className="bg-light text-dark rounded p-4 d-flex justify-content-center align-items-center flex-column"
                        style={{ width: "384px" }}
                      >
                        <img
                          src="success-icon.svg"
                          alt=""
                          style={{ width: "100px" }}
                        />
                        <p>Success Title</p>
                        <button className="btn btn-primary">OK</button>
                      </div>
                    </Col>
                    <Col column={6}>
                      <div
                        className="bg-light text-dark rounded p-4 d-flex justify-content-center align-items-center flex-column"
                        style={{ width: "384px" }}
                      >
                        <img
                          src="warning-icon.svg"
                          alt=""
                          style={{ width: "100px" }}
                        />
                        <p>Warning Title</p>
                        <button className="btn btn-primary">OK</button>
                      </div>
                    </Col>
                  </Grid>
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
      </Section>
    </Layout>
  );
};

export default PopUpPage;
