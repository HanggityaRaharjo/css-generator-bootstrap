import Layout from "../Layout";
import Card from "../components/Card";
import Monitor from "../components/Monitor";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";
import Col from "../components/layout/Col";
import Flex from "../components/layout/Flex";
import Grid from "../components/layout/Grid";
import InputRange from "../components/input/InputRange";
import InputText from "../components/input/InputText";
import InputColor from "../components/input/InputColor";

const PopUpPage = () => {
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

export default PopUpPage;
