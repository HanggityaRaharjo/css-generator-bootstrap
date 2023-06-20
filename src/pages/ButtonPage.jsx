import Layout from "../Layout";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";

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
      <Section>Button</Section>
    </Layout>
  );
};

export default ButtonPage;
