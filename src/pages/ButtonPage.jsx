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

const ButtonPage = () => {
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
                    <button type="button" class="btn btn-primary">
                      Primary
                    </button>
                    <button type="button" class="btn btn-secondary">
                      Secondary
                    </button>
                    <button type="button" class="btn btn-success">
                      Success
                    </button>
                    <button type="button" class="btn btn-danger">
                      Danger
                    </button>
                    <button type="button" class="btn btn-warning">
                      Warning
                    </button>
                    <button type="button" class="btn btn-info">
                      Info
                    </button>
                    <button type="button" class="btn btn-light">
                      Light
                    </button>
                    <button type="button" class="btn btn-dark">
                      Dark
                    </button>
                  </div>
                  <div className="d-flex gap-5">
                    <button type="button" class="btn btn-outline-primary">
                      Primary
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      Secondary
                    </button>
                    <button type="button" class="btn btn-outline-success">
                      Success
                    </button>
                    <button type="button" class="btn btn-outline-danger">
                      Danger
                    </button>
                    <button type="button" class="btn btn-outline-warning">
                      Warning
                    </button>
                    <button type="button" class="btn btn-outline-info">
                      Info
                    </button>
                    <button type="button" class="btn btn-outline-light">
                      Light
                    </button>
                    <button type="button" class="btn btn-outline-dark">
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

export default ButtonPage;
