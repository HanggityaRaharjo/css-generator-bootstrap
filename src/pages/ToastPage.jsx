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

const ToastPage = () => {
  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="Toast"
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
                    <div className="toast fade show">
                      <div className="toast-header">
                        <svg
                          className="bd-placeholder-img rounded mr-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>asd </title>
                          <rect
                            width="100%"
                            height="100%"
                            fill="#007aff"
                          ></rect>
                          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                            {" "}
                          </text>
                        </svg>

                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" className="ml-2 mb-1 close">
                          <span>×</span>
                        </button>
                      </div>
                      <div className="toast-body text-dark">
                        Hello, world! This is a toast message.
                      </div>
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

export default ToastPage;
