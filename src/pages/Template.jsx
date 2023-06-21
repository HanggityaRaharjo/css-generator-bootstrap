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
            <Card>
              <Monitor>
                <Flex
                  content="center"
                  items="center"
                  direction="row"
                  height="full"
                >
                  <p>asd</p>
                </Flex>
              </Monitor>
            </Card>
          </Col>
          <Col column={3}></Col>
        </Grid>
      </Section>
    </Layout>
  );
};

export default Template;
