import Layout from "../Layout";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";

const PopUpPage = () => {
  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="PopUp"
        content="Welcome to Cube-x CSS Generator"
      />
      <Section>PopUp</Section>
    </Layout>
  );
};

export default PopUpPage;
