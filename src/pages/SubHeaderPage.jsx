import Layout from "../Layout";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";

const SubHeaderPage = () => {
  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="Sub Header"
        content="Welcome to Cube-x CSS Generator"
      />
      <Section>Sub Header</Section>
    </Layout>
  );
};

export default SubHeaderPage;
