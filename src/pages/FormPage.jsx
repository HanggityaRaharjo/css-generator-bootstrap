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

const FormPage = () => {
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
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Check me out
                      </label>
                    </div>
                    <button class="btn btn-primary">Submit</button>
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

export default FormPage;
