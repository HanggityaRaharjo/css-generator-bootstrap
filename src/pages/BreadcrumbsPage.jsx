import Layout from "../Layout";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";

const Breadcrumbs = () => {
  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="Card"
        content="Welcome to Cube-x CSS Generator"
      />
      <Section>Breadcrumbs</Section>
    </Layout>
  );
};

export default Breadcrumbs;
