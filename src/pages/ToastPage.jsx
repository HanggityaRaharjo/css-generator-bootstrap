import Layout from "../Layout";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";

const ToastPage = () => {
  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="Toast"
        content="Welcome to Cube-x CSS Generator"
      />
      <Section>Toast</Section>
    </Layout>
  );
};

export default ToastPage;
