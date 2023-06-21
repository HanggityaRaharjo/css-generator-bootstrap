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

const CardPage = () => {
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
                  <div className="card text-center">
                    <div className="card-header">Card Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Card Body</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Illo, veniam?
                      </p>
                      <a href="#" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                    <div className="card-footer">Card Footer</div>
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

export default CardPage;
