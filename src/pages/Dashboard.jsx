import Layout from "../Layout";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";

const Dashboard = () => {
  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="Dashboard"
        content="Welcome to Cube-x CSS Generator"
      />
      <Section>
        <p>asdasdasd</p>
      </Section>
    </Layout>
  );
};

export default Dashboard;
