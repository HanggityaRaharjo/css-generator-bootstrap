import Layout from "../Layout";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";

const Template = () => {
  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="Layout Template"
        content="Welcome to Cube-x CSS Generator"
      />
      <Section>Template</Section>
    </Layout>
  );
};

export default Template;
