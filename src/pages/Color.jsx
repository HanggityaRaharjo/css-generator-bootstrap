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
import useColorStore from "../store/ColorStore";

const Color = () => {
  const stateColor = useColorStore((state) => state);

  console.log(stateColor);

  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="Layout Color"
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
                  <BoxColor variant={"primary"} />
                  <BoxColor variant={"secondary"} />
                  <BoxColor variant={"success"} />
                  <BoxColor variant={"warning"} />
                  <BoxColor variant={"danger"} />
                  <BoxColor variant={"info"} />
                  <BoxColor variant={"dark"} />
                  <BoxColor variant={"light"} />
                </Flex>
              </Monitor>
            </Card>
          </Col>
          <Col column={4}></Col>
        </Grid>
        <Card>
          <Grid className="justify-content-between">
            <Col column={4} className="mb-5">
              <InputText />
            </Col>
            <Col column={4} className="mb-5">
              <InputColor />
            </Col>
            <Col column={4} className="mb-5">
              <InputColor />
            </Col>
            <Col column={4} className="mb-5">
              <InputColor />
            </Col>
            <Col column={4} className="mb-5">
              <InputColor />
            </Col>
            <Col column={4} className="mb-5">
              <InputColor />
            </Col>
            <Col column={4} className="mb-5">
              <InputColor />
            </Col>
            <Col column={4} className="mb-5">
              <InputColor />
            </Col>
            <Col column={4} className="mb-5">
              <InputColor />
            </Col>
          </Grid>
        </Card>
      </Section>
    </Layout>
  );
};

export default Color;

const BoxColor = ({ variant }) => {
  return (
    <div className="d-flex w-100 justify-content-between mb-4">
      <div className="d-flex gap-30 align-items-center">
        <p>Primary Color</p>
        <div
          className={`bg-${variant}`}
          style={{ width: "32px", height: "32px" }}
        ></div>
      </div>
      <div>
        <p>#FFF7EF</p>
      </div>
      <div className="d-flex gap-30">
        <div
          className={`bg-${variant}`}
          style={{ width: "32px", height: "32px" }}
        ></div>
        <div
          className={`bg-${variant}`}
          style={{ width: "32px", height: "32px" }}
        ></div>
        <div
          className={`bg-${variant}`}
          style={{ width: "32px", height: "32px" }}
        ></div>
        <div
          className={`bg-${variant}`}
          style={{ width: "32px", height: "32px" }}
        ></div>
        <div
          className={`bg-${variant}`}
          style={{ width: "32px", height: "32px" }}
        ></div>
        <div
          className={`bg-${variant}`}
          style={{ width: "32px", height: "32px" }}
        ></div>
        <div
          className={`bg-${variant}`}
          style={{ width: "32px", height: "32px" }}
        ></div>
        <div
          className={`bg-${variant}`}
          style={{ width: "32px", height: "32px" }}
        ></div>
        <div
          className={`bg-${variant}`}
          style={{ width: "32px", height: "32px" }}
        ></div>
        <div
          className={`bg-${variant}`}
          style={{ width: "32px", height: "32px" }}
        ></div>
      </div>
    </div>
  );
};
