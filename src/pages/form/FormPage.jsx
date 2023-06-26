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
import FormLabel from "./FormLabel";
import { useState } from "react";
import FormInput from "./FormInput";

const FormPage = () => {
  const [currentTab, setCurrentTab] = useState("form-label");
  const formData = {
    label: {
      font: [
        {
          name: "Color",
          property: "formLabelColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "formLabelFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "formLabelFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Font Weight",
          property: "formLabelFontWeight",
          defaultValue: "100",
          type: "text",
          placeholder: "0px",
        },
      ],
    },
    input: {
      dimension: [
        {
          name: "Height",
          property: "formInputHeight",
          defaultValue: "0rem",
          type: "text",
          placeholder: "0rem",
        },
        {
          name: "padding",
          property: "formInputPadding",
          defaultValue: "0px 0px 0px 0px",
          type: "text",
          placeholder: "0px 0px 0px 0px",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "formInputBorderWidth",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "formInputBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "BorderRadius",
          property: "formInputBorderRadius",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Shadow",
          property: "formInputShadow",
          defaultValue: "0px 20px 50px grey",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "formInputColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "formInputFontFamily",
          defaultValue: "Arial,mono-thin,reguler",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "formInputFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "formInputBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "formInputBackgroundGradient",
          defaultValue: "linear-gradient(red, yellow)",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "formInputFilterBlur",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [],
    },
  };
  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="Form"
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
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputEmail1"
                        onClick={() => setCurrentTab("form-label")}
                        className={`${
                          currentTab == "form-label" ? "border-active" : null
                        }`}
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className={`form-control ${
                          currentTab == "form-input" ? "border-active" : null
                        }`}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPassword1"
                        className={`${
                          currentTab == "form-label" ? "border-active" : null
                        }`}
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${
                          currentTab == "form-input" ? "border-active" : null
                        }`}
                        id="exampleInputPassword1"
                        onClick={() => setCurrentTab("form-input")}
                      />
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Check me out
                      </label>
                    </div>
                    <button className="btn btn-primary">Submit</button>
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
        {currentTab == "form-label" ? <FormLabel formData={formData} /> : null}
        {currentTab == "form-input" ? <FormInput formData={formData} /> : null}
      </Section>
    </Layout>
  );
};

export default FormPage;
