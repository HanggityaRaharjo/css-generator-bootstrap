import Layout from "../Layout";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";

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
      <Section>Form</Section>
    </Layout>
  );
};

export default FormPage;
