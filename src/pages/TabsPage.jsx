import Layout from "../Layout";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";

const TabsPage = () => {
  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="Tabs"
        content="Welcome to Cube-x CSS Generator"
      />
      <Section>Tabs</Section>
    </Layout>
  );
};

export default TabsPage;
