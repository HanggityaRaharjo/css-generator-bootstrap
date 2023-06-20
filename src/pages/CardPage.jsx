import Layout from "../Layout";
import Card from "../components/Card";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";
import Grid from "../components/layout/Grid";
import Row from "../components/layout/Row";

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
        <Grid column={2}>
          <Row>
            <Card>
              <p>asdasdasdasdasddasd</p>
            </Card>
          </Row>
        </Grid>
      </Section>
    </Layout>
  );
};

export default CardPage;
