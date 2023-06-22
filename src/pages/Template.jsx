import Layout from "../Layout";
import Card from "../components/Card";
import Monitor from "../components/Monitor";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";
import Col from "../components/layout/Col";
import Flex from "../components/layout/Flex";
import Grid from "../components/layout/Grid";
import InputText from "../components/input/InputText";
import InputColor from "../components/input/InputColor";
import Canvas from "../components/Canvas";
const Template = () => {
  return (
    <Layout>
      <Section>
        <Grid className="mb-30">
          <Col column={9}>
            <SubHeader
              height="100px"
              rounded="8px"
              image="dashboard-md-icon.svg"
              title="Layout Template"
              content="Welcome to Cube-x CSS Generator"
            />
            <Canvas />
          </Col>
          <Col column={3}>
            <div className="position-relative w-100" style={{ width: "389px" }}>
              <div
                className="position-fixed"
                style={{ width: "389px", top: "70px" }}
              >
                <div className="card-cubex mb-30">
                  <InputPage label="Page Name" type="text" title="Page Name" />
                  <InputPage
                    label="Section Name"
                    type="text"
                    title="Section Name"
                  />
                  <InputPage label="Set Row" type="number" title="Set Row" />
                  <InputPage
                    label="Set Column"
                    type="number"
                    title="Set Column"
                  />
                </div>

                {/* Bawah */}
                <div
                  className="card-cubex mb-30"
                  style={{
                    overflowY: "scroll",
                    height: "420px",
                  }}
                >
                  <p className="text-center mb-30">Component</p>
                  {/* Component */}
                  <Grid>
                    <Col column={6} className="mb-30">
                      <DragComponent
                        image="component-ico/alert-icon.svg"
                        name="Alert"
                      />
                    </Col>
                    <Col column={6} className="mb-30">
                      <DragComponent
                        image="component-ico/breadcrumbs-icon.svg"
                        name="Breadcrumbs"
                      />
                    </Col>
                    <Col column={6} className="mb-30">
                      <DragComponent
                        image="component-ico/card-icon.svg"
                        name="Card"
                      />
                    </Col>
                    <Col column={6} className="mb-30">
                      <DragComponent
                        image="component-ico/pop-up-icon.svg"
                        name="Pop Up"
                      />
                    </Col>
                    <Col column={6} className="mb-30">
                      <DragComponent
                        image="component-ico/tabs-icon.svg"
                        name="Tabs"
                      />
                    </Col>
                    <Col column={6} className="mb-30">
                      <DragComponent
                        image="component-ico/toast-icon.svg"
                        name="Toast"
                      />
                    </Col>
                  </Grid>
                  {/*  */}
                </div>
                {/* End Bawah */}
              </div>
            </div>
          </Col>
        </Grid>
      </Section>
    </Layout>
  );
};

export default Template;

const DragComponent = ({ image, name }) => {
  return (
    <div
      draggable
      className="bg-neutral-800 rounded"
      style={{ width: "100%", height: "116px", cursor: "grab" }}
    >
      <Flex
        height={"full"}
        content="center"
        items={"center"}
        direction={"column"}
      >
        <img src={image} alt={name} />
        <p>{name}</p>
      </Flex>
    </div>
  );
};

const InputPage = ({ label, type, title }) => {
  return (
    <div className="form-group">
      <label htmlFor="page-name">{title}</label>
      <input
        type={type}
        className="form-control cubex-input"
        id="page-name"
        placeholder={`${title}...`}
      />
    </div>
  );
};
